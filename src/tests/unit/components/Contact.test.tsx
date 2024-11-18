import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Contact from "../../../components/Contact";
import axios from "axios";

jest.mock("axios");

describe("Contact component", () => {
  test("renders heading with 'Contact Me'", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { name: /Contact Me/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders contact address", () => {
    render(<Contact />);

    const address = screen.getByText(/Neratovice/i);
    expect(address).toBeInTheDocument();
  });

  test("renders contact phone number", () => {
    render(<Contact />);

    const phoneNo = screen.getByText(/\+420 737 967 806/i);
    expect(phoneNo).toBeInTheDocument();
  });

  test("renders contact email with correct mailto link", () => {
    render(<Contact />);

    const emailLink = screen.getByRole("link", {
      name: /petrmichal0@gmail.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:petrmichal0@gmail.com");
  });

  test("displays error when email and message are empty", async () => {
    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: /Send Message/i });
    await user.click(submitButton);

    const errorMessage = screen.getByText(
      /Please provide both email and message/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays success message when email is sent successfully", async () => {
    jest.spyOn(axios, "post").mockResolvedValueOnce({ status: 200 });

    render(<Contact />);

    const emailInput = screen.getByPlaceholderText("Your Email");
    const messageInput = screen.getByPlaceholderText(/Your message/i);
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    await user.type(emailInput, "test@example.com");
    await user.type(messageInput, "Hello, this is a test message.");
    await user.click(submitButton);

    const successMessage = await screen.findByText(
      /Your message has been sent/i
    );
    expect(successMessage).toBeInTheDocument();
  });

  test("displays error message when email sending fails", async () => {
    jest
      .spyOn(axios, "post")
      .mockRejectedValueOnce(new Error("Error sending email"));

    render(<Contact />);

    const emailInput = screen.getByPlaceholderText("Your Email");
    const messageInput = screen.getByPlaceholderText(/Your message/i);
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    await user.type(emailInput, "test@example.com");
    await user.type(messageInput, "Hello, this is a test message.");
    await user.click(submitButton);

    const errorMessage = await screen.findByText(
      /Error sending email. Please try again/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("disables submit button while sending message", async () => {
    render(<Contact />);

    const emailInput = screen.getByPlaceholderText("Your Email");
    const messageInput = screen.getByPlaceholderText(/Your message/i);
    const submitButton = screen.getByRole("button", {
      name: /Send Message/i,
    }) as HTMLButtonElement;

    await user.type(emailInput, "test@example.com");
    await user.type(messageInput, "Hello, this is a test message.");

    console.log("Before click:", submitButton.disabled);

    await user.click(submitButton);

    console.log("After click:", submitButton.disabled);

    await waitFor(() => {
      console.log("During waitFor:", submitButton.disabled);
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveTextContent("Sending...");
    });

    await screen.findByText(/Your message has been sent!/i);
  });
});
