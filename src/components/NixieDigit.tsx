import React from 'react';

interface NixieDigitProps {
  value: string;
}

const NixieDigit: React.FC<NixieDigitProps> = ({ value }) => {
  return (
    <div className="flex flex-col items-center pl-2 pr-2">
      {/* Tube with attached base */}
      <div className="relative">
        {/* Metal casing */}
        <div className="relative w-24 h-44 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-t-lg border-2 border-gray-700 shadow-xl">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50 rounded-t-lg pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white/30 opacity-10 rounded-t-lg pointer-events-none"></div>

          {/* Orange glow reflection on casing */}
          <div className="absolute inset-0 rounded-t-lg nixie-reflection pointer-events-none"></div>

          {/* Inner tube */}
          <div className="absolute top-2 left-2 right-2 bottom-2 bg-black rounded-t-lg overflow-hidden">
            {/* Inactive wires */}
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center justify-center text-6xl font-nixie text-gray-600 opacity-5 pointer-events-none ${
                  value === i.toString() ? 'opacity-0' : ''
                }`}
              >
                {i}
              </div>
            ))}
            {/* Active digit */}
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-nixie text-orange-400 nixie-number">
              {value}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg nixie-glow bg-orange-400 opacity-40 blur-lg"></div>
          </div>
        </div>

        {/* Attached base with wood image */}
       {/*  <div
          className="w-24 h-8 relative border-t-2 border-gray-700 shadow-md"
          style={{
            backgroundImage: "url('https://static9.depositphotos.com/1611805/1093/i/450/depositphotos_10939205-stock-photo-wood-seamless-texture.jpg')", // Replace with the actual image URL
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-20 pointer-events-none"></div>
        </div> */}
      </div>
    </div>
  );
};

export default NixieDigit;
