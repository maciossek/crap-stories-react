import styled from "@emotion/styled";
import Story from "./components/Story";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import { RouteName } from "../../routes/routesnames";
import axios from "../../config/axios";
import { useEffect, useState } from "react";

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
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomStory = async () => {
    const res = await axios.get("/story/random");
    setStory(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomStory();
  }, []);

  const handleRandom = () => fetchRandomStory();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StoryContainer>
      <Story story={story} />
      <div style={{ marginTop: "30px" }}>
        <Space align="center">
          <Button type="primary" onClick={handleRandom}>
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
