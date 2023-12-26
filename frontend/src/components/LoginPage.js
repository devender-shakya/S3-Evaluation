import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/users/login', formData);
        localStorage.setItem('token', response.data.token);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form fields here */}
        </form>
    );
}

export default LoginPage;
