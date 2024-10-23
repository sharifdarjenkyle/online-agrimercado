import React, { useEffect, useState } from 'react';

function App() {
    const [dbStatus, setDbStatus] = useState('Checking database connection...');

    useEffect(() => {
        fetch('http://147.185.221.20:48289/api/status') 
        // fetch('http://localhost:5000/api/status')
            .then((response) => {
                console.log('Response:', response); // Log the response object
                if (!response.ok) {
                    throw new Error('Network response was not ok'); // Handle non-2xx responses
                }
                return response.json();
            })
            .then((data) => {
                setDbStatus(data.message); // Update state with the message from the API
            })
            .catch((error) => {
                console.error('Fetch error:', error); // Log any errors
                setDbStatus('Error connecting to the database.'); // Update state with error message
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
