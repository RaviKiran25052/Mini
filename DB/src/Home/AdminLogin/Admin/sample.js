<div>
<nav className="navbar shadow bg-light">
<div className="container-fluid">
  <a href="#" className="navbar-brand">
    <img src="https://hosting.photobucket.com/images/i/sastaguvvu25/preloader_1.gif?width=320&height=320&fit=bounds" alt="MVGR" width="50" height="50"/>
    <b>MVGR</b>
  </a>
</div>
</nav>
<div className="row row-cols-1 row-cols-md-3 m-5" ref="box">
<div className="col my-4">
  <div className="card h-100 adcard">
    <img src="https://visualpharm.com/assets/712/Add%20User%20Male-595b40b65ba036ed117d286a.svg" className="card-img-top" alt="..."/>
    <div className="card-body m-auto d-grid">
      <h5 className="card-title m-auto">Add Students</h5>
      <div className="input-group input-group-sm m-auto px-2 w-75">
        <input type="number" className="form-control ps-2" min="0" placeholder="Number"/>
        <button className="btn btn-sm btn-primary" ref="add" type="button">Add</button>
      </div>
    </div>
  </div>
</div>
<div className="col my-4">
  <div className="card h-100 adcard">
    <img src="https://visualpharm.com/assets/745/Edit%20User%20Male-595b40b65ba036ed117d2c4c.svg" className="card-img-top" alt="..."/>
    <div className="card-body d-grid">
      <h5 className="card-title m-auto">Modify Students</h5>
      <div className="input-group input-group-sm my-4 px-2">
        <input type="text" className="form-control" placeholder="Enter Reg.No."/>
        <button className="btn btn-primary" type="button" ref="modify">Modify</button>
      </div>
    </div>
  </div>
</div>
<div className="col my-4">
  <div className="card h-100 adcard">
    <img src="https://visualpharm.com/assets/90/Remove%20User%20Male-595b40b65ba036ed117d325d.svg" className="card-img-top" alt="..."/>
    <div className="card-body d-grid">
      <h5 className="card-title m-auto">Remove Students</h5>
      <div className="input-group input-group-sm my-4 px-2">
        <input type="text" className="form-control" placeholder="Enter Reg.No."/>
        <button className="btn btn-primary" type="button" ref="remove">Remove</button>
      </div>
    </div>
  </div>
</div>
</div>
<div className="p-5 d-none" ref="entry">
<form onSubmit={handleSubmit} className="addStd card-body m-auto" method="post">
  <div className="m-auto">
    <div className="mb-3 row">
        <label for="cname" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            type="text" 
            className="form-control"
            name="name"
            value={formData.name}
            maxLength={20}
            onChange={handleChange}
            ref="cname"
          />
        </div>
    </div>
    <div className="mb-3 row">
        <label for="cpassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            maxLength={20} 
            ref="cpassword"
          />
        </div>
    </div>
    <div className="mb-3 row">
        <label for="cemail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="email" 
				    className="form-control"
  				  name="email"
	  			  value={formData.email}
		  		  onChange={handleChange} 
            ref="cemail"
          />
        </div>
    </div>
    <div className="mb-3 row">
      <label for="cdept" className="col-sm-2 col-form-label">Department</label>
      <div className="col-sm-10">
          <select 
            className="form-select form-control"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            maxLength={10}
            ref="cdept"
          >
              <option selected>select department</option>
              <option value="cse">CSE</option>
              <option value="it">IT</option>
              <option value="ece">ECE</option>
              <option value="eee">EEE</option>
              <option value="ce">CE</option>
              <option value="che">CHE</option>
              <option value="mec">MEC</option>
          </select>
      </div>
    </div>
    <div className="mb-3 row">
      <label for="creg" className="col-sm-2 col-form-label">Reg.No.</label>
      <div className="col-sm-10">
        <input
          type="text" 
          className="form-control"
          name="regno"
          value={formData.regno}
          onChange={handleChange}
          maxLength={15}
          ref="creg"/>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <button type="submit" className="btn btn-primary ">create</button>
    </div>
  </div>
</form>
</div>
</div>
