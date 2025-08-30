"use client";

import { useState, useRef, useEffect } from 'react';

import { useKeyboardInput } from '../../../hooks/useKeyboardInput';
import { getKeymapById } from '../../../data/keymaps';

export function KeyboardText() {
  const { keyboardState, clearHistory } = useKeyboardInput();
  const [typedText, setTypedText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentKeymap = getKeymapById(keyboardState.currentKeymap);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypedText(e.target.value);
  };

  const handleClearText = () => {
    setTypedText('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const formatKeyHistory = () => {
    return keyboardState.keyHistory
      .slice(-20) // Show last 20 keys
      .map(pressedKey => {
        const timeDiff = Date.now() - pressedKey.timestamp;
        return {
          ...pressedKey,
          isRecent: timeDiff < 1000, // Highlight keys pressed in the last second
        };
      });
  };

  useEffect(() => {
    // Auto-focus the textarea when component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="space-y-6">
        {/* Text Input Area */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-gray-800">Typing Area</h3>
              {currentKeymap && (
                <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {currentKeymap.name}
                </span>
              )}
            </div>
            <button
              onClick={handleClearText}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
            >
              Clear Text
            </button>
          </div>
          <textarea
            ref={textareaRef}
            value={typedText}
            onChange={handleTextChange}
            placeholder="Click here and start typing to test your keyboard..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg text-lg leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoFocus
          />
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
            <span>Characters: {typedText.length}</span>
            <span>Words: {typedText.trim() ? typedText.trim().split(/\s+/).length : 0}</span>
          </div>
        </div>

        {/* Currently Pressed Keys */}
        <div>
          <h4 className="text-md font-medium text-gray-800 mb-2">Currently Pressed</h4>
          <div className="min-h-[2.5rem] p-3 bg-gray-50 border border-gray-200 rounded-lg">
            {keyboardState.pressedKeys.size > 0 ? (
              <div className="flex flex-wrap gap-2">
                {Array.from(keyboardState.pressedKeys).map(keyCode => (
                  <span
                    key={keyCode}
                    className="px-2 py-1 bg-red-100 border border-red-300 text-red-800 text-sm rounded font-mono"
                  >
                    {keyCode}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-500 text-sm">No keys currently pressed</span>
            )}
          </div>
        </div>

        {/* Key History */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-md font-medium text-gray-800">Recent Key Presses</h4>
            <button
              onClick={clearHistory}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
            >
              Clear History
            </button>
          </div>
          <div className="min-h-[2.5rem] p-3 bg-gray-50 border border-gray-200 rounded-lg">
            {keyboardState.keyHistory.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {formatKeyHistory().map((pressedKey, index) => (
                  <span
                    key={`${pressedKey.code}-${pressedKey.timestamp}`}
                    className={`px-2 py-1 text-sm rounded font-mono transition-all duration-300 ${
                      pressedKey.isRecent
                        ? 'bg-green-100 border border-green-300 text-green-800'
                        : 'bg-gray-100 border border-gray-300 text-gray-700'
                    }`}
                  >
                    {pressedKey.code}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-500 text-sm">No key presses recorded yet</span>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-800">{keyboardState.keyHistory.length}</div>
            <div className="text-sm text-blue-600">Total Keys</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-800">{keyboardState.pressedKeys.size}</div>
            <div className="text-sm text-blue-600">Active Keys</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-800">
              {keyboardState.keyHistory.filter(k => Date.now() - k.timestamp < 10000).length}
            </div>
            <div className="text-sm text-blue-600">Last 10s</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-800">
              {new Set(keyboardState.keyHistory.map(k => k.code)).size}
            </div>
            <div className="text-sm text-blue-600">Unique Keys</div>
          </div>
        </div>
      </div>
    </div>
  );
}
