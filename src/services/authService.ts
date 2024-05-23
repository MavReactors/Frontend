'use strict'

import axios from 'axios';
import UserData from "@/models/UserData.ts";
// import UserData from "@/models/UserData.ts";

const API_URL = import.meta.env.VITE_BASE_API_URL;

export const logIn = async (email: string, password: string) => {
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

export const signUp = async (userData: UserData) => {
    try {
        const response = await axios.post(`${API_URL}/SignIn`, userData, {
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
