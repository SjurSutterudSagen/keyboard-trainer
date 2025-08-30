export interface KeyPosition {
  row: number;
  col: number;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  rotationX?: number;
  rotationY?: number;
}

export interface KeyDefinition {
  code: string;
  key: string;
  label: string;
  position: KeyPosition;
  zone?: 'left' | 'right' | 'center' | 'thumb';
  isModifier?: boolean;
  isAlphanumeric?: boolean;
}

export interface KeyboardLayout {
  id: string;
  name: string;
  description: string;
  keys: KeyDefinition[];
  width: number;
  height: number;
  split?: boolean;
  thumbClusters?: boolean;
}

export interface PressedKey {
  code: string;
  timestamp: number;
}

export interface KeymapDefinition {
  id: string;
  name: string;
  description: string;
  mapping: Record<string, { key: string; label: string; shiftKey?: string; shiftLabel?: string }>;
}

export interface KeyboardState {
  pressedKeys: Set<string>;
  keyHistory: PressedKey[];
  currentLayout: string;
  currentKeymap: string;
}

export type KeyboardLayoutType = 
  | 'standard'
  | 'tkl' 
  | 'compact'
  | 'split'
  | 'ergodox'
  | 'corne'
  | 'lily58'
  | 'kyria'
  | 'glove80'
  ;
