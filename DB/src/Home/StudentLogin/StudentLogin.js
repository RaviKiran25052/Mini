// StudentLogin.js
import React, { useContext, useEffect } from 'react';
import './StudentLogin.css';
import { AuthContext } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import slv from  '../../sources/alv.mp4';
import useFormData from './FormData';

function StudentLogin() {
    const style1={width:"280px",margin:"10px"};
    const navigate=useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  
    useEffect(() => {
      setIsAuthenticated(false);
    },[setIsAuthenticated]);

    const { formData, handleChange } = useFormData();
    const [userData, setUserData] = useState(null);
      const handleSubmit = (e) => {
        e.preventDefault();
      
        // validate form data
        Axios.get(`http://localhost:3001/users/find/${formData.username}`,{params:{password:formData.password}})
        .then(response => {
          console.log(response.data);
          setUserData(response.data["user"]);
          setIsAuthenticated(true);
        })
        .catch(error => {
          console.error(error);
          window.alert(error);
        });
      };
  
      if (isAuthenticated){
        navigate("/student" ,{ state: { userData:userData } });
      }
      
    
  return (
    <div className="mydiv m-auto p-4 shadow-lg m-5 bg-body">
      <h3 className="text-center">Student login </h3>
      <div className="d-flex flex-row">
        <video className="d-none d-md-block" src={slv} style={style1} autoPlay muted loop></video>
        <form className="d-flex flex-column p-2 justify-content-md-center" onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} id="username" placeholder="username.." />
          <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="password.." />
          <button className="btn btn-primary w-100 mx-auto rounded-5 fs-5" type="submit" id="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;