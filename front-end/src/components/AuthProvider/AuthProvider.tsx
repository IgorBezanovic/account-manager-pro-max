import React, { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "../../context/AuthContext";
import { API, BEARER } from "../../constant";
import { getToken } from "../../helpers";

interface User {
    id: number;
    username: string;
    email: string;
    [key: string]: any;
}

interface AuthContextType {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<User | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const authToken = getToken();

    const fetchLoggedInUser = async (token: string): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API}/users/me`, {
                headers: { Authorization: `${BEARER} ${token}` },
            });
            const data: User = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Error fetching logged-in user:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUser = (user: User | undefined): void => {
        setUserData(user);
    };

    useEffect(() => {
        if (authToken) {
            fetchLoggedInUser(authToken);
        }
    }, [authToken]);

    const contextValue: AuthContextType = {
        user: userData,
        setUser: handleUser,
        isLoading,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;