import React from 'react'

export const LoginScreen = ({history}) => {


    const handleLogin = () => {
        history.replace('/');
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
