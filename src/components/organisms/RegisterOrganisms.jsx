import React, { useState } from 'react';
import axios from '../../utilities/axiosInstance'
import { useNavigate } from 'react-router-dom';

const RegisterOrganisms = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', { username, password });
            setMessage(response.data.message);
            navigate('/login'); // Arahkan ke halaman login setelah registrasi
        } catch (error) {
            setMessage(error.response.data.error || 'An error occurred');
        }
    };

    return (
        <div>
            <h1 className="text-[64px] font-medium text-[#171717]">Register</h1>
            <form onSubmit={handleRegister} className='flex flex-col items-start'>
                <label htmlFor="username" className='text-[#17171795] pl-6'>Username</label>
                <input
                    className='px-5 py-2 m-1 rounded-full border border-[#17171725]'
                    type="text"
                    placeholder="contoh@gmail.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password" className='text-[#17171795] pl-6'>Password</label>
                <input
                    className='px-5 py-2 m-1 rounded-full border border-[#17171725]'
                    type="password"
                    placeholder="contoh123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="password" className='text-[#17171795] pl-6'>Ulangi Password</label>
                <input
                    className='px-5 py-2 m-1 rounded-full border border-[#17171725]'
                    type="password"
                    placeholder="contoh123"
                    required
                />
                <button className='px-10 py-4 bg-[#171717] rounded-full text-white m-1' type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterOrganisms;
