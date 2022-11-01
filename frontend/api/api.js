import axios from 'axios';

const api = axios.create({
    baseURL:process.env.API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers:{
        Authorization:'Bearer '+process.env.BACKEND_API_KEY,
    }
});
// all categories
export const fetchCategories = async()=> api.get('/api/categories');
// all articles
export const fetchArticles = async()=> api.get('/api/articles');
