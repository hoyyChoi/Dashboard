import axios from "axios";

const mediflixAxios = axios.create({
    baseURL : 'http://3.130.52.15:8080/'
});

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

//video live
const getLiveTopdepartment=()=>mediflixAxios.get('/lives/topdepartment');

const getLiveTopdisease=()=>mediflixAxios.get('/lives/topdisease');


//upload
const getUpload=()=>mediflixAxios.get('/upload');

//
const getrealtime=()=>mediflixAxios.get('/lives/realtime');


export {postPageViews,postUv,getFunnels,getDepartment,getAge,getRegion,getUpload,getTopdepartment,getTopdisease,getNonmedical,getLiveTopdepartment,getLiveTopdisease,getrealtime}