import axios from "axios";

const mediflixAxios = axios.create({
    baseURL : 'http://3.130.52.15:8080/'
});


const postPageViews=({category,date})=>mediflixAxios.post('/pageViews',{category,date});


const postUv=({date})=>mediflixAxios.post('/uv',{date});


const getFunnels=()=>mediflixAxios.get('/userInfo/funnels');

const getDepartment=()=>mediflixAxios.get('/userInfo/department');

const getAge=()=>mediflixAxios.get('/userInfo/age');

const getRegion=()=>mediflixAxios.get('/userInfo/region');


//Login
const postLogin=({form})=>mediflixAxios.post('/login/form', {form});
const getLogin=()=>mediflixAxios.get('/login/form');

//


export {postPageViews,postUv,getFunnels,getDepartment,getAge,getRegion,postLogin,getLogin}