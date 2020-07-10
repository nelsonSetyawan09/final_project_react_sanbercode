const users = (state =[{name:"anggrainy"}],action) =>{
    switch(action.type){
        case "setUser":
            state = action.users;
            return state;
        case 'addUser':
            return [
                action.user,
                ...state
            ];
        case 'deleteUser':
            return state.slice(action.index, 1);
        case 'editUser':
                state[action.index] = action.user;
                return state;
        default:
            return state

    }
};

export default users;