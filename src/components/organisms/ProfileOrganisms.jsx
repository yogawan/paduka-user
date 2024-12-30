import React, { useEffect, useState } from 'react';
import axios from '../../utilities/axiosInstance';
import { useNavigate } from 'react-router-dom';

const ProfileOrganisms = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchUsername = async () => {
        try {
            const response = await axios.get('/user/username');
            setUsername(response.data.username);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to fetch username.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    useEffect(() => {
        fetchUsername();
    }, []);

    return (
        <div className='mt-24 m-5'>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div>
                    <p className='text-[44px] font-thin'><strong>Hallo, </strong> {username}</p>
                    <button className='p-5 bg-red-500 text-white rounded-xl' onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default ProfileOrganisms;
