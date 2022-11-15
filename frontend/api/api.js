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
export const fetchCategories = async()=>await api.get('/api/categories');
// all articles
export const fetchArticles = async()=> await api.get('/api/articles?populate=*');

// all sub categories of the article
export const subCategory = async(queryString)=> await api.get('/api/subcatergories?filters[article][slug][$eq]='.concat(queryString,'&populate=*'));

// all article of particular category
export const fetchArticlesWithCategory = async(queryString)=> await api.get('/api/articles?populate=*&filters[category][slug][$eq]='.concat(queryString));


//all fetch single article
export const getArticle = async(queryString)=> await api.get('http://localhost:1337/api/articles?populate=*&filters[slug][$eq]='.concat(queryString));
