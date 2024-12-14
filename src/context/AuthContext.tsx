import { postData } from "@/api/apiClient";
import Cookies from 'js-cookie';
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
    verifyOtp: (email: string, otpNumber: string) => Promise<void>;
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
    referralCode: string;
}

interface LoginCredentials {
    email: string;
    password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(
        Cookies.get('userDetails') ? JSON.parse(Cookies.get('userDetails') || '{}') : null
    );
    const [loading, setLoading] = useState(false);

    // Login method
    const login = async (credentials: LoginCredentials) => {
        try {
            setLoading(true);
            const response = await postData("/login", credentials);
            Cookies.set('authToken', response.token, { expires: 4 });
            setUser({ username: response.username, email: response.email });
            toast.success("Login successful!");
        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Register method
    const register = async (registrationData: RegistrationData) => {
        try {
            setLoading(true);
            
            // Create FormData object
            const formData = new FormData();
            
            // Iterate through all keys in registrationData
            (Object.keys(registrationData) as Array<keyof RegistrationData>).forEach(key => {
                const value = registrationData[key];
                
                // Special handling for File objects
                if (value instanceof File) {
                    formData.append(key, value, value.name);
                } 
                // For other primitive types
                else if (value !== null && value !== undefined) {
                    formData.append(key, String(value));
                }
            });
    
            // Update postData to handle FormData
            const response = await postData("/signup", formData);
            toast.success("Registration successful!", response);
        } catch (error) {
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
            await postData("/send-otp", { email });
            toast.success("OTP sent successfully!");
        } catch (error) {
            toast.error("Failed to send OTP");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP method
    const verifyOtp = async (email: string, otpNumber: string) => {
        try {
            setLoading(true);
            const response = await postData("/validate-otp", { email, otpNumber });
            Cookies.set('authToken', response.token, { expires: 4 });
            toast.success("OTP verified successfully!");
        } catch (error) {
            toast.error("Failed to verify OTP");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Logout method
    const logout = () => {
        Cookies.remove('authToken');
        setUser(null);
        toast.success("Logged out successfully");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!Cookies.get('authToken'),
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

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
