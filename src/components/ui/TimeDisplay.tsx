import React, { useState, useEffect } from 'react';

const TimeDisplay: React.FC = () => {
    const [time, setTime] = useState<string>('');

    // Function to format time in hh:mm:ss AM/PM format
    const formatTime = (): string => {
        const now = new Date();
        let hours: number | string = now.getHours();
        const minutes: number | string = now.getMinutes();
        const seconds: number | string = now.getSeconds();
        let ampm: string = hours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour format to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        // Pad minutes and seconds with a leading zero if needed
        const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const strSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${hours}:${strMinutes}:${strSeconds} ${ampm}`;
    };

    useEffect(() => {
        // Update the time every second
        const timer = setInterval(() => {
            setTime(formatTime());
        }, 1000);

        // Clean up the timer on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2 className="text-xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent ">
                {time}
            </h2>
        </div>
    );
};

export default TimeDisplay;
