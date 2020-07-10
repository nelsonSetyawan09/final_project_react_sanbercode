import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setUserAsync} from "../actions";
import {
  useRouteMatch
} from "react-router-dom";
import "./ViewUser.css"

function ViewUser(props){
  const user = useSelector(state => state.user);
    const dispatch = useDispatch()
    let {params} = useRouteMatch()
    const setUser = async () =>{
     await dispatch(setUserAsync(params.id))
    }
    useEffect( () => {
      setUser();
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