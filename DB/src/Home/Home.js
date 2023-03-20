import './Home.css';
import alv from '../sources/alv.mp4';
import slv from '../sources/slv.mp4';
import flv from '../sources/flv.mp4';
import {Link,useNavigate} from 'react-router-dom';

function Home() {

   const style1={width:"85%",margin:"10px"};
   const style2={width:"90%",margin:"10px"};
   const style3={width:"100%",margin:"10px"};

   const navigate = useNavigate();

  return (
    <div >
      <nav className="navbar">
      <div className="container-fluid mx-md-5">
         <a className="navbar-brand">
            <img src="https://hosting.photobucket.com/images/i/sastaguvvu25/preloader_1.gif?width=320&height=320&fit=bounds" alt="MVGR" width="38px"/>
            <strong>MVGR</strong>
         </a>
         <div className="d-flex ms-auto">
         <h6><Link className="nav-link me3" to="/contact">Contact</Link></h6>
         <h6><Link className="nav-link" to="/about">About</Link></h6>
         </div>
      </div>
	</nav>
   <h1 className="text-light">WELCOME</h1>
   <div className="d-flex flex-sm-row justify-content-center flex-column align-items-center">
      <div className="card m-3">
         <div className="card-body d-flex flex-column justify-content-center">
            <h6 className="card-title">Student</h6>
            <video src={slv} style={style1} autoplay="autoplay" muted="muted" loop="loop"></video>
            <button className="btn btn-primary btn-sm" onClick={()=>navigate("/studentlogin")}>Login</button>
         </div>
      </div>
      <div className="card m-3">
         <div className="card-body d-flex flex-column justify-content-center">
            <h6 className="card-title">Faculty</h6>
            <video src={flv} style={style2} autoplay="autoplay" muted="muted" loop="loop"></video>
            <button className="btn btn-primary btn-sm" onClick={()=>navigate("/facultylogin")}>Login</button>
         </div>
      </div>
      <div className="card m-3">
         <div className="card-body d-flex flex-column justify-content-center">
            <h6 className="card-title">Admin</h6>
            <video src={alv} style={style3} autoplay="autoplay" muted="muted" loop="loop"></video>
            <button className="btn btn-primary btn-sm" onClick={()=>navigate("/adminlogin")}>Login</button>
         </div>
      </div>
   </div>    
   </div>  

  );
}

export default Home;
