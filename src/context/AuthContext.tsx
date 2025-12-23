import React, { createContext, useContext, useState } from "react";

export type User = { name: string };
type AuthContextType = {
    user: User | null;
    login: (name: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "app-user";

type AuthProviderProps = {
    children: React.ReactNode;
};

const getInitialUser = (): User | null => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    try {
        return storedUser ? JSON.parse(storedUser) : null;
    } catch {
        return null;
    }
};

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(getInitialUser);

    const login = (name: string) => {
        const newUser: User = { name };
        setUser(newUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        // Eliminar de localStorage
        localStorage.removeItem(STORAGE_KEY);
    };

    const contextValue: AuthContextType = {
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth debe usarse dentro de <AuthProvider>");
    }
    return ctx;
}