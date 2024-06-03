import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserCreate from './components/UserCreate';
import Login from './components/Login';
import Logout from './components/Logout';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <Routes>
          <Route path="/create" element={<UserCreate/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
