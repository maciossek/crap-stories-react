import styled from "@emotion/styled";
import Story from "./components/Story";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import { RouteName } from "../../routes/routesnames";
const mockStory = {
  title: "This is a story",
  description:
    " Someone like you. Someone who'll rattle the cages. Swear to me! Swear to me! Does it come in black? I'm Batman Bruce Wayne, eccentric billionaire. I seek the means to fight injustice. To turn fear against those who prey on the fearful.",
};

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    marign: 1rem;
  }
`;

export default function HomeView() {
  return (
    <StoryContainer>
      <Story story={mockStory} />
      <div style={{ marginTop: "30px" }}>
        <Space align="center">
          <Button type="primary">show me another one</Button>
          <span>or</span>
          <Link to={`${RouteName.HOME}/create`}>
            <Button type="primary">add one yourself</Button>
          </Link>
        </Space>
      </div>
    </StoryContainer>
  );
}
