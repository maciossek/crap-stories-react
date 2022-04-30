import { Form, message } from "antd";
import HomeFormFields from "./components/HomeFormFields";
import { useMutation } from "@apollo/client";
import createStoryMutation from "./gql/createStory.mutation.query";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../routes/routesnames";

export default function HomeCreateView() {
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    const input = {
      title: values.title,
      imageUrl: "https://picsum.photos/600",
    };

    try {
      await createThreeasset({ variables: { input } });
      message.success("Story created!");
      navigate(RouteName.HOME);
    } catch (err) {
      console.log("err", err);
      message.error("Could not store story");
    }
  };

  const [createThreeasset, { data, error, loading }] =
    useMutation(createStoryMutation);

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      onFinish={handleFinish}
    >
      <HomeFormFields isLoading={loading} />
    </Form>
  );
}
