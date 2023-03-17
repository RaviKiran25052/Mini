import React from 'react';
import './StudentLogin.css';
import slv from '../../sources/slv.mp4';

function StudentLogin() {

    const style1={width:"280px",margin:"10px"};

    return (
    <div className="mydiv m-auto p-4 shadow-lg m-5 bg-body">
    <h3 className="text-center">Student login </h3>
    <div className="d-flex flex-row">
      <video className="d-none d-md-block" src={slv} style={style1} autoplay="autoplay" muted="muted" loop="loop"></video>       
      <form className="d-flex flex-column p-2 justify-content-md-center">
        <input type="text" name="UN" placeholder="username.."/>
        <input type="password" name="PW" placeholder="password.."/>
        <button className="btn btn-primary w-100 mx-auto rounded-5 fs-5">Login</button>
      </form>
    </div>
    </div>
    );
}

export default StudentLogin;
