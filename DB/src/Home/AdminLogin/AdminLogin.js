import React,{useState,useContext,useEffect} from 'react';
import './AdminLogin.css';
import alv from '../../sources/alv.mp4';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const AdminLogin = () => {

  const style1={height:"250px",margin:"5px"};
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
      console.log(formData);
    
      // validate form data
      if(formData.username==="admin_mvgr" && formData.password==="admin_mvgr"){
        setIsAuthenticated(true);
      }else{
        window.alert("username or the password is wrong");
      }
    };

    if (isAuthenticated){
      navigate("/admin");
    }

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    
    return (
        <div class="mydiv m-auto p-4 shadow-lg m-5 bg-body">
    <h3 class="text-center p-2">Admin login </h3>
    <div class="d-flex flex-row">
      <video class="d-none d-md-block" src={alv} style={style1} autoplay="autoplay" muted="muted" loop="loop"></video>       
      <form class="d-flex flex-column p-2 ml-4 justify-content-md-center" onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} id="username" placeholder="username.."/>
        <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="password.."/>
        <button class="btn btn-primary w-100 mx-auto rounded-5 fs-5" type="submit" id="submit-button">Login</button>
      </form>
    </div>
  </div>
    );


}

export default AdminLogin;
