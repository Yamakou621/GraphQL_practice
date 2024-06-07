import React, { ReactNode } from 'react';
import { useAuthContext } from './AuthUtils';
import AuthContext from './AuthContext';


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useAuthContext();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};