import React from 'react';
import NixieDigit from './NixieDigit';

interface NixieUnitProps {
  digits: string;
  label: string;
}

const NixieUnit: React.FC<NixieUnitProps> = ({ digits, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <NixieDigit value={digits[0]}/>
        <NixieDigit value={digits[1]}/>
      </div>
      <div className="mt-2 text-center text-sm uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

export default NixieUnit;
