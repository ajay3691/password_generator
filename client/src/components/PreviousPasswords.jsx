import React from 'react';

const PreviousPasswords = ({ passwords }) => {
    return (
        <div>
            <h3>Previous Passwords</h3>
            <ul>
                {passwords.map((password, index) => (
                    <li key={index}>{password}</li>
                ))}
            </ul>
        </div>
    );
};

export default PreviousPasswords;
