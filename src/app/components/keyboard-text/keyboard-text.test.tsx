import { render, screen } from "@testing-library/react";

import { KeyboardText } from "./keyboard-text";

test("keyboard text renders correctly", () => {
    render(<KeyboardText />);

    const keyboardText = screen.getByText("Keyboard Text");

    expect(keyboardText).toBeDefined();
    expect(keyboardText).toBeInTheDocument();
});

test("keyboard text has correct content", () => {
    render(<KeyboardText />);

    expect(screen.getByText("Keyboard Text")).toBeInTheDocument();
});

test("keyboard text is wrapped in a div", () => {
    render(<KeyboardText />);

    const container = screen.getByText("Keyboard Text");
    expect(container.tagName).toBe("DIV");
});
