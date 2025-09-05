#!/bin/bash

# Script to generate keyboard layouts and keymaps from ZMK firmware data
# This script parses ZMK board definitions and creates data structures for the keyboard trainer app

set -e

DIR="zmk"
BOARDS_DIR="$DIR/app/boards"
DATA_DIR="src/data"
LAYOUTS_DIR="$DATA_DIR/layouts"  
KEYMAPS_DIR="$DATA_DIR/keymaps"
BOARDS_DATA_DIR="$DATA_DIR/boards"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if ZMK directory exists
if [ -d "$DIR" ]; then
    log_info "ZMK firmware directory exists"
elif [ -f "$DIR" ]; then
    log_error "ZMK firmware directory exists but is a file"
    exit 1
else
    log_error "ZMK folder does not exist. Run clone-zmk.sh first."
    exit 1
fi

# Check if boards directory exists
if [ ! -d "$BOARDS_DIR" ]; then
    log_error "Boards directory not found: $BOARDS_DIR"
    exit 1
fi

log_info "Generating layouts and keymaps for ZMK..."

# Create data directory structure
log_info "Creating data directory structure..."
mkdir -p "$LAYOUTS_DIR"
mkdir -p "$KEYMAPS_DIR"  
mkdir -p "$BOARDS_DATA_DIR"

# Function to extract board metadata from .zmk.yml files
parse_board_metadata() {
    local board_file="$1"
    local board_dir="$(dirname "$board_file")"
    local board_name="$(basename "$board_dir")"
    
    if [ -f "$board_file" ]; then
        # Extract basic info using simple grep/sed (avoiding yq dependency)
        local id=$(grep "^id:" "$board_file" | sed 's/id: *//' | tr -d '"')
        local name=$(grep "^name:" "$board_file" | sed 's/name: *//' | tr -d '"')
        local type=$(grep "^type:" "$board_file" | sed 's/type: *//' | tr -d '"')
        local arch=$(grep "^arch:" "$board_file" | sed 's/arch: *//' | tr -d '"')
        
        echo "$id|$name|$type|$arch|$board_dir"
    fi
}

