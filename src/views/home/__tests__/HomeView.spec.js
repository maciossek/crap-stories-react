import { render, screen } from "@testing-library/react";
import HomeView from "../HomeView";
import { AllProviders } from "../../../testUtils";

describe("HomeView", () => {
  it("Should render a headline", () => {
    render(
      <AllProviders>
        <HomeView />
      </AllProviders>
    );
    const headline = screen.getByText(/This is a story/i);
    expect(headline).toBeInTheDocument();
  });
});
