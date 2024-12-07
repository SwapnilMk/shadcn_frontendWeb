import { postData } from "@/api/apiClient";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "sonner";

interface User {
    username?: string;
    email?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    register: (registrationData: RegistrationData) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

interface RegistrationData {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    addressLine1: string;
    addressLine2?: string;
    cityOrVillage: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
    username: string;
    password: string;
    aadharCard: string;
    voterId: string;
    pin: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    login: async () => {},
    register: async () => {},
    logout: () => {},
    loading: false,
});

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    // Login method
    const login = async (credentials: LoginCredentials) => {
        try {
            setLoading(true);
            const response = await postData("auth/login", credentials);
            localStorage.setItem("token", response.token);
            setUser({
                username: response.username,
                email: response.email,
            });
            console.log("Login successful!");
        } catch (error) {
            console.error("Login error:", error);
            console.log("Login failed. Please check your credentials.");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Register method (updated to use /members endpoint)
    const register = async (registrationData: RegistrationData) => {
        try {
            setLoading(true);
            const { ...payload } = registrationData;

            // Updated endpoint for members registration
            const response = await postData("members", payload);
            console.log(response);
            console.log("Registration successful!");
            toast.success("Registration successful!");
        } catch (error) {
            console.error("Registration error:", error);
            if (error instanceof Error && "response" in error) {
                const serverError = error as {
                    response?: { data?: { message: string } };
                };
                const errorMessage =
                    serverError.response?.data?.message || "Registration failed";
                console.log("Registration error:", errorMessage);
                toast.error(errorMessage);
            } else {
                console.error("An unexpected error occurred");
                toast.error("An unexpected error occurred");
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Logout method
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        console.log("Logged out successfully");
    };

    // Check authentication on initial load
    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // Verify token with backend or set a default user
            // You might want to add a token verification API call here
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                register,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
