'use strict'

import axios from 'axios';
// import UserData from "@/models/UserData.ts";

const API_URL = import.meta.env.VITE_BASE_API_URL;

export const logIn = async (email, password) => {
    const json = { email, password };

    try {
        const response = await axios.post(`${API_URL}/login`, json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const signUp = async (userData) => {
    const json = userData;

    try {
        const response = await axios.post(`${API_URL}/SignIn`, json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
