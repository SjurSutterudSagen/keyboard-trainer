import { KeyboardLayout, KeyDefinition } from '../types/keyboard';

// Standard QWERTY layout
const standardQwertyKeys: KeyDefinition[] = [
  // Function row
  { code: 'Escape', key: 'Escape', label: 'Esc', position: { row: 0, col: 0, x: 0, y: 0 } },
  { code: 'F1', key: 'F1', label: 'F1', position: { row: 0, col: 1, x: 80, y: 0 } },
  { code: 'F2', key: 'F2', label: 'F2', position: { row: 0, col: 2, x: 120, y: 0 } },
  { code: 'F3', key: 'F3', label: 'F3', position: { row: 0, col: 3, x: 160, y: 0 } },
  { code: 'F4', key: 'F4', label: 'F4', position: { row: 0, col: 4, x: 200, y: 0 } },
  { code: 'F5', key: 'F5', label: 'F5', position: { row: 0, col: 5, x: 260, y: 0 } },
  { code: 'F6', key: 'F6', label: 'F6', position: { row: 0, col: 6, x: 300, y: 0 } },
  { code: 'F7', key: 'F7', label: 'F7', position: { row: 0, col: 7, x: 340, y: 0 } },
  { code: 'F8', key: 'F8', label: 'F8', position: { row: 0, col: 8, x: 380, y: 0 } },
  { code: 'F9', key: 'F9', label: 'F9', position: { row: 0, col: 9, x: 440, y: 0 } },
  { code: 'F10', key: 'F10', label: 'F10', position: { row: 0, col: 10, x: 480, y: 0 } },
  { code: 'F11', key: 'F11', label: 'F11', position: { row: 0, col: 11, x: 520, y: 0 } },
  { code: 'F12', key: 'F12', label: 'F12', position: { row: 0, col: 12, x: 560, y: 0 } },

  // Number row
  { code: 'Backquote', key: '`', label: '`', position: { row: 1, col: 0, x: 0, y: 60 } },
  { code: 'Digit1', key: '1', label: '1', position: { row: 1, col: 1, x: 40, y: 60 } },
  { code: 'Digit2', key: '2', label: '2', position: { row: 1, col: 2, x: 80, y: 60 } },
  { code: 'Digit3', key: '3', label: '3', position: { row: 1, col: 3, x: 120, y: 60 } },
  { code: 'Digit4', key: '4', label: '4', position: { row: 1, col: 4, x: 160, y: 60 } },
  { code: 'Digit5', key: '5', label: '5', position: { row: 1, col: 5, x: 200, y: 60 } },
  { code: 'Digit6', key: '6', label: '6', position: { row: 1, col: 6, x: 240, y: 60 } },
  { code: 'Digit7', key: '7', label: '7', position: { row: 1, col: 7, x: 280, y: 60 } },
  { code: 'Digit8', key: '8', label: '8', position: { row: 1, col: 8, x: 320, y: 60 } },
  { code: 'Digit9', key: '9', label: '9', position: { row: 1, col: 9, x: 360, y: 60 } },
  { code: 'Digit0', key: '0', label: '0', position: { row: 1, col: 10, x: 400, y: 60 } },
  { code: 'Minus', key: '-', label: '-', position: { row: 1, col: 11, x: 440, y: 60 } },
  { code: 'Equal', key: '=', label: '=', position: { row: 1, col: 12, x: 480, y: 60 } },
  { code: 'Backspace', key: 'Backspace', label: 'Backspace', position: { row: 1, col: 13, x: 520, y: 60, width: 80 } },

  // QWERTY row
  { code: 'Tab', key: 'Tab', label: 'Tab', position: { row: 2, col: 0, x: 0, y: 100, width: 60 } },
  { code: 'KeyQ', key: 'q', label: 'Q', position: { row: 2, col: 1, x: 60, y: 100 }, isAlphanumeric: true },
  { code: 'KeyW', key: 'w', label: 'W', position: { row: 2, col: 2, x: 100, y: 100 }, isAlphanumeric: true },
  { code: 'KeyE', key: 'e', label: 'E', position: { row: 2, col: 3, x: 140, y: 100 }, isAlphanumeric: true },
  { code: 'KeyR', key: 'r', label: 'R', position: { row: 2, col: 4, x: 180, y: 100 }, isAlphanumeric: true },
  { code: 'KeyT', key: 't', label: 'T', position: { row: 2, col: 5, x: 220, y: 100 }, isAlphanumeric: true },
  { code: 'KeyY', key: 'y', label: 'Y', position: { row: 2, col: 6, x: 260, y: 100 }, isAlphanumeric: true },
  { code: 'KeyU', key: 'u', label: 'U', position: { row: 2, col: 7, x: 300, y: 100 }, isAlphanumeric: true },
  { code: 'KeyI', key: 'i', label: 'I', position: { row: 2, col: 8, x: 340, y: 100 }, isAlphanumeric: true },
  { code: 'KeyO', key: 'o', label: 'O', position: { row: 2, col: 9, x: 380, y: 100 }, isAlphanumeric: true },
  { code: 'KeyP', key: 'p', label: 'P', position: { row: 2, col: 10, x: 420, y: 100 }, isAlphanumeric: true },
  { code: 'BracketLeft', key: '[', label: '[', position: { row: 2, col: 11, x: 460, y: 100 } },
  { code: 'BracketRight', key: ']', label: ']', position: { row: 2, col: 12, x: 500, y: 100 } },
  { code: 'Backslash', key: '\\', label: '\\', position: { row: 2, col: 13, x: 540, y: 100, width: 60 } },

  // ASDF row
  { code: 'CapsLock', key: 'CapsLock', label: 'Caps', position: { row: 3, col: 0, x: 0, y: 140, width: 80 } },
  { code: 'KeyA', key: 'a', label: 'A', position: { row: 3, col: 1, x: 80, y: 140 }, isAlphanumeric: true },
  { code: 'KeyS', key: 's', label: 'S', position: { row: 3, col: 2, x: 120, y: 140 }, isAlphanumeric: true },
  { code: 'KeyD', key: 'd', label: 'D', position: { row: 3, col: 3, x: 160, y: 140 }, isAlphanumeric: true },
  { code: 'KeyF', key: 'f', label: 'F', position: { row: 3, col: 4, x: 200, y: 140 }, isAlphanumeric: true },
  { code: 'KeyG', key: 'g', label: 'G', position: { row: 3, col: 5, x: 240, y: 140 }, isAlphanumeric: true },
  { code: 'KeyH', key: 'h', label: 'H', position: { row: 3, col: 6, x: 280, y: 140 }, isAlphanumeric: true },
  { code: 'KeyJ', key: 'j', label: 'J', position: { row: 3, col: 7, x: 320, y: 140 }, isAlphanumeric: true },
  { code: 'KeyK', key: 'k', label: 'K', position: { row: 3, col: 8, x: 360, y: 140 }, isAlphanumeric: true },
  { code: 'KeyL', key: 'l', label: 'L', position: { row: 3, col: 9, x: 400, y: 140 }, isAlphanumeric: true },
  { code: 'Semicolon', key: ';', label: ';', position: { row: 3, col: 10, x: 440, y: 140 } },
  { code: 'Quote', key: "'", label: "'", position: { row: 3, col: 11, x: 480, y: 140 } },
  { code: 'Enter', key: 'Enter', label: 'Enter', position: { row: 3, col: 12, x: 520, y: 140, width: 80 } },

  // ZXCV row
  { code: 'ShiftLeft', key: 'Shift', label: 'Shift', position: { row: 4, col: 0, x: 0, y: 180, width: 100 }, isModifier: true },
  { code: 'KeyZ', key: 'z', label: 'Z', position: { row: 4, col: 1, x: 100, y: 180 }, isAlphanumeric: true },
  { code: 'KeyX', key: 'x', label: 'X', position: { row: 4, col: 2, x: 140, y: 180 }, isAlphanumeric: true },
  { code: 'KeyC', key: 'c', label: 'C', position: { row: 4, col: 3, x: 180, y: 180 }, isAlphanumeric: true },
  { code: 'KeyV', key: 'v', label: 'V', position: { row: 4, col: 4, x: 220, y: 180 }, isAlphanumeric: true },
  { code: 'KeyB', key: 'b', label: 'B', position: { row: 4, col: 5, x: 260, y: 180 }, isAlphanumeric: true },
  { code: 'KeyN', key: 'n', label: 'N', position: { row: 4, col: 6, x: 300, y: 180 }, isAlphanumeric: true },
  { code: 'KeyM', key: 'm', label: 'M', position: { row: 4, col: 7, x: 340, y: 180 }, isAlphanumeric: true },
  { code: 'Comma', key: ',', label: ',', position: { row: 4, col: 8, x: 380, y: 180 } },
  { code: 'Period', key: '.', label: '.', position: { row: 4, col: 9, x: 420, y: 180 } },
  { code: 'Slash', key: '/', label: '/', position: { row: 4, col: 10, x: 460, y: 180 } },
  { code: 'ShiftRight', key: 'Shift', label: 'Shift', position: { row: 4, col: 11, x: 500, y: 180, width: 100 }, isModifier: true },

  // Bottom row
  { code: 'ControlLeft', key: 'Control', label: 'Ctrl', position: { row: 5, col: 0, x: 0, y: 220, width: 60 }, isModifier: true },
  { code: 'MetaLeft', key: 'Meta', label: 'Cmd', position: { row: 5, col: 1, x: 60, y: 220, width: 60 }, isModifier: true },
  { code: 'AltLeft', key: 'Alt', label: 'Alt', position: { row: 5, col: 2, x: 120, y: 220, width: 60 }, isModifier: true },
  { code: 'Space', key: ' ', label: 'Space', position: { row: 5, col: 3, x: 180, y: 220, width: 240 } },
  { code: 'AltRight', key: 'Alt', label: 'Alt', position: { row: 5, col: 4, x: 420, y: 220, width: 60 }, isModifier: true },
  { code: 'MetaRight', key: 'Meta', label: 'Cmd', position: { row: 5, col: 5, x: 480, y: 220, width: 60 }, isModifier: true },
  { code: 'ControlRight', key: 'Control', label: 'Ctrl', position: { row: 5, col: 6, x: 540, y: 220, width: 60 }, isModifier: true },
];

