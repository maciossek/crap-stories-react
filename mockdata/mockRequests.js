import { rest, graphql } from "msw";
import mockStories from "./stories.json";
import env from "../src/config/env";

const storyHandlers = [
  rest.get(`${env.API_ENDPOINT}/story/random`, (req, res, ctx) => {
    return res(ctx.json(mockStories[0]));
  }),
];

export const defaultHandlers = [...storyHandlers];

export default defaultHandlers;
