import axios from "axios";

import { BASE_URL } from "./base";

const URL = `${BASE_URL}/auth`;

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${URL}/login`, { email, password });
    return response;
}

export const refreshToken = async (refreshToken: string) => {
    const response = await axios.post(`${URL}/refresh`, { 'refresh_token': refreshToken });
    return response.data;
}
