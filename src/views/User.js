import React from "react";
import "./User.css"

export default function User(props){
    return (
        <div className="User">
          {props.user.name}
        </div>
    )
}