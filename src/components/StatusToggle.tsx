import React, { useState } from 'react';

const StatusToggle = () => {
    const [status, setStatus] = useState<string>('Online');  // Initial state set to 'Offline'

    const toggleStatus = () => {
        setStatus(prevStatus => (prevStatus === 'Online' ? 'offline' : 'Online'));  // Toggle between 'Online' and 'Offline'
    };

    return (
        <div onClick={toggleStatus} className="cursor-pointer relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text  text-transparent">
            {status}
        </div>
    );
};

export default StatusToggle;
