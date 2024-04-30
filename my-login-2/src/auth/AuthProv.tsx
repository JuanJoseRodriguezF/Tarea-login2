import { useContext, createContext, useState, useEffect } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void; // Función para cambiar el estado de autenticación
    logout: () => void; // Función para cerrar sesión
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => {}, // Placeholder para la función setIsAuthenticated
    logout: () => {} // Placeholder para la función logout
});
  
export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        // Al iniciar, verifica si hay un estado de autenticación guardado en localStorage
        const storedAuth = localStorage.getItem("isAuthenticated");
        return storedAuth ? JSON.parse(storedAuth) : false;
    });

    useEffect(() => {
        // Al cambiar el estado de autenticación, actualiza el localStorage
        localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const handleSetIsAuthenticated = (value: boolean) => {
        setIsAuthenticated(value);
    };

    const logout = () => {
        setIsAuthenticated(false); // Cierra la sesión
        localStorage.removeItem("isAuthenticated"); // Elimina el estado de autenticación del localStorage
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated: handleSetIsAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);