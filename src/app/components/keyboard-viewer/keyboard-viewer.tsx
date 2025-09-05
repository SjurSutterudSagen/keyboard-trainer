'use client';

import { useState } from 'react';

import { useKeyboardInput } from '../../../hooks/useKeyboardInput';
import { keyboardLayouts, getLayoutById } from '../../../data/keyboard-layouts';
import { keymaps, getKeymapById } from '../../../data/keymaps';
import { Key } from '../key/key';

export function KeyboardViewer() {
    const { keyboardState, setCurrentLayout, setCurrentKeymap } =
        useKeyboardInput();
    const [scale, setScale] = useState(1);

    const currentLayout =
        getLayoutById(keyboardState.currentLayout) || keyboardLayouts[0];
    const currentKeymap =
        getKeymapById(keyboardState.currentKeymap) || keymaps[0];

    // Check if shift is currently pressed
    const isShiftPressed =
        keyboardState.pressedKeys.has('ShiftLeft') ||
        keyboardState.pressedKeys.has('ShiftRight');

    const handleLayoutChange = (layoutId: string) => {
        setCurrentLayout(layoutId);
    };

    const handleKeymapChange = (keymapId: string) => {
        setCurrentKeymap(keymapId);
    };

    const handleScaleChange = (newScale: number) => {
        setScale(Math.max(0.5, Math.min(2, newScale)));
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg">
            {/* Controls */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="layout-select"
                        className="text-sm font-medium text-gray-700"
                    >
                        Layout:
                    </label>
                    <select
                        id="layout-select"
                        value={keyboardState.currentLayout}
                        onChange={(e) => handleLayoutChange(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {keyboardLayouts.map((layout) => (
                            <option key={layout.id} value={layout.id}>
                                {layout.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label
                        htmlFor="keymap-select"
                        className="text-sm font-medium text-gray-700"
                    >
                        Keymap:
                    </label>
                    <select
                        id="keymap-select"
                        value={keyboardState.currentKeymap}
                        onChange={(e) => handleKeymapChange(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {keymaps.map((keymap) => (
                            <option key={keymap.id} value={keymap.id}>
                                {keymap.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label
                        htmlFor="scale-range"
                        className="text-sm font-medium text-gray-700"
                    >
                        Scale:
                    </label>
                    <input
                        id="scale-range"
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={scale}
                        onChange={(e) =>
                            handleScaleChange(parseFloat(e.target.value))
                        }
                        className="w-20"
                    />
                    <span className="text-sm text-gray-500 w-8">
                        {scale.toFixed(1)}x
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Pressed keys: {keyboardState.pressedKeys.size}</span>
                </div>
            </div>

            {/* Layout Info */}
            <div className="mb-4">
                <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {currentLayout.name}
                    </h3>
                    <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {currentKeymap.name} keymap
                    </span>
                </div>
                <p className="text-sm text-gray-600">
                    {currentLayout.description}
                </p>
                <p className="text-sm text-gray-500">
                    {currentKeymap.description}
                </p>
                {currentLayout.split && (
                    <div className="flex gap-4 mt-2 text-xs">
                        <span className="flex items-center gap-1">
                            <div className="w-3 h-3 border-2 border-blue-300 rounded"></div>
                            Left half
                        </span>
                        <span className="flex items-center gap-1">
                            <div className="w-3 h-3 border-2 border-green-300 rounded"></div>
                            Right half
                        </span>
                        {currentLayout.thumbClusters && (
                            <span className="flex items-center gap-1">
                                <div className="w-3 h-3 border-2 border-purple-300 rounded"></div>
                                Thumb clusters
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Keyboard Display */}
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 overflow-auto">
                <div
                    className="relative mx-auto"
                    style={{
                        width: `${currentLayout.width * scale}px`,
                        height: `${currentLayout.height * scale}px`,
                        minWidth: `${currentLayout.width * scale}px`,
                        minHeight: `${currentLayout.height * scale}px`,
                    }}
                >
                    {currentLayout.keys.map((keyDef) => (
                        <Key
                            key={keyDef.code}
                            keyDef={keyDef}
                            isPressed={keyboardState.pressedKeys.has(
                                keyDef.code
                            )}
                            isShiftPressed={isShiftPressed}
                            keymap={currentKeymap}
                            scale={scale}
                        />
                    ))}
                </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 text-sm text-gray-600">
                <p>
                    <strong>Instructions:</strong> Click on this area and start
                    typing to see keys light up on the keyboard viewer above.
                    The viewer supports different keyboard layouts and keymaps.
                    Try switching between keymaps to see how the key labels
                    change!
                </p>
            </div>
        </div>
    );
}
