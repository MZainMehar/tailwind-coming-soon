// CountdownTimer.js
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const endTime = new Date('August 14, 2024 23:59:59 GMT+0530').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = endTime - now;
      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setTimeLeft({
          days: days < 10 ? '0' + days : days,
          hours: hours < 10 ? '0' + hours : hours,
          minutes: minutes < 10 ? '0' + minutes : minutes,
          seconds: seconds < 10 ? '0' + seconds : seconds
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 text-center">
      <div className="rounded-full bg-white w-32 h-32 flex items-center justify-center">
        <div className="text-black text-5xl font-bold">
          <span>{timeLeft.days}</span>
          <span className="text-sm block">Days</span>
        </div>
      </div>
      <div className="rounded-full bg-white w-32 h-32 flex items-center justify-center">
        <div className="text-black text-5xl font-bold">
          <span>{timeLeft.hours}</span>
          <span className="text-sm block text-center">Hours</span>
        </div>
      </div>
      <div className="rounded-full bg-white w-32 h-32 flex items-center justify-center">
        <div className="text-black text-5xl font-bold">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm block">Minutes</span>
        </div>
      </div>
      <div className="rounded-full bg-white w-32 h-32 flex items-center justify-center">
        <div className="text-black text-5xl font-bold">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm block">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
