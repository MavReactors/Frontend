'use strict'

import UserData from "@/models/UserData.ts";

const API_URL = import.meta.env.VITE_BASE_API_URL

export const logIn = async (email: string, password: string) => {
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    const json = JSON.stringify({ email, password })

    try {
        const jsonResponse = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: headers,
            body: json,
            credentials: 'include'
        })

        return await jsonResponse.json()
    } catch (error) {
        console.error(error)
    }
}

export const signUp = async (userData: UserData) => {
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    const json = JSON.stringify({
        email: userData.email,
        password: userData.password,
        username: userData.username,
        profilePhoto: "",
        userRoles: [
            "CUSTOMER"
        ]
    })

    try {
        const jsonResponse = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: headers,
            body: json,
            credentials: 'include'
        })

        return await jsonResponse.json()
    } catch (error) {
        console.error(error)
    }
}
