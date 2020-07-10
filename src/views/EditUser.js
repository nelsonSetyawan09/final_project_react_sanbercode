import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editUserAsync,setUserAsync} from "../actions";
import "./EditUser.css";
import {
    useRouteMatch,
    useHistory
  } from "react-router-dom";

function EditUser(props){
    let history = useHistory();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()
    let {params} = useRouteMatch()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const setUser = async () =>{
     await dispatch(setUserAsync(params.id))
    }
    useEffect( () => {
      setUser();
      },[]);
      useEffect( () => {
        setName(user.name);
        setPhone(user.phone)
        setWebsite(user.website)
    },[user]);
    const handleSubmitEditUser = (e) =>{
        e.preventDefault();
        const editUser = {
            name: user.name,
            phone:user.phone,
            website: user.website
        }
      console.log('edit user', editUser)
      history.push("/");
    }
    const handleChangeName = (e) =>{
        setName( e.target.value);
    }
    const handleChangePhone = (e) =>{
       setPhone( e.target.value);
    }
    const handleChangeWebsite = (e) =>{
       setWebsite( e.target.value);
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