import React from 'react';

interface NixieDigitProps {
  value: string;
  label?: string;
}

const NixieDigit: React.FC<NixieDigitProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-32 bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-600 shadow-inner">
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-mono font-nixie text-yellow-400 nixie-number">
          {value}
        </div>
        <div className="absolute inset-0 nixie-glow"></div>
      </div>
      {label && (
        <div className="mt-2 text-center text-sm uppercase tracking-widest">{label}</div>
      )}
    </div>
  );
};

export default NixieDigit;
