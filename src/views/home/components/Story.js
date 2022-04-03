import { Card } from "antd";

export default function Story({ story }) {
  return (
    <Card title={story.title} style={{ width: "60%" }}>
      <p>{story.description}</p>
    </Card>
  );
}
