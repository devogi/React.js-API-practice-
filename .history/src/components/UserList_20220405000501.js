import React, { useState } from "react";
const axios = require("axios");

function UserList() {
  const userList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
      const response = await axios.get("https://randomuser.me/api/?results=5");
      setUsers(response.data.results);
    };
useEffect (() => {
    fetchUsers()
},  )



  };

  return <div>UserList</div>;
}

export default UserList;
