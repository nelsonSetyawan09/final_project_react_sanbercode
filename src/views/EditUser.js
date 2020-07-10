import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editUserAsync} from "../actions";
import "./EditUser.css";
import {
    useRouteMatch
  } from "react-router-dom";

function EditUser(props){
    let {params} = useRouteMatch();
    const users = useSelector(state => state.users);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    useEffect(() => {
        const user = users.find(user => user.id === Number.parseInt(params.id));
        setName(user.name);
        setPhone(user.phone);
        setWebsite(user.website);
      },[]);
    const dispatch = useDispatch()
    const handleSubmitEditUser = (e) =>{
        e.preventDefault();
        const user = {
            name,
            phone,
            website
        }
      dispatch(editUserAsync(params.id, user))
    }
    const handleChangeName = (e) =>{
        setName(e.target.value)
    }
    const handleChangePhone = (e) =>{
        setPhone(e.target.value)
    }
    const handleChangeWebsite = (e) =>{
        setWebsite(e.target.value)
    }
    return (
        <div className="wrap-edit-user">
            <h4>Edit User</h4>
           <form onSubmit={handleSubmitEditUser} className="form-user">
                <div className="group-input">
                    <label className="label-name">
                        <span>Name:</span>
                        <input name="name" value={name} onChange={handleChangeName}/>
                    </label>
                </div>
                <div className="group-input">
                    <label className="label-phone">
                        <span>Phone:</span>
                        <input name="phone" value={phone} onChange={handleChangePhone}/>
                    </label>
                </div>
                <div className="group-input">
                    <label className="label-website">
                        <span>Website:</span>
                        <input name="website" value={website} onChange={handleChangeWebsite}/>
                    </label>
                </div>
                <div className="group-input group-input-button">
                    <button>SUBMIT</button>
                </div>
           </form>
        </div>
    )
}

export default EditUser;