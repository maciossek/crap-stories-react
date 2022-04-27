import { screen, render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render the_maciossek", async () => {
    render(
      <>
        <Footer />
      </>
    );

    expect(screen.getByText(/the_maciossek/i)).toBeInTheDocument();
  });
});
