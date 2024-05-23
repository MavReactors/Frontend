import axios from 'axios';

export const updateUserPassword = async (password: string) => {
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
    const ourURL = `${BASE_API_URL}/user`;

    const response = await axios.put(ourURL, {
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        withCredentials: true
    });

    return response.data;
};