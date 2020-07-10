import React from "react";
import "./User.css";
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUserAsync} from "../actions";


export default function User(props){
  let useMatch = useRouteMatch();
  const dispatch = useDispatch()
  const handleDeleteUser = () =>{
    dispatch(deleteUserAsync(props.user.id-1))
  }
    return (
        <div className="User">
         <div className="user-header">
           <h4>{props.user.name}</h4>
         </div>
         <div className="user-body">
            <p>{props.user.description}</p>
         </div>
         <div className="user-footer">
            <div><Link to={`${useMatch.url}viewUser/${props.user.id}`}>View</Link></div>
            <div><Link to={`${useMatch.url}editUser/${props.user.id}`}>Edit</Link></div>
            <div className="icon-delete" onClick={handleDeleteUser}>Delete</div>
         </div>
        </div>
    )
}