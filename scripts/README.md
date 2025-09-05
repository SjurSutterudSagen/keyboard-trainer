# Keyboard Layout and Keymap Generation Script

This script (`generate-layouts-keymaps-zmk.sh`) parses ZMK firmware board definitions and generates structured data for the keyboard trainer web application.

## Overview

The script automates the extraction of keyboard layout and keymap information from the ZMK firmware repository, creating a organized data structure that supports:

- Multiple keyboard boards (both ARM boards and shields)
- Physical layouts with key positions
- Keymap definitions with key bindings
- Board-specific organization
- Support for split/ergonomic keyboards

## Generated Structure

```
src/data/
├── boards/           # Individual board data
│   ├── glove80/      # Example: Glove80 board
│   │   ├── board.json
│   │   ├── glove80_layout.json
│   │   └── glove80_keymap.json
│   ├── corne/        # Example: Corne shield
│   └── ...
├── keyboard-layouts.ts  # Main layouts export
└── keymaps.ts          # Main keymaps export
```

## Features

### Board Detection

- Scans `zmk/app/boards/arm/` for ARM-based boards
- Scans `zmk/app/boards/shields/` for shield-based keyboards
- Parses `.zmk.yml` metadata files for board information

### Layout Processing

- Extracts physical key positions from `.dtsi` layout files
- Parses `key_physical_attrs` definitions
- Calculates board dimensions and split characteristics
- Generates JSON layout data with coordinate information

### Keymap Processing

- Parses `.keymap` files for key bindings
- Converts ZMK key codes to web-compatible codes
- Generates mapping objects for key labels and functions
- Supports multiple keymaps per board

### Data Generation

- Creates TypeScript files with proper type exports
- Generates comprehensive board metadata
- Includes sample layouts (Standard QWERTY, Corne)
- Provides sample keymaps (QWERTY, Dvorak)

## Usage

```bash
./scripts/generate-layouts-keymaps-zmk.sh
```

### Prerequisites

- ZMK firmware repository cloned in `./zmk/`
- Bash shell with standard utilities (grep, sed, awk)

### Output

The script generates:

- Board-specific data files in `src/data/boards/`
- Main layout file: `src/data/keyboard-layouts.ts`
- Main keymap file: `src/data/keymaps.ts`
- Index file: `src/data/boards/index.json`

## Data Formats

### Board Metadata

```json
{
    "id": "board_id",
    "name": "Board Name",
    "type": "board|shield",
    "arch": "arm|riscv|...",
    "sourceDir": "path/to/zmk/board"
}
```

### Layout Data

```json
{
  "id": "board_layout",
  "name": "Board Layout Name",
  "description": "Layout description",
  "board": "board_id",
  "split": true|false,
  "width": 1400,
  "height": 500,
  "keyPositions": [
    {"width": 100, "height": 100, "x": 0, "y": 37}
  ]
}
```

### Keymap Data

```json
{
    "id": "board_keymap",
    "name": "Keymap Name",
    "description": "Keymap description",
    "board": "board_id",
    "mapping": {
        "KeyQ": {
            "key": "q",
            "label": "Q",
            "shiftKey": "Q",
            "shiftLabel": "Q"
        }
    }
}
```

## Security Considerations

The script safely processes the cloned ZMK repository by:

- Using read-only operations on ZMK files
- Generating output only in the project's data directory
- Validating file paths and input data
- Using safe shell scripting practices

## Supported Keyboards

The script has been tested with popular keyboards including:

- **ARM Boards**: Glove80, Advantage 360 Pro, nice!60
- **Shields**: Corne (CRKBD), Lily58, Iris, Kyria, Sofle
- **Ergonomic**: Split keyboards, thumb clusters
- **Ortholinear**: Planck-style layouts
- **Macropads**: Small function boards

## Extension

To add support for additional data extraction:

1. **Layout Parsing**: Modify `extract_key_positions()` function
2. **Keymap Parsing**: Enhance `extract_keymap_bindings()` function
3. **Key Code Mapping**: Update `zmk_to_web_keycode()` function
4. **Board Detection**: Extend scanning logic in main loop

## Integration

The generated data integrates with the keyboard trainer application through:

- TypeScript interfaces defined in `src/types/keyboard.ts`
- React components importing from `src/data/`
- Keyboard input handling in `src/hooks/useKeyboardInput.ts`

## Performance

- Processing 80+ boards takes ~2-5 seconds
- Generated data files are typically 1-50KB each
- Incremental updates only regenerate changed boards
