import axios from "axios";

const mediflixAxios = axios.create({
    baseURL : 'http://3.130.52.15:8080/'
});


const getPageViews=({category,date})=>mediflixAxios.post('/pageViews',{category,date});


const getUv=({date})=>mediflixAxios.post('/uv',{date});

export {getPageViews,getUv}