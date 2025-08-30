import { render, screen } from "@testing-library/react";

import { Key } from "./key";
import { KeyDefinition } from "../../../types/keyboard";

const mockKeyDef: KeyDefinition = {
  code: 'KeyA',
  key: 'a',
  label: 'A',
  position: { row: 0, col: 0, x: 0, y: 0 },
  isAlphanumeric: true,
};

test("key renders correctly", () => {
  render(<Key keyDef={mockKeyDef} isPressed={false} />);

  const key = screen.getByText("A");

  expect(key).toBeDefined();
  expect(key).toBeInTheDocument();
});

test("key shows pressed state", () => {
  render(<Key keyDef={mockKeyDef} isPressed={true} />);

  const key = screen.getByText("A").parentElement;
  
  expect(key).toHaveClass("bg-red-500");
});

test("key shows unpressed state", () => {
  render(<Key keyDef={mockKeyDef} isPressed={false} />);
  
  const key = screen.getByText("A").parentElement;
  
  expect(key).toHaveClass("bg-white");
});

test("modifier key has special styling", () => {
  const modifierKey: KeyDefinition = {
    ...mockKeyDef,
    label: 'Ctrl',
    isModifier: true,
    isAlphanumeric: false,
  };
  
  render(<Key keyDef={modifierKey} isPressed={false} />);

  const key = screen.getByText("Ctrl").parentElement;
  
  expect(key).toHaveClass("bg-blue-50");
});
