import React from 'react';
import NixieClock from './components/NixieClock';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono overflow-hidden">
      <header className="relative z-10 text-center mb-12">
        <h1 className="text-6xl font-bold tracking-widest text-white">HΔLF LΨFE</h1>
        <p className="mt-4 text-xl tracking-wide text-gray-300">
          The countdown to the next elimination round begins!
        </p>
      </header>
      <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-700 shadow-2xl">
        <NixieClock targetDate="2024-12-31T23:59:59" use3D={false} />
      </div>
    </div>
  );
};

export default App;
