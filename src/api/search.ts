import api from "./base";

const RESOURCE = `/search`;

export const searchDataByQuery = async (body: any) => {
    const response = await api.post(`${RESOURCE}/`, body);
    return response.data;
}

export const downloadDataByQuery = async (body: any) => {
    const response = await api.post(`${RESOURCE}/download`, body);
    return response.data;
}

export const getDownloadProcess = async (hash: string) => {
    const response = await api.get(`${RESOURCE}/download/${hash}`);
    return response.data;
}