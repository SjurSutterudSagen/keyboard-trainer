import { render, screen } from "@testing-library/react";
import { vi } from 'vitest';

import { KeyboardTrainer } from "./keyboard-trainer";

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

test("keyboard Trainer renders correctly", () => {
  render(<KeyboardTrainer />);

  // Check that the main title is rendered  
  const title = screen.getByText("Keyboard Trainer");
  
  expect(title).toBeDefined();
  expect(title).toBeInTheDocument();
});

test("keyboard Trainer renders both child components", () => {
  render(<KeyboardTrainer />);
  
  expect(screen.getByRole("heading", { name: "Standard QWERTY" })).toBeInTheDocument(); // From KeyboardViewer
  expect(screen.getByRole("heading", { name: "Typing Area" })).toBeInTheDocument(); // From KeyboardText
});

test("keyboard Trainer shows description", () => {
  render(<KeyboardTrainer />);
  
  const description = screen.getByText(/Learn touch typing with an interactive keyboard layout visualizer/);
  
  expect(description).toBeInTheDocument();
});

test("keyboard Trainer shows footer", () => {
  render(<KeyboardTrainer />);
  
  const footer = screen.getByText(/Keymaps: QWERTY, Dvorak, Colemak, Workman/);
  
  expect(footer).toBeInTheDocument();
});
