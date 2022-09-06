import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://194.31.55.220/4444',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;
});

export default instance;