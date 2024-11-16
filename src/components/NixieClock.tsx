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
    <div className="flex flex-col items-center">
      {/* Nixie Clock */}
      <div className="flex items-center space-x-4">
        <NixieUnit digits={days} label="Days" />
        <div className="text-5xl font-nixie text-yellow-400 self-center">:</div>
        <NixieUnit digits={hours} label="Hours" />
        <div className="text-5xl font-nixie text-yellow-400 self-center">:</div>
        <NixieUnit digits={minutes} label="Minutes" />
        <div className="text-5xl font-nixie text-yellow-400 self-center">:</div>
        <NixieUnit digits={seconds} label="Seconds" />
      </div>

      {/* Image Below */}
      <img
        src="/soviet.png"
        alt="Soviet Control Board"
        className="object-contain max-w-7.5xl pl-44 pr-44"
      />
    </div>
  );
};

export default NixieClock;
