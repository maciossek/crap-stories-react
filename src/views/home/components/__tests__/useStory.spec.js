import { renderHook, act } from "@testing-library/react";
import { AllProviders } from "../../../../testUtils";
import useStory from "../useStory";
import mockStories from "../../../../../mockdata/stories.json";
import { rest } from "msw";
import env from "../../../../config/env";

describe("useStory", () => {
  it("have a loading prop", async () => {
    const wrapper = ({ children }) => <AllProviders>{children}</AllProviders>;
    const { result } = renderHook(() => useStory(), { wrapper });

    expect(result.current.state.loading).toBeTruthy();
  });

  it("should get a random story", async () => {
    const wrapper = ({ children }) => <AllProviders>{children}</AllProviders>;
    const { result } = renderHook(() => useStory(), { wrapper });

    await act(async () => {
      await result.current.operations.getRandomStory();
      // await expect(result.current.operations.getRandomStory()).resolves.toEqual(
      //   mockStories[0]
      // );
    });

    expect(result.current.state.randomStory).toEqual(mockStories[0]);
  });

  it("display an error if stories can't be fetched", async () => {
    global.server.use(
      rest.get(`${env.API_ENDPOINT}/story/random`, (req, res, ctx) =>
        res(ctx.status(500), ctx.json({ message: "Internal Server Error" }))
      )
    );

    const wrapper = ({ children }) => <AllProviders>{children}</AllProviders>;
    const { result } = renderHook(() => useStory(), { wrapper });

    await act(async () => {
      await expect(result.current.operations.getRandomStory()).rejects.toEqual(
        Error("wat")
      );
    });
  });
});
