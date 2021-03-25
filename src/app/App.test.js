import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const newNoteButton = screen.getByTestId(/new-note/i);
    expect(newNoteButton).toBeInTheDocument();
  });
});
