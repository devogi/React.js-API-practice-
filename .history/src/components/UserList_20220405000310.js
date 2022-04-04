import React, { useState } from 'react'
import  { Axios } from "axios"

function UserList() {
const userList = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await axios
    }
}


  return (
    <div>UserList</div>
  )
}

export default UserList