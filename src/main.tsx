import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// Importa tus nuevos Providers
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <LanguageProvider>
                <ThemeProvider>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </LanguageProvider>
        </AuthProvider>
    </React.StrictMode>
);