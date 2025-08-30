import { useState, useEffect, useCallback } from 'react';

import { KeyboardState, PressedKey } from '../types/keyboard';

export const useKeyboardInput = () => {
  const [keyboardState, setKeyboardState] = useState<KeyboardState>({
    pressedKeys: new Set<string>(),
    keyHistory: [],
    currentLayout: 'standard',
    currentKeymap: 'qwerty',
  });

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Prevent default behavior for certain keys to avoid browser shortcuts
    if (event.code === 'Space' || event.code === 'Tab' || event.code.startsWith('F')) {
      event.preventDefault();
    }

    setKeyboardState(prev => {
      const newPressedKeys = new Set(prev.pressedKeys);

      newPressedKeys.add(event.code);
      
      const newKeyHistory = [...prev.keyHistory];

      // Only add to history if it's not already the most recent key
      if (newKeyHistory.length === 0 || newKeyHistory[newKeyHistory.length - 1].code !== event.code) {
        newKeyHistory.push({
          code: event.code,
          timestamp: Date.now(),
        });
        
        // Keep only the last 50 key presses
        if (newKeyHistory.length > 50) {
          newKeyHistory.shift();
        }
      }

      return {
        ...prev,
        pressedKeys: newPressedKeys,
        keyHistory: newKeyHistory,
      };
    });
  }, []);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    setKeyboardState(prev => {
      const newPressedKeys = new Set(prev.pressedKeys);
      
      newPressedKeys.delete(event.code);
      
      return {
        ...prev,
        pressedKeys: newPressedKeys,
      };
    });
  }, []);

  const setCurrentLayout = useCallback((layoutId: string) => {
    setKeyboardState(prev => ({
      ...prev,
      currentLayout: layoutId,
    }));
  }, []);

  const setCurrentKeymap = useCallback((keymapId: string) => {
    setKeyboardState(prev => ({
      ...prev,
      currentKeymap: keymapId,
    }));
  }, []);

  const clearHistory = useCallback(() => {
    setKeyboardState(prev => ({
      ...prev,
      keyHistory: [],
    }));
  }, []);

  useEffect(() => {
    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // Clear all pressed keys when the window loses focus
  useEffect(() => {
    const handleBlur = () => {
      setKeyboardState(prev => ({
        ...prev,
        pressedKeys: new Set<string>(),
      }));
    };

    window.addEventListener('blur', handleBlur);
    
    return () => window.removeEventListener('blur', handleBlur);
  }, []);

  return {
    keyboardState,
    setCurrentLayout,
    setCurrentKeymap,
    clearHistory,
  };
};
