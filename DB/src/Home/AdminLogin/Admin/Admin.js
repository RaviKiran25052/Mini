import React, { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import './Admin.css';
import { AuthContext } from '../../../AuthContext';
import { useNavigate } from 'react-router-dom';
import "jquery-ui-dist/jquery-ui";
import * as XLSX from 'xlsx';

const Admin = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/adminlogin");
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    branch: "",
    regno: "",
  });

  const [deleteRegno, setDeleteRegno] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  }

  const handleUpload = async () => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = async (event) => {
        const binaryString = event.target.result;
        const workbook = XLSX.read(binaryString, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        Axios.post('http://localhost:3001/users/bulk', { data })
          .then(response => {
            console.log(response.data);
            window.alert("upload of " + data.length + " users successful");
          })
          .catch(error => {
            console.error(error);
            window.alert("upload failed due to duplicates or inappropraite data");
          });
      };
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateEmail(formData.email) && formData.name !== "" && formData.password !== "" && formData.email !== "" && formData.branch !== "" && formData.regno !== "") {
      try {
        const response = await Axios.post('http://localhost:3001/users/new', formData);
        console.log('Response:', response.data);
        window.alert("User saved");
      } catch (error) {
        console.log('Error:', error.message);
        window.alert(error.message);
      }
      setFormData({
        name: "",
        password: "",
        email: "",
        branch: "",
        regno: "",
      });
    } else {
      window.alert("You may have typed the wrong email or unfilled the details");
    }
  };

  async function handleDelete(e) {
    e.preventDefault();
    if (window.confirm("Do you want to delete student " + deleteRegno) === true) {
      try {
        const response = await Axios.delete(`http://localhost:3001/users/delete/${deleteRegno}`);
        console.log(response.data);
        window.alert("User deleted");
      } catch (error) {
        console.log(error);
        window.alert(error.message);
      }
    }
    else {
      setDeleteRegno("");
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange1 = (e) => {
    setDeleteRegno(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-3 row">
          <label for="cname" htmlFor="name" className="col-sm-2 text-white col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              maxLength={20}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="cpassword" htmlFor="password" className="col-sm-2 text-white col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              maxLength={20}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="cemail" className="col-sm-2 text-white col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="cdept" className="col-sm-2 text-white col-form-label">Department</label>
          <div className="col-sm-10">
            <select
              className="form-select form-control"
              id="cdept"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              maxLength={10}
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
          <label for="creg" className="col-sm-2 text-white col-form-label">Reg.No.</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="regno"
              value={formData.regno}
              onChange={handleChange}
              maxLength={15}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary">create</button>
        </div>
      </form>
      <form onSubmit={handleDelete} className="p-5 mb-3 row">
        <label for="dreg" htmlFor="userid" className="col-sm-2 text-white col-form-label">Reg.No.</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="dreg"
            name="userid"
            value={deleteRegno}
            onChange={handleChange1}
            maxLength={15}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary ">Remove</button>
        </div>
      </form>
      <div className="m-5 d-flex justify-content-center align-items-center">
        <label for="formFile" className="form-label">Upload Excel</label>
        <input className="form-control w-50" type="file" accept=".xlsx,.xls" onChange={handleFileChange} id="formFile" />
        <button className="btn btn-primary m-auto" onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default Admin;
