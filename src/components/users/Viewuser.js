import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Viewuser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
        <h2 className="mt-5">{`User ID is: ${user.id}`}</h2>
      <ul class="list-group mt-5">
        <li class="list-group-item active" aria-current="true">
          User Information:
        </li>
        <li class="list-group-item">{user.name}</li>
        <li class="list-group-item">{user.username}</li>
        <li class="list-group-item">{user.email}</li>
        <li class="list-group-item">{user.phone}</li>
        <li class="list-group-item">{user.website}</li>
      </ul>
    </div>
  );
};

export default Viewuser;
