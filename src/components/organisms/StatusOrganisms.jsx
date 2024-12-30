import React, { useEffect, useState } from 'react';
import axios from '../../utilities/axiosInstance';

const Status = () => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState('');
    
    const fetchUserData = async () => {
        try {
            const response = await axios.get('/userdata'); // Panggil endpoint
            setUserData(response.data); // Simpan data ke state
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to fetch user data.');
        }
    };
    
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className='mt-24'>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div>
                    {userData.length > 0 ? (
                        
                        <div className='flex justify-center'>
                              {userData.map((data) => (
                                    <div className='p-5 w-[400px] bg-[#F9F9F9] rounded-[24px]' key={data.id}>
                                        <p className='text-[12px] font-thin p-3 border border-[#17171715] w-fit rounded-full'>{data.Nik}</p>
                                        <p className='text-[24px] font-thin'>{data.Nama_Lengkap}</p>
                                        <p className='mt-3 text-[16px] font-thin p-5 border border-[#17171715] w-fit rounded-xl bg-yellow-200'>{data.Status}</p>
                                        <p className='mt-3 text-[12px] font-thin'>{data.created_at}</p>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Status;