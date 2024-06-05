import { useApolloClient } from '@apollo/client';

const Logout = () => {
    const client = useApolloClient();

    const handleLogout = () => {
        localStorage.removeItem('token');
        client.resetStore();
        console.log('User logged out');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
