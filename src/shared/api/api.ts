import axios from 'axios';


export const $api = axios.create({
    baseURL: 'http://localhost:8000',
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        // TODO
        config.headers.Authorization = '123' || '';
    }
    return config;
});
