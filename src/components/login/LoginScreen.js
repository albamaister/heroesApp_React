import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const navigate = useNavigate();


    const handleLogin = () => {
        navigate('/marvel', { replace: true })
    }

    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <button className='btn btn-primary' onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
