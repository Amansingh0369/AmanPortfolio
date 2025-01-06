import { useEffect, useState } from 'react';

export const StatusToggle = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.lanyard.rest/v1/users/835418426528104459')
            .then((response) => response.json())
            .then((data) => {
                setUserData(data.data);
                setIsLoading(false);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Ensure userData is available before destructuring
    if (isLoading || !userData) {
        return <div>Loading...</div>;
    }

    const {  discord_status } = userData;
    const status = discord_status;
    return (
        <div className="cursor-pointer relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            {status === 'online' ? 'Online' : status === 'idle' ? 'Idle' : 'Offline'}
        </div>
    );
};

export default StatusToggle;
