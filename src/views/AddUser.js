import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addUserAsync} from "../actions";

function EditUser(){
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const dispatch = useDispatch();

    const handleSubmitEditUser = (e) =>{
        e.preventDefault();
        const user = {
            name,
            phone,
            website
        }
      dispatch(addUserAsync(user))
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
            <h4>Add User</h4>
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