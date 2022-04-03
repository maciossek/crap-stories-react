import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AllProviders } from "../../../testUtils";
import HomeCreateView from "../HomeCreateView";

describe("HomeCreateView", () => {
  it("should show a success message", async () => {
    render(
      <AllProviders>
        <HomeCreateView />
      </AllProviders>
    );

    const fileInput = await screen.findByTestId("drop");
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: ".glb" });
    await userEvent.upload(fileInput, file);
    const titleField = await screen.findByLabelText("Title");
    const submitButton = await screen.findByRole("button", {
      name: /Add this story/i,
    });

    userEvent.type(titleField, "sth");
    userEvent.click(submitButton);

    const text = await screen.findByText(/Story created!/i);
    expect(text).toBeInTheDocument();
  });
});
