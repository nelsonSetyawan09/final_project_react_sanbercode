import axios from "axios"

const setUser = (users) =>({
    type:"setUser",
    users
})
const addUser = () =>({
    type:"addUser"
})
const deleteUser = () =>({
    type:"deleteUser"
})

const editUser = () =>({
    type:"editUser"
})

export function setUserAsync(){
    return async (dispatch) =>{
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        console.log(response.data)
        dispatch(setUser(response.data))
    }
}