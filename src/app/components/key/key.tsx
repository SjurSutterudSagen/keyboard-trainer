import { KeyDefinition } from '../../../types/keyboard';

interface KeyProps {
  keyDef: KeyDefinition;
  isPressed: boolean;
  scale?: number;
}

export function Key({ keyDef, isPressed, scale = 1 }: KeyProps) {
  const width = (keyDef.position.width || 40) * scale;
  const height = (keyDef.position.height || 40) * scale;
  const x = keyDef.position.x * scale;
  const y = keyDef.position.y * scale;

  const baseClasses = 'absolute border-2 rounded-md transition-all duration-75 flex items-center justify-center text-sm font-medium select-none';
  const zoneClasses: Record<string, string> = {
    left: 'border-blue-300',
    right: 'border-green-300',
    thumb: 'border-purple-300',
    center: 'border-gray-300',
  };
  
  const pressedClasses = isPressed 
    ? 'bg-red-500 border-red-600 text-white shadow-inner scale-95' 
    : 'bg-white border-gray-300 text-gray-700 shadow-md hover:bg-gray-50';

  const modifierClasses = keyDef.isModifier ? 'bg-blue-50 border-blue-200' : '';
  const alphanumericClasses = keyDef.isAlphanumeric ? 'font-bold' : '';
  
  const zoneClass = keyDef.zone ? zoneClasses[keyDef.zone] || zoneClasses.center : zoneClasses.center;

  return (
    <div
      className={`${baseClasses} ${isPressed ? pressedClasses : `${modifierClasses} bg-white shadow-md hover:bg-gray-50`} ${alphanumericClasses} ${!isPressed ? zoneClass : ''}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: keyDef.position.rotation 
          ? `rotate(${keyDef.position.rotation}deg)` 
          : undefined,
        transformOrigin: keyDef.position.rotationX && keyDef.position.rotationY 
          ? `${keyDef.position.rotationX}px ${keyDef.position.rotationY}px` 
          : 'center',
      }}
      title={`${keyDef.label} (${keyDef.code})`}
    >
      <span className="text-xs truncate px-1">
        {keyDef.label}
      </span>
    </div>
  );
}
