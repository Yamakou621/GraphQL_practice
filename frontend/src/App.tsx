import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './components/Auth/useAuth';
import { AuthProvider } from './components/Auth/AuthProvider';
import UserCreate from './components/Signup/Signup';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import ResponsiveAppBar from './components/MenuBar/RespnsiveAppBar'; 

const PrivateRoute = ({ element: Element }: { element: React.FC }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Element /> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<UserCreate />} />
          <Route path="/home" element={<PrivateRoute element={Home} />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/" />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
