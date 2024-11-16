import React from 'react';
import NixieClock from './components/NixieClock';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-mono">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold tracking-widest">Half Life</h1>
        <p className="mt-4 text-xl tracking-wide">
          The countdown to the next elimination round begins!
        </p>
      </header>
      <NixieClock targetDate="2024-12-31T23:59:59" />
    </div>
  );
};

export default App;
