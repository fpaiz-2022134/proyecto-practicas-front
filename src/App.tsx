import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormCard from './components/FormCard';
import UsersCard from './components/UsersCard';  // Importa el componente al que quieres redirigir

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormCard />} />
                <Route path="/userscard" element={<UsersCard />} /> 
            </Routes>
        </Router>
    );
}

export default App;