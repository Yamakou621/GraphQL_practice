import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserCreate from './components/Signup/Signup';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import ResponsiveAppBar from './components/MenuBar/RespnsiveAppBar';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/create" element={<UserCreate/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

