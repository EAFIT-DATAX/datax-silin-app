import api from "./base";

const RESOURCE = `/auth`;

export const login = async (email: string, password: string) => {
    const response = await api.post(`${RESOURCE}/login`, { email, password });
    return response;
}

