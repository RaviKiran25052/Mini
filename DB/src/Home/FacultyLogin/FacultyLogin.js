import React from 'react';
import './FacultyLogin.css';
import flv from '../../sources/flv.mp4';

const FacultyLogin = () => {

    const style1={width:"240px",margin:'10px'};

    return (
        <div class="mydiv m-auto p-4 shadow-lg m-5 bg-body">
    <h3 class="text-center">Faculty login </h3>
    <div class="d-flex flex-row">
      <video class="d-none d-md-block" src={flv} style={style1} autoplay="autoplay" muted="muted" loop="loop"></video>       
      <form class="d-flex flex-column p-2 justify-content-md-center">
        <input type="text" name="UN" placeholder="username.."/>
        <input type="password" name="PW" placeholder="password.."/>
        <button class="btn btn-primary w-100 mx-auto rounded-5 fs-5" onclick="location.href=''">Login</button>
      </form>
    </div>
  </div>
    );
}

export default FacultyLogin;
