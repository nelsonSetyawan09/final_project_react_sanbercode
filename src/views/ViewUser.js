import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
  useRouteMatch
} from "react-router-dom";
import "./ViewUser.css"

function ViewUser(props){
    const users = useSelector(state => state.users);
    let {params} = useRouteMatch()
    const [user, setUser] = useState({})
    useEffect(() => {
        const user = users.find(user => user.id === Number.parseInt(params.id));
        setUser(user)
      },[]);
    return (
      <div className="ViewUser">
        <div className="view-user-header">
          <h4>{user.name}</h4>
        </div>
        <div className="view-user-body">
          <p>{user.description}</p>
          <div className="phone-website">
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
          </div>
        </div>
      </div>
    )
}

export default ViewUser;