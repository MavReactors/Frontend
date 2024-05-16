'use strict';

import ClotheItemData from "@/models/ClotheItemData.ts";

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

export const getClotheItems = async () => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'Application/json')

    const ourURL: string = `${BASE_API_URL}/api/customer/prenda`;

    const response = await fetch(ourURL, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
    });

    return await response.json();
};

export const createClotheItem = async (clotheItemData: ClotheItemData) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'Application/json')

    const ourURL: string = `${BASE_API_URL}/api/customer/prenda`;

    const jsonBody = JSON.stringify(clotheItemData)

    const response = await fetch(ourURL, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: jsonBody
    })

    return await response.json();
}

export const getClotheItemById = async (id: string) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'Application/json')

    const ourURL: string = `${BASE_API_URL}/api/customer/prenda/${id}`;

    const response = await fetch(ourURL, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
    })

    return await response.json()
}

export const updateClotheItem = async (id: string, clotheItemData: ClotheItemData) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'Application/json')

    const ourURL: string = `${BASE_API_URL}/api/customer/prenda/${id}`;

    const jsonBody = JSON.stringify(clotheItemData)

    const response = await fetch(ourURL, {
        method: 'PUT',
        headers: headers,
        credentials: 'include',
        body: jsonBody
    })

    return await response.json()
}

export const deletePrenda = async (id: string) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'Application/json')

    const ourURL: string = `${BASE_API_URL}/api/customer/prenda/${id}`;

    const response = await fetch(ourURL, {
        method: 'DELETE',
        headers: headers,
        credentials: 'include'
    })

    return await response.json()
}