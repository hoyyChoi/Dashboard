import '../src/css/App.css';
import { useState } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';


function App() {

  const [auth,setAuth] = useState(false)

  const PrivateRoute = () =>{
    return auth ? <MainPage/> : <Navigate to="/login"/>
  }

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute/>}/>
        {/* <Route path="/login" element={<Login setAuth={setAuth}/>}/> */}
        <Route path="/login" element={<Login setAuth={setAuth}/>}/>
      </Routes>
    </div>
  );
}

export default App;
