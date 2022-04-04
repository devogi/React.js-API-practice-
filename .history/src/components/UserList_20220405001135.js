import React, { useState, useEffect } from "react";
import SingleUser from './SingleUser'
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
      <ul>
          {users.map((user, idx) => {
              <li>
                  <SingleUser user= {user} key = {}  />
              </li>
          } )}
      </ul>
  </div>
}

export default UserList;
