import { useState } from 'react';

export interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

export const useAuthContext = (): AuthContextType => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return {
        isLoggedIn,
        login,
        logout,
    };
};