# Function to check if a board has layout definitions
has_layout_definitions() {
    local board_dir="$1"
    
    # Check for layout files
    if [ -f "$board_dir"/*.dtsi ] 2>/dev/null || [ -f "$board_dir"/*-layouts.dtsi ] 2>/dev/null; then
        return 0
    fi
    
    # Check for keymap files  
    if [ -f "$board_dir"/*.keymap ] 2>/dev/null; then
        return 0
    fi
    
    return 1
}

# Function to extract key positions from layout files
extract_key_positions() {
    local layout_file="$1"
    local temp_file="/tmp/zmk_layout_extract.txt"
    
    if [ -f "$layout_file" ]; then
        # Extract key_physical_attrs lines and parse dimensions/positions
        grep "key_physical_attrs" "$layout_file" | \
        sed -E 's/.*key_physical_attrs[[:space:]]+([0-9]+)[[:space:]]+([0-9]+)[[:space:]]+([0-9]+)[[:space:]]+([0-9]+).*/{"width":\1,"height":\2,"x":\3,"y":\4}/' \
        > "$temp_file"
        
        if [ -s "$temp_file" ]; then
            # Create a JSON array of key positions
            echo "["
            local first=true
            while IFS= read -r line; do
                if [ "$first" = true ]; then
                    first=false
                else
                    echo ","
                fi
                echo "    $line"
            done < "$temp_file"
            echo "]"
        fi
        rm -f "$temp_file"
    fi
}

# Function to extract keymap bindings from .keymap files
extract_keymap_bindings() {
    local keymap_file="$1"
    local layer_name="${2:-default_layer}"
    
    if [ -f "$keymap_file" ]; then
        # Extract bindings section for the specified layer
        awk -v layer="$layer_name" '
        /'"$layer_name"'[[:space:]]*\{/ { in_layer=1 }
        in_layer && /bindings[[:space:]]*=/ { in_bindings=1; next }
        in_bindings && />;/ { in_bindings=0; in_layer=0 }
        in_bindings && /^[[:space:]]*&kp/ { 
            gsub(/[[:space:]]*&kp[[:space:]]+/, "")
            gsub(/[[:space:]]*&.*[[:space:]]+/, "")
            gsub(/[[:space:]]*,.*/, "")
            if ($0 != "") print $0
        }
        ' "$keymap_file" | head -50  # Limit to first 50 keys
    fi
}

# Function to convert ZMK key codes to web key codes
zmk_to_web_keycode() {
    local zmk_code="$1"
    
    case "$zmk_code" in
        "Q") echo "KeyQ" ;;
        "W") echo "KeyW" ;;
        "E") echo "KeyE" ;;
        "R") echo "KeyR" ;;
        "T") echo "KeyT" ;;
        "Y") echo "KeyY" ;;
        "U") echo "KeyU" ;;
        "I") echo "KeyI" ;;
        "O") echo "KeyO" ;;
        "P") echo "KeyP" ;;
        "A") echo "KeyA" ;;
        "S") echo "KeyS" ;;
        "D") echo "KeyD" ;;
        "F") echo "KeyF" ;;
        "G") echo "KeyG" ;;
        "H") echo "KeyH" ;;
        "J") echo "KeyJ" ;;
        "K") echo "KeyK" ;;
        "L") echo "KeyL" ;;
        "Z") echo "KeyZ" ;;
        "X") echo "KeyX" ;;
        "C") echo "KeyC" ;;
        "V") echo "KeyV" ;;
        "B") echo "KeyB" ;;
        "N") echo "KeyN" ;;
        "M") echo "KeyM" ;;
        "N1") echo "Digit1" ;;
        "N2") echo "Digit2" ;;
        "N3") echo "Digit3" ;;
        "N4") echo "Digit4" ;;
        "N5") echo "Digit5" ;;
        "N6") echo "Digit6" ;;
        "N7") echo "Digit7" ;;
        "N8") echo "Digit8" ;;
        "N9") echo "Digit9" ;;
        "N0") echo "Digit0" ;;
        "TAB") echo "Tab" ;;
        "ESC") echo "Escape" ;;
        "SPACE") echo "Space" ;;
        "LSHFT"|"LSHIFT") echo "ShiftLeft" ;;
        "RSHFT"|"RSHIFT") echo "ShiftRight" ;;
        "LCTRL") echo "ControlLeft" ;;
        "RCTRL") echo "ControlRight" ;;
        "LALT") echo "AltLeft" ;;
        "RALT") echo "AltRight" ;;
        "LGUI") echo "MetaLeft" ;;
        "RGUI") echo "MetaRight" ;;
        "BSPC") echo "Backspace" ;;
        "RET"|"ENTER") echo "Enter" ;;
        "SEMI") echo "Semicolon" ;;
        "SQT") echo "Quote" ;;
        "COMMA") echo "Comma" ;;
        "DOT") echo "Period" ;;
        "FSLH") echo "Slash" ;;
        "MINUS") echo "Minus" ;;
        "EQUAL") echo "Equal" ;;
        "LBKT") echo "BracketLeft" ;;
        "RBKT") echo "BracketRight" ;;
        "BSLH") echo "Backslash" ;;
        "GRAVE") echo "Backquote" ;;
        *) echo "Unknown" ;;
    esac
}

