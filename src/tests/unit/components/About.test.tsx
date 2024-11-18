import { render, screen } from "@testing-library/react";
import About from "../../../components/About";

describe("About component", () => {
  test("renders heading with 'About Me'", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { name: /About Me/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders about image with correct alt text", () => {
    render(<About />);

    const aboutImage = screen.getByAltText("about");
    expect(aboutImage).toBeInTheDocument();
    expect(aboutImage).toHaveAttribute(
      "src",
      expect.stringContaining("about.jpg")
    );
  });

  test("renders about text content", () => {
    render(<About />);

    const aboutText = screen.getByText(/My name is Petr Michal/i);
    expect(aboutText).toBeInTheDocument();
  });

  test("renders LinkedIn link", () => {
    render(<About />);

    const linkedInLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/petr-michal-68b5a3245/"
    );
  });

  test("renders GitHub link", () => {
    render(<About />);

    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/petrmichal0"
    );
  });
});
