import axios from "axios";

const BASE_URL = "http://localhost:8888/datax/search";

export const searchDataByQuery = async (body: any) => {
    const response = await axios.post(`${BASE_URL}/`, body);
    return response.data;
}

export const downloadDataByQuery = async (body: any) => {
    const response = await axios.post(`${BASE_URL}/download`, body);
    return response.data;
}

export const getDownloadProcess = async (hash: string) => {
    const response = await axios.get(`${BASE_URL}/download/${hash}`);
    return response.data;
}