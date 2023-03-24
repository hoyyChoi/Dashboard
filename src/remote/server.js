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





//upload
const getUpload=()=>mediflixAxios.get('/upload');


//video
const getLive=()=>mediflixAxios.get('/live');
const getrealtime=()=>mediflixAxios.get('/lives/realtime');
const getliveTop3=()=>mediflixAxios.get('/lives/top3');
const getLivetopDepartment=()=>mediflixAxios.get('/lives/topdepartment');
const getLivetopDisease=()=>mediflixAxios.get('/lives/topdisease');
const getvideoTop3=()=>mediflixAxios.get('/videos/top3');
const getVideoTopdepartment=()=>mediflixAxios.get('/videos/topdepartment');
const getVideoTopDisease=()=>mediflixAxios.get('/videos/topdisease');
const getTopnonMedical=()=>mediflixAxios.get('/videos/topnonmedical');


export {postPageViews,postUv,getFunnels,getDepartment,getAge,getRegion,getUpload, getLive, getrealtime, getliveTop3, getLivetopDepartment, getLivetopDisease, getvideoTop3, getVideoTopdepartment, getVideoTopDisease,getTopnonMedical}