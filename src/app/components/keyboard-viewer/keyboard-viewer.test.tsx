import { render, screen } from "@testing-library/react";

import { KeyboardViewer } from "./keyboard-viewer";

test("keyboard viewer renders correctly", () => {
    render(<KeyboardViewer />);

    const keyboardViewer = screen.getByText("Keyboard Viewer");

    expect(keyboardViewer).toBeDefined();
    expect(keyboardViewer).toBeInTheDocument();
});

test("keyboard viewer has correct content", () => {
    render(<KeyboardViewer />);

    expect(screen.getByText("Keyboard Viewer")).toBeInTheDocument();
});

test("keyboard viewer is wrapped in a div", () => {
    render(<KeyboardViewer />);

    const container = screen.getByText("Keyboard Viewer");
    expect(container.tagName).toBe("DIV");
});
