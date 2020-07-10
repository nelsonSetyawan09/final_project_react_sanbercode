export const users = (state =[{name:"anggrainy"}],action) =>{
    switch(action.type){
        case "setUsers":
            state = action.users;
            return state;
        case 'addUser':
            return [
                action.user,
                ...state
            ];
        case 'deleteUser':
            state.splice(action.index, 1);
            return state;
        case 'editUser':
                state[action.index] = action.user;
                return state;
        default:
            return state

    }
};

export const user = (state ={},action) =>{
    switch(action.type){
        case "setUser":
            state = action.user;
            return state;
        case "editUser":
            state[action.key]=action.value;
            return state;
        default:
            return state

    }
};