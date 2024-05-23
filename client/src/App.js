import React from 'react';
import { Container } from 'react-bootstrap';
import PasswordGenerator from './components/PasswordGenerator';

const App = () => {
    return (
        <Container className="App">
            <h1>Random Password Generator</h1>
            <PasswordGenerator />
        </Container>
    );
};

export default App;
