import axios from 'axios';

const BASE_URL = 'https://huboem.dev/api/v1/sessions';

// Function to get the token from local storage
export const getToken = () => localStorage.getItem('authToken');

// Function to set the token to local storage
export const setToken = (token) => localStorage.setItem('authToken', token);

// Function to remove the token from local storage
export const removeToken = () => localStorage.removeItem('authToken');

// Create session function
export const createSession = async (credentials) => {
    try {
        const response = await axios.post(BASE_URL, credentials);
        // Set token to local storage
        setToken(response.data.auth_token);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

// Delete session function
export const deleteSession = async () => {
    try {
        const token = getToken();
        // Include the token in the request header
        await axios.delete(BASE_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // Remove token from local storage
        removeToken();
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
