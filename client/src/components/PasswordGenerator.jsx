import React, { useState, useEffect } from 'react';
import PasswordDisplay from './PasswordDisplay';
import CopyButton from './CopyButton';
import PreviousPasswords from './PreviousPasswords';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeLetters, setIncludeLetters] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [password, setPassword] = useState('');
    const [previousPasswords, setPreviousPasswords] = useState([]);

    useEffect(() => {
        const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
        setPreviousPasswords(storedPasswords);
    }, []);

    const generatePassword = () => {
        const numbers = '0123456789';
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characters = '';
        if (includeNumbers) characters += numbers;
        if (includeLetters) characters += letters;
        if (includeSpecialChars) characters += specialChars;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters[randomIndex];
        }
        setPassword(newPassword);
        const updatedPasswords = [newPassword, ...previousPasswords].slice(0, 5);
        setPreviousPasswords(updatedPasswords);
        localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
    };

    return (
        <div className="password-generator">
            <div>
                <label>Length:
                    <input
                        type="number"
                        value={length}
                        onChange={e => setLength(Number(e.target.value))}
                        min="1"
                    />
                </label>
            </div>
            <div>
                <label>Include Numbers:
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={e => setIncludeNumbers(e.target.checked)}
                    />
                </label>
            </div>
            <div>
                <label>Include Letters:
                    <input
                        type="checkbox"
                        checked={includeLetters}
                        onChange={e => setIncludeLetters(e.target.checked)}
                    />
                </label>
            </div>
            <div>
                <label>Include Special Characters:
                    <input
                        type="checkbox"
                        checked={includeSpecialChars}
                        onChange={e => setIncludeSpecialChars(e.target.checked)}
                    />
                </label>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
            <PasswordDisplay password={password} />
            <CopyButton text={password} />
            <PreviousPasswords passwords={previousPasswords} />
        </div>
    );
};

export default PasswordGenerator;
