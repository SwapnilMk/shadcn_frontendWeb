import axios from 'axios';

const API_URL = 'http://ec2-13-232-238-37.ap-south-1.compute.amazonaws.com:8080/api/v1/';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getData = async (endpoint: string) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};

export const postData = async (endpoint: string, data: any) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to post data');
    }
};
