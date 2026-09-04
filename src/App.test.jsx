import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Portfolio application", () => {
  it("shows projects on the page", () => {
    render(<App />);

    expect(screen.getByText("Nairobi After Dark")).toBeInTheDocument();
    expect(screen.getByText("Form & Function")).toBeInTheDocument();
  });

  it("filters projects when the user searches", async () => {
    const user = userEvent.setup();

    render(<App />);

    const searchBox = screen.getByRole("searchbox");

    await user.type(searchBox, "Nairobi");

    expect(screen.getByText("Nairobi After Dark")).toBeInTheDocument();
    expect(screen.queryByText("Form & Function")).not.toBeInTheDocument();
  });

  it("adds a new project", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(
      screen.getByPlaceholderText("e.g. Future Forms"),
      "My New Project"
    );

    await user.type(
      screen.getByPlaceholderText("Branding"),
      "Design"
    );

    await user.type(
      screen.getByPlaceholderText("A short description of the project..."),
      "A test project for my portfolio."
    );

    await user.click(screen.getByRole("button", { name: /add project/i }));

    expect(screen.getByText("My New Project")).toBeInTheDocument();
  });
});