import React,{useState,useContext,useEffect} from 'react';
import './StudentLogin.css';
import Axios from 'axios';
import slv from '../../sources/slv.mp4';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
export let data;

function StudentLogin() {
    const style1={width:"280px",margin:"10px"};
    const navigate=useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  
    useEffect(() => {
      setIsAuthenticated(false);
    },[setIsAuthenticated]);
  
      const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
  
      const handleSubmit = (e) => {
        e.preventDefault();
      
        // validate form data
        Axios.get(`http://localhost:3001/users/find/${formData.username}`,{params:{password:formData.password}})
        .then(response => {
          console.log(response.data);
          setIsAuthenticated(true);
          data = response.data;
        })
        .catch(error => {
          console.error(error);
          window.alert(error);
        });
      };
  
      if (isAuthenticated){
        navigate("/student");
      }
  
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      
    return (
    <div className="mydiv m-auto p-4 shadow-lg m-5 bg-body">
    <h3 className="text-center">Student login </h3>
    <div className="d-flex flex-row">
      <video className="d-none d-md-block" src={slv} style={style1} autoplay="autoplay" muted="muted" loop="loop"></video>       
      <form className="d-flex flex-column p-2 justify-content-md-center" onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} id="username" placeholder="username.."/>
        <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="password.."/>
        <button className="btn btn-primary w-100 mx-auto rounded-5 fs-5" type="submit" id="submit-button">Login</button>
      </form>
    </div>
    </div>
    );
}

export default StudentLogin;