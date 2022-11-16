import axios from 'axios';
const auth= 'Bearer '.concat(process.env.BACKEND_API_KEY)
const api = axios.create({
    baseURL:process.env.API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers:{
        Authorization:'Bearer '+process.env.BACKEND_API_KEY,
    }
});


//add new subscriber
export const postSubscriber = async(queryString)=> api.post("http://localhost:1337/api/subscribers",{queryString});