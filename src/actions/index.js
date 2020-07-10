import axios from "axios"

const setUser = (users) =>({
    type:"setUser",
    users
})
const addUser = (user) =>({
    type:"addUser",
    user
})
const deleteUser = (index) =>({
    type:"deleteUser",
    index
})

const editUser = (index, user) =>({
    type:"editUser",
    index,
    user
})

export function setUserAsync(){
    return async (dispatch) =>{
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        const users = response.data.map(user => ({...user, description:lorem }))
        dispatch(setUser(users));
    }
}

export function deleteUserAsync(index){
    return (dispatch) =>{
        console.log('index',index)
        dispatch(deleteUser(index));
    }
}
export function editUserAsync(index, user){
    return (dispatch) =>{
        console.log('edit user action',index, user)
        dispatch(editUser(index, user));
    }
}
export function addUserAsync(user){
    return (dispatch) =>{
        console.log('add user action', user)
        dispatch(addUser(user));
    }
}