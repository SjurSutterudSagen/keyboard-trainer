import { KeymapDefinition } from '../types/keyboard';

// QWERTY keymap (standard US)
const qwertyKeymap: KeymapDefinition = {
  id: 'qwerty',
  name: 'QWERTY',
  description: 'Standard US QWERTY layout',
  mapping: {
    // Numbers row
    'Backquote': { key: '`', label: '`', shiftKey: '~', shiftLabel: '~' },
    'Digit1': { key: '1', label: '1', shiftKey: '!', shiftLabel: '!' },
    'Digit2': { key: '2', label: '2', shiftKey: '@', shiftLabel: '@' },
    'Digit3': { key: '3', label: '3', shiftKey: '#', shiftLabel: '#' },
    'Digit4': { key: '4', label: '4', shiftKey: '$', shiftLabel: '$' },
    'Digit5': { key: '5', label: '5', shiftKey: '%', shiftLabel: '%' },
    'Digit6': { key: '6', label: '6', shiftKey: '^', shiftLabel: '^' },
    'Digit7': { key: '7', label: '7', shiftKey: '&', shiftLabel: '&' },
    'Digit8': { key: '8', label: '8', shiftKey: '*', shiftLabel: '*' },
    'Digit9': { key: '9', label: '9', shiftKey: '(', shiftLabel: '(' },
    'Digit0': { key: '0', label: '0', shiftKey: ')', shiftLabel: ')' },
    'Minus': { key: '-', label: '-', shiftKey: '_', shiftLabel: '_' },
    'Equal': { key: '=', label: '=', shiftKey: '+', shiftLabel: '+' },

    // Top row (QWERTY)
    'KeyQ': { key: 'q', label: 'Q', shiftKey: 'Q', shiftLabel: 'Q' },
    'KeyW': { key: 'w', label: 'W', shiftKey: 'W', shiftLabel: 'W' },
    'KeyE': { key: 'e', label: 'E', shiftKey: 'E', shiftLabel: 'E' },
    'KeyR': { key: 'r', label: 'R', shiftKey: 'R', shiftLabel: 'R' },
    'KeyT': { key: 't', label: 'T', shiftKey: 'T', shiftLabel: 'T' },
    'KeyY': { key: 'y', label: 'Y', shiftKey: 'Y', shiftLabel: 'Y' },
    'KeyU': { key: 'u', label: 'U', shiftKey: 'U', shiftLabel: 'U' },
    'KeyI': { key: 'i', label: 'I', shiftKey: 'I', shiftLabel: 'I' },
    'KeyO': { key: 'o', label: 'O', shiftKey: 'O', shiftLabel: 'O' },
    'KeyP': { key: 'p', label: 'P', shiftKey: 'P', shiftLabel: 'P' },
    'BracketLeft': { key: '[', label: '[', shiftKey: '{', shiftLabel: '{' },
    'BracketRight': { key: ']', label: ']', shiftKey: '}', shiftLabel: '}' },
    'Backslash': { key: '\\', label: '\\', shiftKey: '|', shiftLabel: '|' },

    // Home row (ASDF)
    'KeyA': { key: 'a', label: 'A', shiftKey: 'A', shiftLabel: 'A' },
    'KeyS': { key: 's', label: 'S', shiftKey: 'S', shiftLabel: 'S' },
    'KeyD': { key: 'd', label: 'D', shiftKey: 'D', shiftLabel: 'D' },
    'KeyF': { key: 'f', label: 'F', shiftKey: 'F', shiftLabel: 'F' },
    'KeyG': { key: 'g', label: 'G', shiftKey: 'G', shiftLabel: 'G' },
    'KeyH': { key: 'h', label: 'H', shiftKey: 'H', shiftLabel: 'H' },
    'KeyJ': { key: 'j', label: 'J', shiftKey: 'J', shiftLabel: 'J' },
    'KeyK': { key: 'k', label: 'K', shiftKey: 'K', shiftLabel: 'K' },
    'KeyL': { key: 'l', label: 'L', shiftKey: 'L', shiftLabel: 'L' },
    'Semicolon': { key: ';', label: ';', shiftKey: ':', shiftLabel: ':' },
    'Quote': { key: "'", label: "'", shiftKey: '"', shiftLabel: '"' },

    // Bottom row (ZXCV)
    'KeyZ': { key: 'z', label: 'Z', shiftKey: 'Z', shiftLabel: 'Z' },
    'KeyX': { key: 'x', label: 'X', shiftKey: 'X', shiftLabel: 'X' },
    'KeyC': { key: 'c', label: 'C', shiftKey: 'C', shiftLabel: 'C' },
    'KeyV': { key: 'v', label: 'V', shiftKey: 'V', shiftLabel: 'V' },
    'KeyB': { key: 'b', label: 'B', shiftKey: 'B', shiftLabel: 'B' },
    'KeyN': { key: 'n', label: 'N', shiftKey: 'N', shiftLabel: 'N' },
    'KeyM': { key: 'm', label: 'M', shiftKey: 'M', shiftLabel: 'M' },
    'Comma': { key: ',', label: ',', shiftKey: '<', shiftLabel: '<' },
    'Period': { key: '.', label: '.', shiftKey: '>', shiftLabel: '>' },
    'Slash': { key: '/', label: '/', shiftKey: '?', shiftLabel: '?' },
  }
};

