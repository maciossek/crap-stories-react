import { render, screen } from "@testing-library/react";
import RequireAuth from "../RequireAuth";
import { AllProviders } from "../../../testUtils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <p>navigate</p>,
}));

describe("RequireAuth", () => {
  it("Should send us to login if we are not logged in", async () => {
    render(
      <AllProviders>
        <RequireAuth />
      </AllProviders>
    );
    const headline = await screen.findByText(/navigate/i);
    expect(headline).toBeInTheDocument();
  });

  it("Should let us through if we are logged in", async () => {
    const spy = jest
      .spyOn(window.localStorage.__proto__, "getItem")
      .mockImplementation(() => "asd");

    render(
      <AllProviders>
        <RequireAuth>
          <p>crap stories</p>
        </RequireAuth>
      </AllProviders>
    );
    const headline = await screen.findByText(/Crap stories/i);
    expect(headline).toBeInTheDocument();
    spy.mockReset();
  });
});
