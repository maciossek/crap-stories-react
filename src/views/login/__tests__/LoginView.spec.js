import { render, screen } from "@testing-library/react";
import LoginView from "../LoginView";
import { AllProviders } from "../../../testUtils";

describe("LoginView", () => {
  it("Should render a headline", () => {
    render(
      <AllProviders>
        <LoginView />
      </AllProviders>
    );
    const headline = screen.getByLabelText(/Username/i);
    expect(headline).toBeInTheDocument();
  });
});
