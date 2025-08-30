import { render, screen } from "@testing-library/react";

import { KeyboardTester } from "./keyboard-tester";

test("keyboard tester renders correctly", () => {
    render(<KeyboardTester />);

    // Check that both child components are rendered
    const keyboardViewer = screen.getByText("Keyboard Viewer");
    const keyboardText = screen.getByText("Keyboard Text");

    expect(keyboardViewer).toBeDefined();
    expect(keyboardViewer).toBeInTheDocument();
    expect(keyboardText).toBeDefined();
    expect(keyboardText).toBeInTheDocument();
});

test("keyboard tester renders both child components", () => {
    render(<KeyboardTester />);

    expect(screen.getByText("Keyboard Viewer")).toBeInTheDocument();
    expect(screen.getByText("Keyboard Text")).toBeInTheDocument();
});

test("keyboard tester renders components in correct order", () => {
    render(<KeyboardTester />);

    const elements = screen.getAllByText(/Keyboard (Viewer|Text)/);
    expect(elements).toHaveLength(2);
    expect(elements[0]).toHaveTextContent("Keyboard Viewer");
    expect(elements[1]).toHaveTextContent("Keyboard Text");
});
