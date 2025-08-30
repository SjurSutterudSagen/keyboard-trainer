import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';

import { KeyboardText } from "./keyboard-text";

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

test("keyboard text renders correctly", () => {
  render(<KeyboardText />);
  
  const typingArea = screen.getByText("Typing Area");
  
  expect(typingArea).toBeDefined();
  expect(typingArea).toBeInTheDocument();
});

test("keyboard text has textarea", () => {
  render(<KeyboardText />);
  
  const textarea = screen.getByPlaceholderText(/Click here and start typing/);
  
  expect(textarea).toBeInTheDocument();
});

test("keyboard text shows statistics", () => {
  render(<KeyboardText />);
  
  expect(screen.getByText("Total Keys")).toBeInTheDocument();
  expect(screen.getByText("Active Keys")).toBeInTheDocument();
});

test("keyboard text has clear buttons", () => {
  render(<KeyboardText />);
  
  const clearTextButton = screen.getByText("Clear Text");
  const clearHistoryButton = screen.getByText("Clear History");
  
  expect(clearTextButton).toBeInTheDocument();
  expect(clearHistoryButton).toBeInTheDocument();
});
