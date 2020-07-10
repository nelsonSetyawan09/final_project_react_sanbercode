import axios from "axios"

const setUsers = (users) =>({
    type:"setUsers",
    users
});
const setUser = (user) =>({
    type:"setUser",
    user
})
const addUser = (user) =>({
    type:"addUser",
    user
})
const deleteUser = (index) =>({
    type:"deleteUser",
    index
})

const editUser = (key,value) =>({
    type:"editUser",
    key,
    value
})

export function setUsersAsync(){
    return async (dispatch) =>{
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        const users = response.data.map(user => ({...user, description:lorem }))
        dispatch(setUsers(users));
    }
}

export function setUserAsync(id){
    return async (dispatch) =>{
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = {...response.data, description:lorem};
        dispatch(setUser(user));
    }
}

export function deleteUserAsync(index){
    return (dispatch) =>{
        console.log('index',index)
        dispatch(deleteUser(index));
    }
}
export function editUserAsync(key, val){
    return (dispatch) =>{
        dispatch(editUser(key, val));
    }
}
export function addUserAsync(user){
    return (dispatch) =>{
        console.log('add user action', user)
        dispatch(addUser(user));
    }
}