// Dvorak keymap
const dvorakKeymap: KeymapDefinition = {
  id: 'dvorak',
  name: 'Dvorak',
  description: 'Dvorak Simplified Keyboard layout',
  mapping: {
    // Numbers row (same as QWERTY)
    'Backquote': { key: '`', label: '`', shiftKey: '~', shiftLabel: '~' },
    'Digit1': { key: '1', label: '1', shiftKey: '!', shiftLabel: '!' },
    'Digit2': { key: '2', label: '2', shiftKey: '@', shiftLabel: '@' },
    'Digit3': { key: '3', label: '3', shiftKey: '#', shiftLabel: '#' },
    'Digit4': { key: '4', label: '4', shiftKey: '$', shiftLabel: '$' },
    'Digit5': { key: '5', label: '5', shiftKey: '%', shiftLabel: '%' },
    'Digit6': { key: '6', label: '6', shiftKey: '^', shiftLabel: '^' },
    'Digit7': { key: '7', label: '7', shiftKey: '&', shiftLabel: '&' },
    'Digit8': { key: '8', label: '8', shiftKey: '*', shiftLabel: '*' },
    'Digit9': { key: '9', label: '9', shiftKey: '(', shiftLabel: '(' },
    'Digit0': { key: '0', label: '0', shiftKey: ')', shiftLabel: ')' },
    'Minus': { key: '[', label: '[', shiftKey: '{', shiftLabel: '{' },
    'Equal': { key: ']', label: ']', shiftKey: '}', shiftLabel: '}' },

    // Top row ('",.P)
    'KeyQ': { key: "'", label: "'", shiftKey: '"', shiftLabel: '"' },
    'KeyW': { key: ',', label: ',', shiftKey: '<', shiftLabel: '<' },
    'KeyE': { key: '.', label: '.', shiftKey: '>', shiftLabel: '>' },
    'KeyR': { key: 'p', label: 'P', shiftKey: 'P', shiftLabel: 'P' },
    'KeyT': { key: 'y', label: 'Y', shiftKey: 'Y', shiftLabel: 'Y' },
    'KeyY': { key: 'f', label: 'F', shiftKey: 'F', shiftLabel: 'F' },
    'KeyU': { key: 'g', label: 'G', shiftKey: 'G', shiftLabel: 'G' },
    'KeyI': { key: 'c', label: 'C', shiftKey: 'C', shiftLabel: 'C' },
    'KeyO': { key: 'r', label: 'R', shiftKey: 'R', shiftLabel: 'R' },
    'KeyP': { key: 'l', label: 'L', shiftKey: 'L', shiftLabel: 'L' },
    'BracketLeft': { key: '/', label: '/', shiftKey: '?', shiftLabel: '?' },
    'BracketRight': { key: '=', label: '=', shiftKey: '+', shiftLabel: '+' },
    'Backslash': { key: '\\', label: '\\', shiftKey: '|', shiftLabel: '|' },

    // Home row (AOEUI)
    'KeyA': { key: 'a', label: 'A', shiftKey: 'A', shiftLabel: 'A' },
    'KeyS': { key: 'o', label: 'O', shiftKey: 'O', shiftLabel: 'O' },
    'KeyD': { key: 'e', label: 'E', shiftKey: 'E', shiftLabel: 'E' },
    'KeyF': { key: 'u', label: 'U', shiftKey: 'U', shiftLabel: 'U' },
    'KeyG': { key: 'i', label: 'I', shiftKey: 'I', shiftLabel: 'I' },
    'KeyH': { key: 'd', label: 'D', shiftKey: 'D', shiftLabel: 'D' },
    'KeyJ': { key: 'h', label: 'H', shiftKey: 'H', shiftLabel: 'H' },
    'KeyK': { key: 't', label: 'T', shiftKey: 'T', shiftLabel: 'T' },
    'KeyL': { key: 'n', label: 'N', shiftKey: 'N', shiftLabel: 'N' },
    'Semicolon': { key: 's', label: 'S', shiftKey: 'S', shiftLabel: 'S' },
    'Quote': { key: '-', label: '-', shiftKey: '_', shiftLabel: '_' },

    // Bottom row (;QJKX)
    'KeyZ': { key: ';', label: ';', shiftKey: ':', shiftLabel: ':' },
    'KeyX': { key: 'q', label: 'Q', shiftKey: 'Q', shiftLabel: 'Q' },
    'KeyC': { key: 'j', label: 'J', shiftKey: 'J', shiftLabel: 'J' },
    'KeyV': { key: 'k', label: 'K', shiftKey: 'K', shiftLabel: 'K' },
    'KeyB': { key: 'x', label: 'X', shiftKey: 'X', shiftLabel: 'X' },
    'KeyN': { key: 'b', label: 'B', shiftKey: 'B', shiftLabel: 'B' },
    'KeyM': { key: 'm', label: 'M', shiftKey: 'M', shiftLabel: 'M' },
    'Comma': { key: 'w', label: 'W', shiftKey: 'W', shiftLabel: 'W' },
    'Period': { key: 'v', label: 'V', shiftKey: 'V', shiftLabel: 'V' },
    'Slash': { key: 'z', label: 'Z', shiftKey: 'Z', shiftLabel: 'Z' },
  }
};