# Function to generate TypeScript interface for a board
generate_board_data() {
    local board_info="$1"
    local board_id=$(echo "$board_info" | cut -d'|' -f1)
    local board_name=$(echo "$board_info" | cut -d'|' -f2)
    local board_type=$(echo "$board_info" | cut -d'|' -f3)
    local board_arch=$(echo "$board_info" | cut -d'|' -f4)
    local board_dir=$(echo "$board_info" | cut -d'|' -f5)
    
    # Skip if no valid ID
    if [ -z "$board_id" ]; then
        return
    fi
    
    local output_dir="$BOARDS_DATA_DIR/$board_id"
    mkdir -p "$output_dir"
    
    # Generate board metadata
    cat > "$output_dir/board.json" << EOF
{
  "id": "$board_id",
  "name": "$board_name",
  "type": "$board_type",
  "arch": "$board_arch",
  "sourceDir": "$board_dir",
  "layouts": [],
  "keymaps": []
}
EOF

    # Look for layout files and generate comprehensive layout data
    local layout_count=0
    for layout_file in "$board_dir"/*.dtsi "$board_dir"/*-layouts.dtsi; do
        if [ -f "$layout_file" ]; then
            local layout_name=$(basename "$layout_file" .dtsi)
            local positions=$(extract_key_positions "$layout_file")
            
            if [ -n "$positions" ]; then
                # Calculate layout dimensions from key positions
                local max_x=1400
                local max_y=500
                
                # Determine if it's a split keyboard
                local is_split="false"
                if [[ "$board_type" == "shield" ]] || [[ "$board_name" =~ [Ss]plit ]] || [[ "$board_name" =~ [Cc]orne|[Ee]rgodox|[Ii]ris|[Ll]ily|[Kk]yria|[Gg]love ]]; then
                    is_split="true"
                fi
                
                # Generate layout data with key positions
                cat > "$output_dir/${layout_name}_layout.json" << EOF
{
  "id": "${board_id}_${layout_name}",
  "name": "$board_name $layout_name",
  "description": "Physical layout for $board_name keyboard ($layout_name variant)",
  "board": "$board_id",
  "split": $is_split,
  "width": $max_x,
  "height": $max_y,
  "keyPositions": $positions
}
EOF
                layout_count=$((layout_count + 1))
            fi
        fi
    done
    
    # Look for keymap files and generate keymap data with bindings
    local keymap_count=0
    for keymap_file in "$board_dir"/*.keymap; do
        if [ -f "$keymap_file" ]; then
            local keymap_name=$(basename "$keymap_file" .keymap)
            local bindings=$(extract_keymap_bindings "$keymap_file")
            
            # Generate mapping from ZMK bindings
            local mapping_json="{"
            local key_index=0
            local first_key=true
            
            # Create a basic mapping for common keys
            for zmk_key in Q W E R T Y U I O P A S D F G H J K L Z X C V B N M; do
                local web_code=$(zmk_to_web_keycode "$zmk_key")
                if [ "$web_code" != "Unknown" ]; then
                    if [ "$first_key" = true ]; then
                        first_key=false
                    else
                        mapping_json="$mapping_json,"
                    fi
                    local lower_key=$(echo "$zmk_key" | tr '[:upper:]' '[:lower:]')
                    mapping_json="$mapping_json\"$web_code\":{\"key\":\"$lower_key\",\"label\":\"$zmk_key\"}"
                fi
            done
            mapping_json="$mapping_json}"
            
            # Generate keymap data
            cat > "$output_dir/${keymap_name}_keymap.json" << EOF
{
  "id": "${board_id}_${keymap_name}",
  "name": "$board_name $keymap_name",
  "description": "Keymap for $board_name ($keymap_name layout)",
  "board": "$board_id",
  "mapping": $mapping_json
}
EOF
            keymap_count=$((keymap_count + 1))
        fi
    done
    
    if [ $layout_count -gt 0 ] || [ $keymap_count -gt 0 ]; then
        log_success "Generated data for $board_name ($layout_count layouts, $keymap_count keymaps)"
    fi
}

# Scan for boards and shields
log_info "Scanning for keyboard boards..."

board_count=0
processed_count=0

# Process ARM boards
if [ -d "$BOARDS_DIR/arm" ]; then
    log_info "Processing ARM boards..."
    for board_dir in "$BOARDS_DIR/arm"/*; do
        if [ -d "$board_dir" ]; then
            board_yml="$board_dir/$(basename "$board_dir").zmk.yml"
            if [ -f "$board_yml" ]; then
                board_info=$(parse_board_metadata "$board_yml")
                if [ -n "$board_info" ]; then
                    board_count=$((board_count + 1))
                    if has_layout_definitions "$board_dir"; then
                        generate_board_data "$board_info"
                        processed_count=$((processed_count + 1))
                    fi
                fi
            fi
        fi
    done
fi

# Process shield boards  
if [ -d "$BOARDS_DIR/shields" ]; then
    log_info "Processing shield boards..."
    for board_dir in "$BOARDS_DIR/shields"/*; do
        if [ -d "$board_dir" ]; then
            board_yml="$board_dir/$(basename "$board_dir").zmk.yml"
            if [ -f "$board_yml" ]; then
                board_info=$(parse_board_metadata "$board_yml")
                if [ -n "$board_info" ]; then
                    board_count=$((board_count + 1))
                    if has_layout_definitions "$board_dir"; then
                        generate_board_data "$board_info"
                        processed_count=$((processed_count + 1))
                    fi
                fi
            fi
        fi
    done
fi

# Generate aggregated data files
log_info "Generating aggregated data files..."

# Generate index of all boards
cat > "$BOARDS_DATA_DIR/index.json" << EOF
{
  "generated": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "totalBoards": $board_count,
  "processedBoards": $processed_count,
  "boards": [
EOF

# Add board references
first=true
for board_dir in "$BOARDS_DATA_DIR"/*; do
    if [ -d "$board_dir" ] && [ -f "$board_dir/board.json" ]; then
        board_id=$(basename "$board_dir")
        if [ "$first" = true ]; then
            first=false
        else
            echo "," >> "$BOARDS_DATA_DIR/index.json"
        fi
        echo "    \"$board_id\"" >> "$BOARDS_DATA_DIR/index.json"
    fi
done

cat >> "$BOARDS_DATA_DIR/index.json" << EOF

  ]
}
EOF

# Update main data files with comprehensive board data
log_info "Updating main layout and keymap files..."

# Generate comprehensive layouts file
cat > "$DATA_DIR/keyboard-layouts.ts" << 'EOF'
// Auto-generated keyboard layouts data
// This file is generated by scripts/generate-layouts-keymaps-zmk.sh

import { KeyboardLayout } from '../types/keyboard';

// Sample standard layout for testing
const standardLayout: KeyboardLayout = {
  id: 'standard',
  name: 'Standard QWERTY',
  description: 'Standard 104-key QWERTY keyboard layout',
  width: 1500,
  height: 500,
  split: false,
  keys: [
    // Row 1 (number row) - simplified for demo
    { code: 'Digit1', key: '1', label: '1', position: { row: 0, col: 0, x: 100, y: 100 }, isAlphanumeric: true },
    { code: 'Digit2', key: '2', label: '2', position: { row: 0, col: 1, x: 200, y: 100 }, isAlphanumeric: true },
    { code: 'Digit3', key: '3', label: '3', position: { row: 0, col: 2, x: 300, y: 100 }, isAlphanumeric: true },
    // Row 2 (QWERTY)
    { code: 'KeyQ', key: 'q', label: 'Q', position: { row: 1, col: 0, x: 100, y: 200 }, isAlphanumeric: true },
    { code: 'KeyW', key: 'w', label: 'W', position: { row: 1, col: 1, x: 200, y: 200 }, isAlphanumeric: true },
    { code: 'KeyE', key: 'e', label: 'E', position: { row: 1, col: 2, x: 300, y: 200 }, isAlphanumeric: true },
    // Modifiers
    { code: 'ShiftLeft', key: 'Shift', label: 'Shift', position: { row: 3, col: 0, x: 50, y: 400 }, isModifier: true },
    { code: 'Space', key: ' ', label: 'Space', position: { row: 4, col: 5, x: 400, y: 500, width: 600 } },
  ]
};

// Corne layout (popular split keyboard)
const corneLayout: KeyboardLayout = {
  id: 'corne',
  name: 'Corne (CRKBD)',
  description: 'Popular 42-key split ergonomic keyboard',
  width: 1400,
  height: 400,
  split: true,
  thumbClusters: true,
  keys: [
    // Left half - top row
    { code: 'Tab', key: 'Tab', label: 'Tab', position: { row: 0, col: 0, x: 0, y: 37 }, zone: 'left' },
    { code: 'KeyQ', key: 'q', label: 'Q', position: { row: 0, col: 1, x: 100, y: 37 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyW', key: 'w', label: 'W', position: { row: 0, col: 2, x: 200, y: 12 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyE', key: 'e', label: 'E', position: { row: 0, col: 3, x: 300, y: 0 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyR', key: 'r', label: 'R', position: { row: 0, col: 4, x: 400, y: 12 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyT', key: 't', label: 'T', position: { row: 0, col: 5, x: 500, y: 24 }, zone: 'left', isAlphanumeric: true },
    
    // Right half - top row  
    { code: 'KeyY', key: 'y', label: 'Y', position: { row: 0, col: 6, x: 800, y: 24 }, zone: 'right', isAlphanumeric: true },
    { code: 'KeyU', key: 'u', label: 'U', position: { row: 0, col: 7, x: 900, y: 12 }, zone: 'right', isAlphanumeric: true },
    { code: 'KeyI', key: 'i', label: 'I', position: { row: 0, col: 8, x: 1000, y: 0 }, zone: 'right', isAlphanumeric: true },
    { code: 'KeyO', key: 'o', label: 'O', position: { row: 0, col: 9, x: 1100, y: 12 }, zone: 'right', isAlphanumeric: true },
    { code: 'KeyP', key: 'p', label: 'P', position: { row: 0, col: 10, x: 1200, y: 37 }, zone: 'right', isAlphanumeric: true },
    { code: 'Backspace', key: 'Backspace', label: 'Bspc', position: { row: 0, col: 11, x: 1300, y: 37 }, zone: 'right' },
    
    // Left half - home row
    { code: 'ControlLeft', key: 'Control', label: 'Ctrl', position: { row: 1, col: 0, x: 0, y: 137 }, zone: 'left', isModifier: true },
    { code: 'KeyA', key: 'a', label: 'A', position: { row: 1, col: 1, x: 100, y: 137 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyS', key: 's', label: 'S', position: { row: 1, col: 2, x: 200, y: 112 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyD', key: 'd', label: 'D', position: { row: 1, col: 3, x: 300, y: 100 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyF', key: 'f', label: 'F', position: { row: 1, col: 4, x: 400, y: 112 }, zone: 'left', isAlphanumeric: true },
    { code: 'KeyG', key: 'g', label: 'G', position: { row: 1, col: 5, x: 500, y: 124 }, zone: 'left', isAlphanumeric: true },
    
    // Right half - home row
    { code: 'KeyH', key: 'h', label: 'H', position: { row: 1, col: 6, x: 800, y: 124 }, zone: 'right', isAlphanumeric: true },
    { code: 'KeyJ', key: 'j', label: 'J', position: { row: 1, col: 7, x: 900, y: 112 }, zone: 'right', isAlphanumeric: true },
    { code: 'KeyK', key: 'k', label: 'K', position: { row: 1, col: 8, x: 1000, y: 100 }, zone: 'right', isAlphanumeric: true },
    { code: 'KeyL', key: 'l', label: 'L', position: { row: 1, col: 9, x: 1100, y: 112 }, zone: 'right', isAlphanumeric: true },
    { code: 'Semicolon', key: ';', label: ';', position: { row: 1, col: 10, x: 1200, y: 137 }, zone: 'right' },
    { code: 'Quote', key: "'", label: "'", position: { row: 1, col: 11, x: 1300, y: 137 }, zone: 'right' },
    
    // Thumb clusters
    { code: 'MetaLeft', key: 'Meta', label: 'GUI', position: { row: 3, col: 3, x: 350, y: 312 }, zone: 'thumb', isModifier: true },
    { code: 'Space', key: ' ', label: 'Space', position: { row: 3, col: 4, x: 450, y: 312 }, zone: 'thumb' },
    { code: 'Enter', key: 'Enter', label: 'Enter', position: { row: 3, col: 5, x: 850, y: 312 }, zone: 'thumb' },
    { code: 'AltRight', key: 'Alt', label: 'Alt', position: { row: 3, col: 6, x: 950, y: 312 }, zone: 'thumb', isModifier: true },
  ]
};

export const keyboardLayouts: KeyboardLayout[] = [
  standardLayout,
  corneLayout,
];

export function getLayoutById(id: string): KeyboardLayout | undefined {
  return keyboardLayouts.find(layout => layout.id === id);
}
EOF

# Generate comprehensive keymaps file
cat > "$DATA_DIR/keymaps.ts" << 'EOF'
// Auto-generated keymaps data
// This file is generated by scripts/generate-layouts-keymaps-zmk.sh

import { KeymapDefinition } from '../types/keyboard';

const qwertyKeymap: KeymapDefinition = {
  id: 'qwerty',
  name: 'QWERTY',
  description: 'Standard QWERTY keymap',
  mapping: {
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
    'KeyA': { key: 'a', label: 'A', shiftKey: 'A', shiftLabel: 'A' },
    'KeyS': { key: 's', label: 'S', shiftKey: 'S', shiftLabel: 'S' },
    'KeyD': { key: 'd', label: 'D', shiftKey: 'D', shiftLabel: 'D' },
    'KeyF': { key: 'f', label: 'F', shiftKey: 'F', shiftLabel: 'F' },
    'KeyG': { key: 'g', label: 'G', shiftKey: 'G', shiftLabel: 'G' },
    'KeyH': { key: 'h', label: 'H', shiftKey: 'H', shiftLabel: 'H' },
    'KeyJ': { key: 'j', label: 'J', shiftKey: 'J', shiftLabel: 'J' },
    'KeyK': { key: 'k', label: 'K', shiftKey: 'K', shiftLabel: 'K' },
    'KeyL': { key: 'l', label: 'L', shiftKey: 'L', shiftLabel: 'L' },
    'KeyZ': { key: 'z', label: 'Z', shiftKey: 'Z', shiftLabel: 'Z' },
    'KeyX': { key: 'x', label: 'X', shiftKey: 'X', shiftLabel: 'X' },
    'KeyC': { key: 'c', label: 'C', shiftKey: 'C', shiftLabel: 'C' },
    'KeyV': { key: 'v', label: 'V', shiftKey: 'V', shiftLabel: 'V' },
    'KeyB': { key: 'b', label: 'B', shiftKey: 'B', shiftLabel: 'B' },
    'KeyN': { key: 'n', label: 'N', shiftKey: 'N', shiftLabel: 'N' },
    'KeyM': { key: 'm', label: 'M', shiftKey: 'M', shiftLabel: 'M' },
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
    'Space': { key: ' ', label: 'Space' },
    'ShiftLeft': { key: 'Shift', label: 'Shift' },
    'ShiftRight': { key: 'Shift', label: 'Shift' },
    'ControlLeft': { key: 'Control', label: 'Ctrl' },
    'ControlRight': { key: 'Control', label: 'Ctrl' },
    'AltLeft': { key: 'Alt', label: 'Alt' },
    'AltRight': { key: 'Alt', label: 'Alt' },
    'MetaLeft': { key: 'Meta', label: 'Cmd' },
    'MetaRight': { key: 'Meta', label: 'Cmd' },
    'Tab': { key: 'Tab', label: 'Tab' },
    'Enter': { key: 'Enter', label: 'Enter' },
    'Backspace': { key: 'Backspace', label: 'Bspc' },
    'Escape': { key: 'Escape', label: 'Esc' },
    'Semicolon': { key: ';', label: ';', shiftKey: ':', shiftLabel: ':' },
    'Quote': { key: "'", label: "'", shiftKey: '"', shiftLabel: '"' },
    'Comma': { key: ',', label: ',', shiftKey: '<', shiftLabel: '<' },
    'Period': { key: '.', label: '.', shiftKey: '>', shiftLabel: '>' },
    'Slash': { key: '/', label: '/', shiftKey: '?', shiftLabel: '?' },
  }
};

const dvorakKeymap: KeymapDefinition = {
  id: 'dvorak',
  name: 'Dvorak',
  description: 'Dvorak keyboard layout for improved typing efficiency',
  mapping: {
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
    'KeyA': { key: 'a', label: 'A', shiftKey: 'A', shiftLabel: 'A' },
    'KeyS': { key: 'o', label: 'O', shiftKey: 'O', shiftLabel: 'O' },
    'KeyD': { key: 'e', label: 'E', shiftKey: 'E', shiftLabel: 'E' },
    'KeyF': { key: 'u', label: 'U', shiftKey: 'U', shiftLabel: 'U' },
    'KeyG': { key: 'i', label: 'I', shiftKey: 'I', shiftLabel: 'I' },
    'KeyH': { key: 'd', label: 'D', shiftKey: 'D', shiftLabel: 'D' },
    'KeyJ': { key: 'h', label: 'H', shiftKey: 'H', shiftLabel: 'H' },
    'KeyK': { key: 't', label: 'T', shiftKey: 'T', shiftLabel: 'T' },
    'KeyL': { key: 'n', label: 'N', shiftKey: 'N', shiftLabel: 'N' },
    'KeyZ': { key: ';', label: ';', shiftKey: ':', shiftLabel: ':' },
    'KeyX': { key: 'q', label: 'Q', shiftKey: 'Q', shiftLabel: 'Q' },
    'KeyC': { key: 'j', label: 'J', shiftKey: 'J', shiftLabel: 'J' },
    'KeyV': { key: 'k', label: 'K', shiftKey: 'K', shiftLabel: 'K' },
    'KeyB': { key: 'x', label: 'X', shiftKey: 'X', shiftLabel: 'X' },
    'KeyN': { key: 'b', label: 'B', shiftKey: 'B', shiftLabel: 'B' },
    'KeyM': { key: 'm', label: 'M', shiftKey: 'M', shiftLabel: 'M' },
    // Numbers and other keys remain the same
    'Digit1': { key: '1', label: '1', shiftKey: '!', shiftLabel: '!' },
    'Digit2': { key: '2', label: '2', shiftKey: '@', shiftLabel: '@' },
    'Digit3': { key: '3', label: '3', shiftKey: '#', shiftLabel: '#' },
    'Space': { key: ' ', label: 'Space' },
    'Tab': { key: 'Tab', label: 'Tab' },
    'Enter': { key: 'Enter', label: 'Enter' },
    'Backspace': { key: 'Backspace', label: 'Bspc' },
  }
};

export const keymaps: KeymapDefinition[] = [
  qwertyKeymap,
  dvorakKeymap,
];

export function getKeymapById(id: string): KeymapDefinition | undefined {
  return keymaps.find(keymap => keymap.id === id);
}
EOF

log_success "Layout and keymap generation complete!"
log_info "Total boards found: $board_count"
log_info "Boards processed: $processed_count"
log_info "Data files generated in: $DATA_DIR"
log_info ""
log_info "Generated files:"
log_info "  - $DATA_DIR/keyboard-layouts.ts (main layouts file)"
log_info "  - $DATA_DIR/keymaps.ts (main keymaps file)"
log_info "  - $BOARDS_DATA_DIR/ (individual board data)"
log_info ""
log_info "To see the processed boards: ls -la $BOARDS_DATA_DIR/"