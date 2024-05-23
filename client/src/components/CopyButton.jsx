import React from 'react';

const CopyButton = ({ text }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert('Password copied to clipboard!');
    };

    return (
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
    );
};

export default CopyButton;
