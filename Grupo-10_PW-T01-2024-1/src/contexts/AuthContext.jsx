import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../services/firebaseConnection';
import useUserName from '../hooks/useUserName.jsx';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Retrieve the user from local storage if available
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const userName = useUserName(); // Use the custom hook to get the user's name

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // Save user to local storage
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                // Remove user from local storage on logout
                localStorage.removeItem('user');
            }
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const logout = () => {
        auth.signOut().then(() => {
            setUser(null);
            localStorage.removeItem('user');
        });
    };

    return (
        <AuthContext.Provider value={{ user, userName, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
