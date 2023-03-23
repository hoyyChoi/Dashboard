import axios from "axios";

const mediflixAxios = axios.create({
    baseURL : 'http://3.130.52.15:8080/'
});


const postPageViews=({category,date})=>mediflixAxios.post('/pageViews',{category,date});


const postUv=({date})=>mediflixAxios.post('/uv',{date});

export {postPageViews,postUv}