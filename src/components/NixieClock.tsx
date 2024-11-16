import React, { useState, useEffect } from 'react';
import NixieDigit from './NixieDigit';

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
    <div className="flex space-x-2">
      {/* Days */}
      <NixieDigit value={days[0]} label="Days" />
      <NixieDigit value={days[1]} />
      <div className="flex items-center justify-center text-5xl text-yellow-400">:</div>
      {/* Hours */}
      <NixieDigit value={hours[0]} label="Hours"/>
      <NixieDigit value={hours[1]} />
      <div className="flex items-center justify-center text-5xl text-yellow-400">:</div>
      {/* Minutes */}
      <NixieDigit value={minutes[0]} label="Minutes"/>
      <NixieDigit value={minutes[1]} />
      <div className="flex items-center justify-center text-5xl text-yellow-400">:</div>
      {/* Seconds */}
      <NixieDigit value={seconds[0]} label="Seconds"/>
      <NixieDigit value={seconds[1]} />
    </div>
  );
};

export default NixieClock;
