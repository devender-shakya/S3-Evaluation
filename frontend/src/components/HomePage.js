import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            const response = await axios.get('http://localhost:5000/api/notices');
            setNotices(response.data);
        };
        fetchNotices();
    }, []);

    return (
        <div>
            {/* Display notices here */}
        </div>
    );
}

export default HomePage;
