'use strict';

import axios from 'axios';
import ClotheItemData from "@/models/ClotheItemData.ts";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const getClotheItems = async () => {
    const ourURL = `${BASE_API_URL}/customer/prenda`;

    const response = await axios.get(ourURL, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    return response.data;
};

export const createClotheItem = async (clotheItemData: ClotheItemData) => {
    const ourURL = `${BASE_API_URL}/customer/prenda`;

    const response = await axios.post(ourURL, clotheItemData, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    return response.data;
};

export const getClotheItemById = async (id: string) => {
    const ourURL = `${BASE_API_URL}/api/customer/prenda/${id}`;

    const response = await axios.get(ourURL, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    return response.data;
};

export const updateClotheItem = async (id: string, clotheItemData: ClotheItemData) => {
    const ourURL = `${BASE_API_URL}/api/customer/prenda/${id}`;

    const response = await axios.put(ourURL, clotheItemData, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    return response.data;
};

export const deletePrenda = async (id: string) => {
    const ourURL = `${BASE_API_URL}/api/customer/prenda/${id}`;

    const response = await axios.delete(ourURL, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    return response.data;
};
