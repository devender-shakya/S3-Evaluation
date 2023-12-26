import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', phoneNumber: '', department: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/users/register', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form fields here */}
        </form>
    );
}

export default SignupPage;
