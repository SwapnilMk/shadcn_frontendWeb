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
    sendOtp: (email: string) => Promise<void>;
    verifyOtp: (email: string, otp: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

interface RegistrationData {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    age: string;
    addressLine1: string;
    addressLine2: string;
    cityOrVillage: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
    qualification: string;
    profession: string;
    position: string;
    aadhaarNumber: string;
    voterId: string;
    aadhaarCard: File | null;
    voterCard: File | null;
    password: string;
    referralCode: string,
}

interface LoginCredentials {
    email: string;
    password: string;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    login: async () => { },
    register: async () => { },
    sendOtp: async () => { },
    verifyOtp: async () => { },
    logout: () => { },
    loading: false,
});

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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

    // Register method
    const register = async (registrationData: RegistrationData) => {
        try {
            setLoading(true);
            const { ...payload } = registrationData;
            const response = await postData("members", payload);
            console.log("Registration successful!");
            toast.success("Registration successful!", response);
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("Registration failed");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    

    // Send OTP method
    const sendOtp = async (email: string) => {
        try {
            setLoading(true);
            const response = await postData("/send-otp", { email });
            toast.success("OTP sent successfully!");
            console.log("OTP sent successfully!", response);
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error("Failed to send OTP");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP method
    const verifyOtp = async (email: string, otp: string) => {
        try {
            setLoading(true);
            const response = await postData("/validate-otp", { email, otp });
            toast.success("OTP verified successfully!");
            console.log("OTP verified successfully!", response);
        } catch (error) {
            console.error("Error verifying OTP:", error);
            toast.error("Failed to verify OTP");
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
            // You can add token verification logic here
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                register,
                sendOtp,
                verifyOtp,
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
