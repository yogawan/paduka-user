import React, { useState } from 'react';
import axios from '../../utilities/axiosInstance';
import { useNavigate } from 'react-router-dom';

const LoginOrganisms = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setMessage(response.data.message);
            navigate('/home');
        } catch (error) {
            setMessage(error.response.data.error || 'An error occurred');
        }
    };

    return (
        <div>
            <h1 className="text-[64px] font-medium text-[#171717]">Login</h1>
            <form onSubmit={handleLogin} className='flex flex-col items-start'>
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
                    placeholder="yourpassword123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className='px-10 py-4 bg-[#171717] rounded-full text-white m-1' type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginOrganisms;