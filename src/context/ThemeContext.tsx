import {createContext, useContext, useEffect, useState} from "react";


type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;

    toggleTheme: () => void;
};

const  ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "app-theme";

type ThemeProviderProps = {
    children: React.ReactNode;
};


const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme;
    return storedTheme || "light";
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem(STORAGE_KEY, newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    const contextValue: ThemeContextType = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
    }
    return ctx;

}