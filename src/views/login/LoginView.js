import { useState } from "react";
import { Alert, Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import env from "../../config/env";

export default function LoginView() {
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const locationState = location.state;
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    const response = await axios.post(`${env.API_ENDPOINT}/user/login`, {
      email: username,
      password: password,
    });

    console.log(response);

    if (response.statusText === "OK") {
      message.success("Login successful");
      localStorage.setItem("accessToken", response.data.token);

      if (locationState) {
        navigate(locationState.from);
      } else {
        navigate("/");
      }
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      {errorMessage ? (
        <div style={{ marginBottom: "24px" }}>
          <Alert message={errorMessage} type="error" showIcon />
        </div>
      ) : null}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