// Corne (split 3x6+3) layout
const corneKeys: KeyDefinition[] = [
  // Left half - top row
  { code: 'Tab', key: 'Tab', label: 'Tab', position: { row: 0, col: 0, x: 0, y: 0 }, zone: 'left' },
  { code: 'KeyQ', key: 'q', label: 'Q', position: { row: 0, col: 1, x: 40, y: 0 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyW', key: 'w', label: 'W', position: { row: 0, col: 2, x: 80, y: 0 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyE', key: 'e', label: 'E', position: { row: 0, col: 3, x: 120, y: 0 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyR', key: 'r', label: 'R', position: { row: 0, col: 4, x: 160, y: 0 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyT', key: 't', label: 'T', position: { row: 0, col: 5, x: 200, y: 0 }, zone: 'left', isAlphanumeric: true },

  // Right half - top row
  { code: 'KeyY', key: 'y', label: 'Y', position: { row: 0, col: 6, x: 320, y: 0 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyU', key: 'u', label: 'U', position: { row: 0, col: 7, x: 360, y: 0 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyI', key: 'i', label: 'I', position: { row: 0, col: 8, x: 400, y: 0 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyO', key: 'o', label: 'O', position: { row: 0, col: 9, x: 440, y: 0 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyP', key: 'p', label: 'P', position: { row: 0, col: 10, x: 480, y: 0 }, zone: 'right', isAlphanumeric: true },
  { code: 'Backspace', key: 'Backspace', label: 'Bksp', position: { row: 0, col: 11, x: 520, y: 0 }, zone: 'right' },

  // Left half - middle row
  { code: 'ControlLeft', key: 'Control', label: 'Ctrl', position: { row: 1, col: 0, x: 0, y: 40 }, zone: 'left', isModifier: true },
  { code: 'KeyA', key: 'a', label: 'A', position: { row: 1, col: 1, x: 40, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyS', key: 's', label: 'S', position: { row: 1, col: 2, x: 80, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyD', key: 'd', label: 'D', position: { row: 1, col: 3, x: 120, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyF', key: 'f', label: 'F', position: { row: 1, col: 4, x: 160, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyG', key: 'g', label: 'G', position: { row: 1, col: 5, x: 200, y: 40 }, zone: 'left', isAlphanumeric: true },

  // Right half - middle row
  { code: 'KeyH', key: 'h', label: 'H', position: { row: 1, col: 6, x: 320, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyJ', key: 'j', label: 'J', position: { row: 1, col: 7, x: 360, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyK', key: 'k', label: 'K', position: { row: 1, col: 8, x: 400, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyL', key: 'l', label: 'L', position: { row: 1, col: 9, x: 440, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'Semicolon', key: ';', label: ';', position: { row: 1, col: 10, x: 480, y: 40 }, zone: 'right' },
  { code: 'Quote', key: "'", label: "'", position: { row: 1, col: 11, x: 520, y: 40 }, zone: 'right' },

  // Left half - bottom row
  { code: 'ShiftLeft', key: 'Shift', label: 'Shift', position: { row: 2, col: 0, x: 0, y: 80 }, zone: 'left', isModifier: true },
  { code: 'KeyZ', key: 'z', label: 'Z', position: { row: 2, col: 1, x: 40, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyX', key: 'x', label: 'X', position: { row: 2, col: 2, x: 80, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyC', key: 'c', label: 'C', position: { row: 2, col: 3, x: 120, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyV', key: 'v', label: 'V', position: { row: 2, col: 4, x: 160, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyB', key: 'b', label: 'B', position: { row: 2, col: 5, x: 200, y: 80 }, zone: 'left', isAlphanumeric: true },

  // Right half - bottom row
  { code: 'KeyN', key: 'n', label: 'N', position: { row: 2, col: 6, x: 320, y: 80 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyM', key: 'm', label: 'M', position: { row: 2, col: 7, x: 360, y: 80 }, zone: 'right', isAlphanumeric: true },
  { code: 'Comma', key: ',', label: ',', position: { row: 2, col: 8, x: 400, y: 80 }, zone: 'right' },
  { code: 'Period', key: '.', label: '.', position: { row: 2, col: 9, x: 440, y: 80 }, zone: 'right' },
  { code: 'Slash', key: '/', label: '/', position: { row: 2, col: 10, x: 480, y: 80 }, zone: 'right' },
  { code: 'ShiftRight', key: 'Shift', label: 'Shift', position: { row: 2, col: 11, x: 520, y: 80 }, zone: 'right', isModifier: true },

  // Left thumb cluster
  { code: 'MetaLeft', key: 'Meta', label: 'Cmd', position: { row: 3, col: 0, x: 120, y: 120 }, zone: 'thumb', isModifier: true },
  { code: 'F13', key: 'F13', label: 'L1', position: { row: 3, col: 1, x: 160, y: 120 }, zone: 'thumb' },
  { code: 'Space', key: ' ', label: 'Space', position: { row: 3, col: 2, x: 200, y: 120 }, zone: 'thumb' },

  // Right thumb cluster
  { code: 'Enter', key: 'Enter', label: 'Enter', position: { row: 3, col: 3, x: 320, y: 120 }, zone: 'thumb' },
  { code: 'F14', key: 'F14', label: 'L2', position: { row: 3, col: 4, x: 360, y: 120 }, zone: 'thumb' },
  { code: 'AltRight', key: 'Alt', label: 'Alt', position: { row: 3, col: 5, x: 400, y: 120 }, zone: 'thumb', isModifier: true },
];

// ErgoDox layout (simplified)
const ergodoxKeys: KeyDefinition[] = [
  // Left half - top row
  { code: 'Equal', key: '=', label: '=', position: { row: 0, col: 0, x: 0, y: 0 }, zone: 'left' },
  { code: 'Digit1', key: '1', label: '1', position: { row: 0, col: 1, x: 40, y: 0 }, zone: 'left' },
  { code: 'Digit2', key: '2', label: '2', position: { row: 0, col: 2, x: 80, y: 0 }, zone: 'left' },
  { code: 'Digit3', key: '3', label: '3', position: { row: 0, col: 3, x: 120, y: 0 }, zone: 'left' },
  { code: 'Digit4', key: '4', label: '4', position: { row: 0, col: 4, x: 160, y: 0 }, zone: 'left' },
  { code: 'Digit5', key: '5', label: '5', position: { row: 0, col: 5, x: 200, y: 0 }, zone: 'left' },
  { code: 'F1', key: 'F1', label: 'F1', position: { row: 0, col: 6, x: 240, y: 0 }, zone: 'left' },

  // Right half - top row
  { code: 'F2', key: 'F2', label: 'F2', position: { row: 0, col: 7, x: 360, y: 0 }, zone: 'right' },
  { code: 'Digit6', key: '6', label: '6', position: { row: 0, col: 8, x: 400, y: 0 }, zone: 'right' },
  { code: 'Digit7', key: '7', label: '7', position: { row: 0, col: 9, x: 440, y: 0 }, zone: 'right' },
  { code: 'Digit8', key: '8', label: '8', position: { row: 0, col: 10, x: 480, y: 0 }, zone: 'right' },
  { code: 'Digit9', key: '9', label: '9', position: { row: 0, col: 11, x: 520, y: 0 }, zone: 'right' },
  { code: 'Digit0', key: '0', label: '0', position: { row: 0, col: 12, x: 560, y: 0 }, zone: 'right' },
  { code: 'Minus', key: '-', label: '-', position: { row: 0, col: 13, x: 600, y: 0 }, zone: 'right' },

  // Left half - QWERTY row
  { code: 'Tab', key: 'Tab', label: 'Tab', position: { row: 1, col: 0, x: 0, y: 40 }, zone: 'left' },
  { code: 'KeyQ', key: 'q', label: 'Q', position: { row: 1, col: 1, x: 40, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyW', key: 'w', label: 'W', position: { row: 1, col: 2, x: 80, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyE', key: 'e', label: 'E', position: { row: 1, col: 3, x: 120, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyR', key: 'r', label: 'R', position: { row: 1, col: 4, x: 160, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyT', key: 't', label: 'T', position: { row: 1, col: 5, x: 200, y: 40 }, zone: 'left', isAlphanumeric: true },
  { code: 'F3', key: 'F3', label: 'F3', position: { row: 1, col: 6, x: 240, y: 40 }, zone: 'left' },

  // Right half - QWERTY row
  { code: 'F4', key: 'F4', label: 'F4', position: { row: 1, col: 7, x: 360, y: 40 }, zone: 'right' },
  { code: 'KeyY', key: 'y', label: 'Y', position: { row: 1, col: 8, x: 400, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyU', key: 'u', label: 'U', position: { row: 1, col: 9, x: 440, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyI', key: 'i', label: 'I', position: { row: 1, col: 10, x: 480, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyO', key: 'o', label: 'O', position: { row: 1, col: 11, x: 520, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyP', key: 'p', label: 'P', position: { row: 1, col: 12, x: 560, y: 40 }, zone: 'right', isAlphanumeric: true },
  { code: 'Backslash', key: '\\', label: '\\', position: { row: 1, col: 13, x: 600, y: 40 }, zone: 'right' },

  // Left half - ASDF row
  { code: 'CapsLock', key: 'CapsLock', label: 'Caps', position: { row: 2, col: 0, x: 0, y: 80 }, zone: 'left' },
  { code: 'KeyA', key: 'a', label: 'A', position: { row: 2, col: 1, x: 40, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyS', key: 's', label: 'S', position: { row: 2, col: 2, x: 80, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyD', key: 'd', label: 'D', position: { row: 2, col: 3, x: 120, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyF', key: 'f', label: 'F', position: { row: 2, col: 4, x: 160, y: 80 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyG', key: 'g', label: 'G', position: { row: 2, col: 5, x: 200, y: 80 }, zone: 'left', isAlphanumeric: true },

  // Right half - ASDF row
  { code: 'KeyH', key: 'h', label: 'H', position: { row: 2, col: 6, x: 400, y: 80 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyJ', key: 'j', label: 'J', position: { row: 2, col: 7, x: 440, y: 80 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyK', key: 'k', label: 'K', position: { row: 2, col: 8, x: 480, y: 80 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyL', key: 'l', label: 'L', position: { row: 2, col: 9, x: 520, y: 80 }, zone: 'right', isAlphanumeric: true },
  { code: 'Semicolon', key: ';', label: ';', position: { row: 2, col: 10, x: 560, y: 80 }, zone: 'right' },
  { code: 'Quote', key: "'", label: "'", position: { row: 2, col: 11, x: 600, y: 80 }, zone: 'right' },

  // Left half - ZXCV row
  { code: 'ShiftLeft', key: 'Shift', label: 'Shift', position: { row: 3, col: 0, x: 0, y: 120 }, zone: 'left', isModifier: true },
  { code: 'KeyZ', key: 'z', label: 'Z', position: { row: 3, col: 1, x: 40, y: 120 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyX', key: 'x', label: 'X', position: { row: 3, col: 2, x: 80, y: 120 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyC', key: 'c', label: 'C', position: { row: 3, col: 3, x: 120, y: 120 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyV', key: 'v', label: 'V', position: { row: 3, col: 4, x: 160, y: 120 }, zone: 'left', isAlphanumeric: true },
  { code: 'KeyB', key: 'b', label: 'B', position: { row: 3, col: 5, x: 200, y: 120 }, zone: 'left', isAlphanumeric: true },

  // Right half - ZXCV row
  { code: 'KeyN', key: 'n', label: 'N', position: { row: 3, col: 6, x: 400, y: 120 }, zone: 'right', isAlphanumeric: true },
  { code: 'KeyM', key: 'm', label: 'M', position: { row: 3, col: 7, x: 440, y: 120 }, zone: 'right', isAlphanumeric: true },
  { code: 'Comma', key: ',', label: ',', position: { row: 3, col: 8, x: 480, y: 120 }, zone: 'right' },
  { code: 'Period', key: '.', label: '.', position: { row: 3, col: 9, x: 520, y: 120 }, zone: 'right' },
  { code: 'Slash', key: '/', label: '/', position: { row: 3, col: 10, x: 560, y: 120 }, zone: 'right' },
  { code: 'ShiftRight', key: 'Shift', label: 'Shift', position: { row: 3, col: 11, x: 600, y: 120 }, zone: 'right', isModifier: true },

  // Left thumb cluster
  { code: 'ControlLeft', key: 'Control', label: 'Ctrl', position: { row: 4, col: 0, x: 120, y: 160 }, zone: 'thumb', isModifier: true },
  { code: 'AltLeft', key: 'Alt', label: 'Alt', position: { row: 4, col: 1, x: 160, y: 160 }, zone: 'thumb', isModifier: true },
  { code: 'MetaLeft', key: 'Meta', label: 'Cmd', position: { row: 4, col: 2, x: 140, y: 200 }, zone: 'thumb', isModifier: true },
  { code: 'Space', key: ' ', label: 'Space', position: { row: 4, col: 3, x: 180, y: 200 }, zone: 'thumb' },

  // Right thumb cluster
  { code: 'Enter', key: 'Enter', label: 'Enter', position: { row: 4, col: 4, x: 420, y: 200 }, zone: 'thumb' },
  { code: 'Backspace', key: 'Backspace', label: 'Bksp', position: { row: 4, col: 5, x: 460, y: 200 }, zone: 'thumb' },
  { code: 'AltRight', key: 'Alt', label: 'Alt', position: { row: 4, col: 6, x: 440, y: 160 }, zone: 'thumb', isModifier: true },
  { code: 'ControlRight', key: 'Control', label: 'Ctrl', position: { row: 4, col: 7, x: 480, y: 160 }, zone: 'thumb', isModifier: true },
];

export const keyboardLayouts: KeyboardLayout[] = [
  {
    id: 'standard',
    name: 'Standard QWERTY',
    description: 'Full-size QWERTY keyboard layout',
    keys: standardQwertyKeys,
    width: 600,
    height: 260,
    split: false,
    thumbClusters: false,
  },
  {
    id: 'corne',
    name: 'Corne (3x6+3)',
    description: 'Split 42-key ortholinear keyboard with thumb clusters',
    keys: corneKeys,
    width: 560,
    height: 160,
    split: true,
    thumbClusters: true,
  },
  {
    id: 'ergodox',
    name: 'ErgoDox',
    description: 'Split ergonomic keyboard with thumb clusters',
    keys: ergodoxKeys,
    width: 640,
    height: 240,
    split: true,
    thumbClusters: true,
  },
];

export const getLayoutById = (id: string): KeyboardLayout | undefined => {
  return keyboardLayouts.find(layout => layout.id === id);
};

export const getDefaultLayout = (): KeyboardLayout => {
  return keyboardLayouts[0]; // Standard QWERTY
};
