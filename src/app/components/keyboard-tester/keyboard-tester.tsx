"use client";

import { KeyboardViewer } from "../keyboard-viewer/keyboard-viewer";
import { KeyboardText } from "../keyboard-text/keyboard-text";

export function KeyboardTester() {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Keyboard Tester
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Test your keyboard with visual feedback. Supports various layouts including 
                        split keyboards and thumb clusters. Start typing to see your key presses 
                        highlighted in real-time.
                    </p>
                </div>
                
                <div className="space-y-8">
                    <KeyboardViewer />
                    <KeyboardText />
                </div>
                
                <footer className="mt-12 text-center text-sm text-gray-500">
                    <p>
                        Keyboard layouts: Standard QWERTY, Corne (3x6+3), ErgoDox • 
                        Keymaps: QWERTY, Dvorak, Colemak, Workman
                    </p>
                </footer>
            </div>
        </div>
    );
}