// Colemak keymap
const colemakKeymap: KeymapDefinition = {
  id: 'colemak',
  name: 'Colemak',
  description: 'Colemak efficient keyboard layout',
  mapping: {
    // Numbers row (same as QWERTY)
    'Backquote': { key: '`', label: '`', shiftKey: '~', shiftLabel: '~' },
    'Digit1': { key: '1', label: '1', shiftKey: '!', shiftLabel: '!' },
    'Digit2': { key: '2', label: '2', shiftKey: '@', shiftLabel: '@' },
    'Digit3': { key: '3', label: '3', shiftKey: '#', shiftLabel: '#' },
    'Digit4': { key: '4', label: '4', shiftKey: '$', shiftLabel: '$' },
    'Digit5': { key: '5', label: '5', shiftKey: '%', shiftLabel: '%' },
    'Digit6': { key: '6', label: '6', shiftKey: '^', shiftLabel: '^' },
    'Digit7': { key: '7', label: '7', shiftKey: '&', shiftLabel: '&' },
    'Digit8': { key: '8', label: '8', shiftKey: '*', shiftLabel: '*' },
    'Digit9': { key: '9', label: '9', shiftKey: '(', shiftLabel: '(' },
    'Digit0': { key: '0', label: '0', shiftKey: ')', shiftLabel: ')' },
    'Minus': { key: '-', label: '-', shiftKey: '_', shiftLabel: '_' },
    'Equal': { key: '=', label: '=', shiftKey: '+', shiftLabel: '+' },

    // Top row (QWFPG)
    'KeyQ': { key: 'q', label: 'Q', shiftKey: 'Q', shiftLabel: 'Q' },
    'KeyW': { key: 'w', label: 'W', shiftKey: 'W', shiftLabel: 'W' },
    'KeyE': { key: 'f', label: 'F', shiftKey: 'F', shiftLabel: 'F' },
    'KeyR': { key: 'p', label: 'P', shiftKey: 'P', shiftLabel: 'P' },
    'KeyT': { key: 'g', label: 'G', shiftKey: 'G', shiftLabel: 'G' },
    'KeyY': { key: 'j', label: 'J', shiftKey: 'J', shiftLabel: 'J' },
    'KeyU': { key: 'l', label: 'L', shiftKey: 'L', shiftLabel: 'L' },
    'KeyI': { key: 'u', label: 'U', shiftKey: 'U', shiftLabel: 'U' },
    'KeyO': { key: 'y', label: 'Y', shiftKey: 'Y', shiftLabel: 'Y' },
    'KeyP': { key: ';', label: ';', shiftKey: ':', shiftLabel: ':' },
    'BracketLeft': { key: '[', label: '[', shiftKey: '{', shiftLabel: '{' },
    'BracketRight': { key: ']', label: ']', shiftKey: '}', shiftLabel: '}' },
    'Backslash': { key: '\\', label: '\\', shiftKey: '|', shiftLabel: '|' },

    // Home row (ARSTD)
    'KeyA': { key: 'a', label: 'A', shiftKey: 'A', shiftLabel: 'A' },
    'KeyS': { key: 'r', label: 'R', shiftKey: 'R', shiftLabel: 'R' },
    'KeyD': { key: 's', label: 'S', shiftKey: 'S', shiftLabel: 'S' },
    'KeyF': { key: 't', label: 'T', shiftKey: 'T', shiftLabel: 'T' },
    'KeyG': { key: 'd', label: 'D', shiftKey: 'D', shiftLabel: 'D' },
    'KeyH': { key: 'h', label: 'H', shiftKey: 'H', shiftLabel: 'H' },
    'KeyJ': { key: 'n', label: 'N', shiftKey: 'N', shiftLabel: 'N' },
    'KeyK': { key: 'e', label: 'E', shiftKey: 'E', shiftLabel: 'E' },
    'KeyL': { key: 'i', label: 'I', shiftKey: 'I', shiftLabel: 'I' },
    'Semicolon': { key: 'o', label: 'O', shiftKey: 'O', shiftLabel: 'O' },
    'Quote': { key: "'", label: "'", shiftKey: '"', shiftLabel: '"' },

    // Bottom row (ZXCDV)
    'KeyZ': { key: 'z', label: 'Z', shiftKey: 'Z', shiftLabel: 'Z' },
    'KeyX': { key: 'x', label: 'X', shiftKey: 'X', shiftLabel: 'X' },
    'KeyC': { key: 'c', label: 'C', shiftKey: 'C', shiftLabel: 'C' },
    'KeyV': { key: 'v', label: 'V', shiftKey: 'V', shiftLabel: 'V' },
    'KeyB': { key: 'b', label: 'B', shiftKey: 'B', shiftLabel: 'B' },
    'KeyN': { key: 'k', label: 'K', shiftKey: 'K', shiftLabel: 'K' },
    'KeyM': { key: 'm', label: 'M', shiftKey: 'M', shiftLabel: 'M' },
    'Comma': { key: ',', label: ',', shiftKey: '<', shiftLabel: '<' },
    'Period': { key: '.', label: '.', shiftKey: '>', shiftLabel: '>' },
    'Slash': { key: '/', label: '/', shiftKey: '?', shiftLabel: '?' },
  }
};

