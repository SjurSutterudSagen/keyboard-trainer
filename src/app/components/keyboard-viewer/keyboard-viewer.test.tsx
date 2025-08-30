import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';

import { KeyboardViewer } from "./keyboard-viewer";

// Mock the hook
vi.mock('../../../hooks/useKeyboardInput', () => ({
  useKeyboardInput: () => ({
    keyboardState: {
      pressedKeys: new Set(),
      keyHistory: [],
      currentLayout: 'standard',
    },
    setCurrentLayout: vi.fn(),
    clearHistory: vi.fn(),
  }),
}));

test("keyboard viewer renders correctly", () => {
  render(<KeyboardViewer />);
  const title = screen.getByRole("heading", { name: "Standard QWERTY" });
  expect(title).toBeDefined();
  expect(title).toBeInTheDocument();
});

test("keyboard viewer has layout selector", () => {
  render(<KeyboardViewer />);
  const select = screen.getByLabelText("Layout:");
  expect(select).toBeInTheDocument();
});

test("keyboard viewer has scale control", () => {
  render(<KeyboardViewer />);
  const scaleControl = screen.getByLabelText("Scale:");
  expect(scaleControl).toBeInTheDocument();
});

test("keyboard viewer shows instructions", () => {
  render(<KeyboardViewer />);
  const instructions = screen.getByText(/Click on this area and start typing/);
  expect(instructions).toBeInTheDocument();
});
