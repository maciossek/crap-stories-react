import { screen, render } from "@testing-library/react";
import Header from "../Header";
import { AllProviders } from "../../../testUtils";

describe("Header", () => {
  it("should render the_maciossek", async () => {
    render(
      <AllProviders>
        <Header />
      </AllProviders>
    );

    expect(screen.getByText(/crap stories/i)).toBeInTheDocument();
  });
});
