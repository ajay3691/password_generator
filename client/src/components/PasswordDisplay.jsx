import React from 'react';

const PasswordDisplay = ({ password }) => {
    return (
        <div>
            <h3>Generated Password</h3>
            <input type="text" value={password} readOnly />
        </div>
    );
};

export default PasswordDisplay;
