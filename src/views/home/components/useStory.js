import { useState } from "react";
import env from "../../../config/env";
import axios from "../../../config/axios";

export default function useStory() {
  const [randomStory, setRandomStory] = useState();
  const [loading, setLoading] = useState(true);

  const getRandomStory = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/story/random`);
      setLoading(false);
      setRandomStory(response.data);
    } catch (err) {
      throw err;
    }
  };

  return {
    operations: { getRandomStory },
    state: { loading, randomStory },
  };
}
