import axios from "axios";

const mediflixAxios = axios.create({
    baseURL : 'https://api.kusitms27-dashboard.site/'
});

//Login
const postLoginUser=({username,password})=>mediflixAxios.post('/login/form',{username,password});

const getProfile=(token)=>mediflixAxios.put('/userinfo',{headers:{authorization:`Bearer ${token}`}});

// userTraffic
const postPageViews=({category,date})=>mediflixAxios.post('/pageViews',{category,date});

const postUv=({date})=>mediflixAxios.post('/uv',{date});


// userInfo
const getFunnels=()=>mediflixAxios.get('/userInfo/funnels');

const getDepartment=()=>mediflixAxios.get('/userInfo/department');

const getAge=()=>mediflixAxios.get('/userInfo/age');

const getRegion=()=>mediflixAxios.get('/userInfo/region');

//video
const getTopdepartment=()=>mediflixAxios.get('/videos/topdepartment');

const getTopdisease=()=>mediflixAxios.get('/videos/topdisease');

const getNonmedical=()=>mediflixAxios.get('/videos/topnonmedical');

const getTopthree=()=>mediflixAxios.get('/videos/top3');




//video live
const getLiveTopdepartment=()=>mediflixAxios.get('/lives/topdepartment');

const getLiveTopdisease=()=>mediflixAxios.get('/lives/topdisease');

const getLiveTopthree=()=>mediflixAxios.get('/lives/top3');

//upload
const getUpload=()=>mediflixAxios.get('/upload');

//
const getrealtime=()=>mediflixAxios.get('/lives/realtime');


export {postLoginUser,postPageViews,postUv,getFunnels,getDepartment,getAge,getRegion,getUpload,getTopdepartment,getTopdisease,getNonmedical,getLiveTopdepartment,getLiveTopdisease,getrealtime,getTopthree,getLiveTopthree}
