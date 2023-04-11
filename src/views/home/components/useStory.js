import { useState } from "react";
import env from "../../../config/env";

export default function useStory() {
  const [randomStory, setRandomStory] = useState();
  const [loading, setLoading] = useState(true);

  const getRandomStory = async () => {
    console.log("getRandomStory");
    setLoading(true);
    const response = await fetch(`${env.API_ENDPOINT}/story/random`);

    if (!response.ok) {
      throw Error("wat");
    }

    const data = await response.json();
    setLoading(false);
    setRandomStory(data);
  };

  return {
    operations: { getRandomStory },
    state: { loading, randomStory },
  };
}
