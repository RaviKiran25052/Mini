import React, { useContext, useEffect } from 'react';
import './Student.css';
import { AuthContext } from '../../../AuthContext';
import { useNavigate } from 'react-router-dom';
import "jquery-ui-dist/jquery-ui";
import { data } from "../StudentLogin";

const Student = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useContext(AuthContext);
	useEffect(() => {
	  if (!isAuthenticated) {
		 navigate("/studentlogin");
	  }
	}, [isAuthenticated, navigate]);
	console.log(data);
	const student = data["user"];
	console.log(student["regno"])
	return (
		 <div>
			<nav className="navbar shadow mb-5 p-3 bg-light">
			  <div className="container-fluid">
				 <a href="#" className="navbar-brand">
					<img src="https://1.bp.blogspot.com/-OGY53X-wmfs/VJDrLKFQ4vI/AAAAAAAAJc8/XpL2g8tZJwM/s1600/mvgr.PNG" alt="MVGR" width={50} />
					<b>MVGR</b>
				 </a>
				 <div className="dropdown d-sm-block d-md-none loginbtn">
					<img className="rounded-circle my-auto dropdown-toggle" src="https://divedigital.id/wp-content/uploads/2022/07/11-Blank-Profile-Picture-Black.jpg" alt="stdpic" width="50px" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-bs-haspopup="true" aria-bs-expanded="false" />
					<div className="dropdown-menu dropdown-menu-end shadow p-2 bg-white rounded" aria-labelledby="dropdownMenuLink">
					  <div className="d-flex flex-column credits p-2">
						 <div><span className="text-primary fw-bold">Reg.No:</span> {student["regno"]}</div>
						 <div><span className="text-primary fw-bold">Name:</span> {student['name']}</div>
						 <div><span className="text-primary fw-bold">Branch:</span> {student['branch']} 	<span className="text-primary fw-bold d-inline-block">Sem:</span>	III/IV I SEM</div>
						 <div className="d-flex flex-row mt-2">
							<button type="button" onclick="window.location.href='Partha/profile.html'" className="btn btn-primary btn-sm me-2">Profile</button>
							<button type="button" onclick="window.location.href='Partha/login.html'" className="btn btn-outline-primary btn-sm ms-2">Logout</button>
						 </div>
					  </div>
					</div>
				 </div>
				 <div className="login d-sm-none d-md-block d-none">
					<div className="d-flex flex-row">
					  <img src="https://divedigital.id/wp-content/uploads/2022/07/11-Blank-Profile-Picture-Black.jpg" alt="stdpic" width="50px" className="rounded-circle my-auto" />
					  <div className="d-flex flex-column ms-2 lh-1 credits">
						 <div className="p-1"><span className="text-primary fw-bold">Reg.No:</span> {student["regno"]}</div>
						 <div className="p-1"><span className="text-primary fw-bold">Name:</span> {student['name']}</div>
						 <div className="p-1"><span className="text-primary fw-bold">Branch:</span> {student['branch']} 	<span className="text-primary fw-bold">Sem:</span>	III/IV I SEM</div>
					  </div>
					  <div className="d-flex flex-row ms-2">
						 <button type="button" onclick="window.location.href='Partha/profile.html'" className="btn btn-primary btn-sm my-auto">Profile</button>
						 <button type="button" onclick="window.location.href='Partha/login.html'" className="btn btn-outline-primary btn-sm  my-auto mx-2">Logout</button>
					  </div>
					</div>
				 </div>
				 <div id="mySidepanel" className="sidepanel shadow mr-5 bg-light d-sm-block d-md-none">
					<a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
					<h3 className="ms-4">Certificates</h3>
					<a className="d-flex justify-content-between align-items-start" id="S1">
					  S1 : Journal Publication<span className="badge bg-primary rounded-pill">2</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S2">
					  S2 : Conference Publication<span className="badge bg-primary rounded-pill">1</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S3">
					  S3 : Internships<span className="badge bg-primary rounded-pill">13</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S4">
					  S4 : Certifications<span className="badge bg-primary rounded-pill">20</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S5">
					  S5 : Workshops attended<span className="badge bg-primary rounded-pill">4</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S6">
					  S6 : NPTEL<span className="badge bg-primary rounded-pill">5</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S7">
					  S7 : Workshops Organized<span className="badge bg-primary rounded-pill">0</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S8">
					  S8 : Events Organized<span className="badge bg-primary rounded-pill">6</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S9">
					  S9 : Guest Lecutres Organized<span className="badge bg-primary rounded-pill">1</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S10">
					  S10 : Prof. Body<span className="badge bg-primary rounded-pill">2</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S11">
					  S11 : Awards<span className="badge bg-primary rounded-pill">8</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S12">
					  S12 : capabilities enhancement<span className="badge bg-primary rounded-pill">0</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S13">
					  S13 : Higher Edu.<span className="badge bg-primary rounded-pill">4</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S14">
					  S14 : Competitive Exams<span className="badge bg-primary rounded-pill">10</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S15">
					  S15 : Industry Visit<span className="badge bg-primary rounded-pill">2</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S16">
					  S16 : Social Service Programs<span className="badge bg-primary rounded-pill">5</span>
					</a>
					<a className="d-flex justify-content-between align-items-start" id="S17">
					  S17 : Leadership &amp; Volunteering<span className="badge bg-primary rounded-pill">1</span>
					</a>
					<br /><br /><br /><br /><br /><br />
				 </div>
				 <button className="openbtn d-sm-block d-md-none" onclick="openNav()">☰</button>
			  </div>
			</nav>
			<div id="container" className="d-flex flex-row">
			  <ul id="index" className="d-none d-md-block list-group">
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S1">
					S1 : Journal Publication<span className="badge bg-primary rounded-pill">2</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S2">
					S2 : Conference Publication<span className="badge bg-primary rounded-pill">1</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S3">
					S3 : Internships<span className="badge bg-primary rounded-pill">13</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S4">
					S4 : Certifications<span className="badge bg-primary rounded-pill">20</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S5">
					S5 : Workshops attended<span className="badge bg-primary rounded-pill">4</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S6">
					S6 : NPTEL<span className="badge bg-primary rounded-pill">5</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S7">
					S7 : Workshops Organized<span className="badge bg-primary rounded-pill">0</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S8">
					S8 : Events Organized<span className="badge bg-primary rounded-pill">6</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S9">
					S9 : Guest Lecutres Organized<span className="badge bg-primary rounded-pill">1</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S10">
					S10 : Prof. Body<span className="badge bg-primary rounded-pill">2</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S11">
					S11 : Awards<span className="badge bg-primary rounded-pill">8</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S12">
					S12 : capabilities enhancement<span className="badge bg-primary rounded-pill">0</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S13">
					S13 : Higher Edu.<span className="badge bg-primary rounded-pill">4</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S14">
					S14 : Competitive Exams<span className="badge bg-primary rounded-pill">10</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S15">
					S15 : Industry Visit<span className="badge bg-primary rounded-pill">2</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S16">
					S16 : Social Service Programs<span className="badge bg-primary rounded-pill">5</span>
				 </li>
				 <li className="list-group-item d-flex justify-content-between align-items-start" id="S17">
					S17 : Leadership &amp; Volunteering<span className="badge bg-primary rounded-pill">1</span>
				 </li>
			  </ul>
			  <div className="float-end cards">
				 <h4 style={{padding: '0 0 20px 30px'}}><b>Achievements</b></h4>
				 <div id="ach" className="p-0">
					<div id="carouselExampleIndicators" className="carousel m-auto w-100 rounded-3 p-0" data-bs-ride="carousel">
					  <div className="carousel-indicators p-0">
						 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active bg-secondary" aria-current="true" aria-label="Slide 1" />
						 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="bg-secondary" aria-label="Slide 2" />
					  </div>
					  <div className="carousel-inner pb-4 p-0 rounded-3">
						 <div className="carousel-item active chart" data-bs-interval={4000}>
							<canvas id="pie" />
						 </div>
						 <div className="carousel-item chart" data-bs-interval={4000}>
							<canvas id="bar" />
						 </div>
					  </div>
					</div>
				 </div>
				 <h4 style={{padding: '40px 0 20px 30px'}}><b>Overall Performers</b></h4>
				 <div id="op" className="rounded-4">
					<div className="card text-center p-0 rounded-4 w-100 h-100">
					  <div className="card-header bg-primary pt-3">
						 <ul className="nav nav-tabs card-header-tabs" id="myTab">
							<li className="nav-item">
							  <a href="#first" className="nav-link active" data-bs-toggle="tab">1<sup> st</sup> Year</a>
							</li>
							<li className="nav-item">
							  <a href="#second" className="nav-link" data-bs-toggle="tab">2<sup> nd</sup> Year</a>
							</li>
							<li className="nav-item">
							  <a href="#third" className="nav-link" data-bs-toggle="tab">3<sup> rd</sup> Year</a>
							</li>
							<li className="nav-item">
							  <a href="#fourth" className="nav-link" data-bs-toggle="tab">4<sup> th</sup> Year</a>
							</li>
						 </ul>
					  </div>
					  <div className="card-body p-0 mb-0">
						 <div className="tab-content p-0">
							<div className="tab-pane fade show active p-0" id="first">
							  <ol className="list-group list-group-numbered list-group-flush">
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
							  </ol>
							</div>
							<div className="tab-pane fade p-0" id="second">
							  <ol className="list-group list-group-numbered list-group-flush">
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
							  </ol>
							</div>
							<div className="tab-pane fade p-0" id="third">
							  <ol className="list-group list-group-numbered list-group-flush">
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
							  </ol>
							</div>
							<div className="tab-pane fade p-0" id="fourth">
							  <ol className="list-group list-group-numbered list-group-flush">
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
								 <li className="list-group-item d-flex justify-content-between align-items-start ps-4 py-2">
									<div className="me-auto py-0 mb-1 text-start">
									  <b>Subheading</b><br />Department of CSE
									</div>
									<span className="badge bg-primary rounded-pill mt-3">14</span>
								 </li>
							  </ol>
							</div>
						 </div>
					  </div>
					</div>
				 </div>
				 <div id="certif"><h4><b>Certificates</b></h4>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, sapiente placeat excepturi suscipit iste veritatis. Consectetur soluta, sequi reprehenderit corrupti, minima minus atque natus animi ut nisi corporis impedit deserunt.</p>
					<form action method="post" className="w-auto p-1">
					  <div className="mb-1">
						 <label htmlFor="formFile" className="form-label">Upload Excel</label>
						 <input className="form-control form-control-sm w-75 h-50" type="file" id="formFile" />
					  </div>
					</form>  
				 </div>
				 <div id="proj"><h4><b>Projects</b></h4>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, sapiente placeat excepturi suscipit iste veritatis. Consectetur soluta, sequi reprehenderit corrupti, minima minus atque natus animi ut nisi corporis impedit deserunt.</p></div>
				 <div id="hoby"><h4><b>Hobbies</b></h4>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, sapiente placeat excepturi suscipit iste veritatis. Consectetur soluta, sequi reprehenderit corrupti, minima minus atque natus animi ut nisi corporis impedit deserunt.</p></div>
			  </div>
			</div>
			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			<script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
			<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.bundle.min.js'></script>
		 </div>
	);
}
	
export default Student;