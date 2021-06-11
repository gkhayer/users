import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const {id} = useParams();
 // alert(id)
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });


  useEffect(() => {
      loadUser();
  }, [])
  // rather than writing user.name, user.username do object deconstruction

  const { name, username, email, phone, website } = user;

  const oninputChange = (e) => {
    // save value

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitClicked = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/users/${id}`, user);
    history.push("/");
  };


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`)
    console.log(result);
    setUser(result.data)
  }

  return (
    <div className="container">
      <h1 className="center">Edit a User</h1>
      <form onSubmit={(e) => onSubmitClicked(e)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={(e) => oninputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Username"
            name="username"
            value={username}
            onChange={(e) => oninputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={(e) => oninputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Phone"
            name="phone"
            value={phone}
            onChange={(e) => oninputChange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Website Name"
            name="website"
            value={website}
            onChange={(e) => oninputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Update User 
        </button>
      </form>
    </div>
  );
};

export default EditUser;
