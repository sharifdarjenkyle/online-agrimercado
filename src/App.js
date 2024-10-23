import React, { useEffect, useState } from 'react';

function App() {
    const [dbStatus, setDbStatus] = useState('Checking database connection...');

    useEffect(() => {
        fetch('https://online-agrimercado2-m2btbb4ht-sharifdarjenkyles-projects.vercel.app/api/status')
            .then((response) => response.json())
            .then((data) => {
                setDbStatus(data.message);
            })
            .catch((error) => {
                setDbStatus('Error connecting to the database.');
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Database Connection Status</h1>
            <p>{dbStatus}</p>
        </div>
    );
}

export default App;
