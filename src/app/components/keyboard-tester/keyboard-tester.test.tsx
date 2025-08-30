import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';

import { KeyboardTester } from "./keyboard-tester";

// Mock the hook
vi.mock('../../../hooks/useKeyboardInput', () => ({
  useKeyboardInput: () => ({
    keyboardState: {
      pressedKeys: new Set(),
      keyHistory: [],
      currentLayout: 'standard',
      currentKeymap: 'qwerty',
    },
    setCurrentLayout: vi.fn(),
    setCurrentKeymap: vi.fn(),
    clearHistory: vi.fn(),
  }),
}));

test("keyboard tester renders correctly", () => {
  render(<KeyboardTester />);

  // Check that the main title is rendered  
  const title = screen.getByText("Keyboard Tester");
  
  expect(title).toBeDefined();
  expect(title).toBeInTheDocument();
});

test("keyboard tester renders both child components", () => {
  render(<KeyboardTester />);
  
  expect(screen.getByRole("heading", { name: "Standard QWERTY" })).toBeInTheDocument(); // From KeyboardViewer
  expect(screen.getByRole("heading", { name: "Typing Area" })).toBeInTheDocument(); // From KeyboardText
});

test("keyboard tester shows description", () => {
  render(<KeyboardTester />);
  
  const description = screen.getByText(/Test your keyboard with visual feedback/);
  
  expect(description).toBeInTheDocument();
});

test("keyboard tester shows footer", () => {
  render(<KeyboardTester />);
  
  const footer = screen.getByText(/Keymaps: QWERTY, Dvorak, Colemak, Workman/);
  
  expect(footer).toBeInTheDocument();
});
