const INITIAL_STATE = {
    message: false
}

function alert(state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'SEND_ALERT':
            return {
                ...state,
                message: action.message
            }
        default:
            return state;
    }
}


export default alert;
