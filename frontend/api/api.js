import axios from 'axios';

const api = axios.create({
    baseURL:process.env.API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers:{
        Authorization:'Bearer '+process.env.BACKEND_API_KEY,
    }
});

export const fetchCategories = async()=> api.get('/api/categories');
