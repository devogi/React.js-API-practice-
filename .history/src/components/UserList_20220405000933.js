import React, { useState, useEffect } from "react";
const axios = require("axios");

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return <div className="user-list">
      
  </div>
}

export default UserList;
