import React, { createContext, useContext } from "react";

// Define the shape of the user object
export interface User {
    id: number;
    username: string;
    email: string;
    [key: string]: any;
}

// Define the context value type
interface AuthContextType {
    user: User | undefined;
    isLoading: boolean;
    setUser: (user: User | undefined) => void;
}

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    isLoading: false,
    setUser: () => { },
});

// Hook to use the context
export const useAuthContext = (): AuthContextType => useContext(AuthContext);