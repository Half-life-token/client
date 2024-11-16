import React, { useState, useEffect } from 'react';
import NixieUnit from './NixieUnit';

interface NixieClockProps {
  targetDate: string | Date;
}

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const NixieClock: React.FC<NixieClockProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    } else {
      timeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="relative w-full max-w-3xl"> {/* Adjust max-w as needed */}
      {/* Clock Face Image */}
      <img
        src="/oscillo.jpg"
        alt="Clock Oscilloscope"
        className="w-full h-auto object-contain"
      />

      {/* Nixie Clock Overlay */}
      <div className="absolute flex space-x-2 z-10 scale-40 "
        style={{
     /*      transformOrigin: 'top left', */
          transform: 'scale(0.34)',
          top: '32%',
          right: '2%',
        }}
      >
        {/* Decreased scale from scale-50 to scale-40 to make tubes smaller */}
        <NixieUnit digits={days} label="Days" />
        <div className="text-2xl font-nixie text-yellow-400 self-center">:</div> {/* Reduced from text-3xl to text-2xl */}
        <NixieUnit digits={hours} label="Hours" />
        <div className="text-2xl font-nixie text-yellow-400 self-center">:</div> {/* Reduced from text-3xl to text-2xl */}
        <NixieUnit digits={minutes} label="Minutes" />
        <div className="text-2xl font-nixie text-yellow-400 self-center">:</div> {/* Reduced from text-3xl to text-2xl */}
        <NixieUnit digits={seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default NixieClock;
