import { createContext } from 'react';
import { AuthContextType } from './AuthUtils';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;