// Workman keymap
const workmanKeymap: KeymapDefinition = {
  id: 'workman',
  name: 'Workman',
  description: 'Workman keyboard layout designed to reduce finger travel',
  mapping: {
    // Numbers row (same as QWERTY)
    'Backquote': { key: '`', label: '`', shiftKey: '~', shiftLabel: '~' },
    'Digit1': { key: '1', label: '1', shiftKey: '!', shiftLabel: '!' },
    'Digit2': { key: '2', label: '2', shiftKey: '@', shiftLabel: '@' },
    'Digit3': { key: '3', label: '3', shiftKey: '#', shiftLabel: '#' },
    'Digit4': { key: '4', label: '4', shiftKey: '$', shiftLabel: '$' },
    'Digit5': { key: '5', label: '5', shiftKey: '%', shiftLabel: '%' },
    'Digit6': { key: '6', label: '6', shiftKey: '^', shiftLabel: '^' },
    'Digit7': { key: '7', label: '7', shiftKey: '&', shiftLabel: '&' },
    'Digit8': { key: '8', label: '8', shiftKey: '*', shiftLabel: '*' },
    'Digit9': { key: '9', label: '9', shiftKey: '(', shiftLabel: '(' },
    'Digit0': { key: '0', label: '0', shiftKey: ')', shiftLabel: ')' },
    'Minus': { key: '-', label: '-', shiftKey: '_', shiftLabel: '_' },
    'Equal': { key: '=', label: '=', shiftKey: '+', shiftLabel: '+' },

    // Top row (QDRWB)
    'KeyQ': { key: 'q', label: 'Q', shiftKey: 'Q', shiftLabel: 'Q' },
    'KeyW': { key: 'd', label: 'D', shiftKey: 'D', shiftLabel: 'D' },
    'KeyE': { key: 'r', label: 'R', shiftKey: 'R', shiftLabel: 'R' },
    'KeyR': { key: 'w', label: 'W', shiftKey: 'W', shiftLabel: 'W' },
    'KeyT': { key: 'b', label: 'B', shiftKey: 'B', shiftLabel: 'B' },
    'KeyY': { key: 'j', label: 'J', shiftKey: 'J', shiftLabel: 'J' },
    'KeyU': { key: 'f', label: 'F', shiftKey: 'F', shiftLabel: 'F' },
    'KeyI': { key: 'u', label: 'U', shiftKey: 'U', shiftLabel: 'U' },
    'KeyO': { key: 'p', label: 'P', shiftKey: 'P', shiftLabel: 'P' },
    'KeyP': { key: ';', label: ';', shiftKey: ':', shiftLabel: ':' },
    'BracketLeft': { key: '[', label: '[', shiftKey: '{', shiftLabel: '{' },
    'BracketRight': { key: ']', label: ']', shiftKey: '}', shiftLabel: '}' },
    'Backslash': { key: '\\', label: '\\', shiftKey: '|', shiftLabel: '|' },

    // Home row (ASHTG)
    'KeyA': { key: 'a', label: 'A', shiftKey: 'A', shiftLabel: 'A' },
    'KeyS': { key: 's', label: 'S', shiftKey: 'S', shiftLabel: 'S' },
    'KeyD': { key: 'h', label: 'H', shiftKey: 'H', shiftLabel: 'H' },
    'KeyF': { key: 't', label: 'T', shiftKey: 'T', shiftLabel: 'T' },
    'KeyG': { key: 'g', label: 'G', shiftKey: 'G', shiftLabel: 'G' },
    'KeyH': { key: 'y', label: 'Y', shiftKey: 'Y', shiftLabel: 'Y' },
    'KeyJ': { key: 'n', label: 'N', shiftKey: 'N', shiftLabel: 'N' },
    'KeyK': { key: 'e', label: 'E', shiftKey: 'E', shiftLabel: 'E' },
    'KeyL': { key: 'o', label: 'O', shiftKey: 'O', shiftLabel: 'O' },
    'Semicolon': { key: 'i', label: 'I', shiftKey: 'I', shiftLabel: 'I' },
    'Quote': { key: "'", label: "'", shiftKey: '"', shiftLabel: '"' },

    // Bottom row (ZXMCV)
    'KeyZ': { key: 'z', label: 'Z', shiftKey: 'Z', shiftLabel: 'Z' },
    'KeyX': { key: 'x', label: 'X', shiftKey: 'X', shiftLabel: 'X' },
    'KeyC': { key: 'm', label: 'M', shiftKey: 'M', shiftLabel: 'M' },
    'KeyV': { key: 'c', label: 'C', shiftKey: 'C', shiftLabel: 'C' },
    'KeyB': { key: 'v', label: 'V', shiftKey: 'V', shiftLabel: 'V' },
    'KeyN': { key: 'k', label: 'K', shiftKey: 'K', shiftLabel: 'K' },
    'KeyM': { key: 'l', label: 'L', shiftKey: 'L', shiftLabel: 'L' },
    'Comma': { key: ',', label: ',', shiftKey: '<', shiftLabel: '<' },
    'Period': { key: '.', label: '.', shiftKey: '>', shiftLabel: '>' },
    'Slash': { key: '/', label: '/', shiftKey: '?', shiftLabel: '?' },
  }
};

export const keymaps: KeymapDefinition[] = [
  qwertyKeymap,
  dvorakKeymap,
  colemakKeymap,
  workmanKeymap,
];

export const getKeymapById = (id: string): KeymapDefinition | undefined => {
  return keymaps.find(keymap => keymap.id === id);
};

export const getDefaultKeymap = (): KeymapDefinition => {
  return keymaps[0]; // QWERTY
};

// Function to apply keymap to a key definition
export const applyKeymapToKey = (keyDef: any, keymap: KeymapDefinition, isShiftPressed = false): any => {
  const mapping = keymap.mapping[keyDef.code];
  if (mapping) {
    return {
      ...keyDef,
      key: isShiftPressed && mapping.shiftKey ? mapping.shiftKey : mapping.key,
      label: isShiftPressed && mapping.shiftLabel ? mapping.shiftLabel : mapping.label,
    };
  }
  return keyDef;
};
