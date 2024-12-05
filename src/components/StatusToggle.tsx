import React, { useState } from 'react';

const StatusToggle = () => {
    const [status, setStatus] = useState<string>('online 🟢');  // Initial state set to 'Offline'

    const toggleStatus = () => {
        setStatus(prevStatus => (prevStatus === 'Online' ? 'offline' : 'Online'));  // Toggle between 'Online' and 'Offline'
    };

    return (
        <div onClick={toggleStatus} className="cursor-pointer">
            {status}
        </div>
    );
};

export default StatusToggle;
