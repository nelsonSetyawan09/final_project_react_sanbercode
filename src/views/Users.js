import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUsersAsync} from "../actions";
import User from "./User";
import "./Users.css";

function Users(){
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  
  const setUsers = () =>{
    dispatch(setUsersAsync())
  }
  useEffect(() => {
    setUsers();
  },[]);
  return (
    <div className="Users">
        {users.map((user,index) => <User key={index} user={user}/> )}
    </div>
  )
 }
 export default Users;