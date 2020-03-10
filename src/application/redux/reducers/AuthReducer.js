const INITIAL_STATE = {
    user: false
}

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'LOGIN_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}


export default auth;
