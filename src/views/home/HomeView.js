import styled from "@emotion/styled";
import { Button, Space } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RouteName } from "../../routes/routesnames";
import Story from "./components/Story";
import useStory from "./components/useStory";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    margin: 1rem;
  }
`;

export default function HomeView() {
  const { state, operations } = useStory();

  const handleClick = async () => {
    await operations.getRandomStory();
  };

  useEffect(() => {
    if (state.loading && !state.randomStory) {
      debugger;
      operations.getRandomStory();
    }
    console.log("use");
  }, [state, operations]);

  return (
    <StoryContainer>
      <Story story={state.randomStory ?? {}} />
      <div style={{ marginTop: "30px" }}>
        <Space align="center">
          <Button type="primary" onClick={handleClick}>
            show me another one
          </Button>
          <span>or</span>
          <Link to={`${RouteName.HOME}/create`}>
            <Button type="primary">add one yourself</Button>
          </Link>
        </Space>
      </div>
    </StoryContainer>
  );
}
