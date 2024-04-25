import axios from "axios";

import { BASE_URL } from "./base";

const URL = `${BASE_URL}/search`;

export const searchDataByQuery = async (body: any) => {
    const response = await axios.post(`${URL}/`, body);
    return response.data;
}

export const downloadDataByQuery = async (body: any) => {
    const response = await axios.post(`${URL}/download`, body);
    return response.data;
}

export const getDownloadProcess = async (hash: string) => {
    const response = await axios.get(`${URL}/download/${hash}`);
    return response.data;
}