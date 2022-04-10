import { Form, message } from "antd";
import HomeFormFields from "./components/HomeFormFields";

export default function HomeCreateView() {
  const handleFinish = async (values) => {
    message.success("Story created!");
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      onFinish={handleFinish}
    >
      <HomeFormFields isLoading={false} />
    </Form>
  );
}
