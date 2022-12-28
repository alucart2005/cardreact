import React from 'react';

const User = ({ name, picture, iconEmail, email, iconPhone, phone, iconLocation, location }) => {
    return (
        <div className='card'>
            <div>
                <h1>{name}</h1>
                <img src={picture} alt={`picture ${name}`} />
            </div>
            <div>
                <h2>{iconEmail}{email}</h2>
                <h2>{iconPhone}{phone}</h2>
                <h2>{iconLocation}{location}</h2>
            </div>
        </div>
    );
};

export default User;