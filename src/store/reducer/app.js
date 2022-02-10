import { IS_LOGGED_IN, SET_TOKEN_OBJ, RESET_TOKEN_OBJ } from "../action";

const initState = {
    isLoggedIn: false,
    loggedInWith: null,
    tokenObj: {}
}

const app = (state = initState, action) => {
    switch (action.type) {
        case IS_LOGGED_IN:
            return { ...state, ...{ isLoggedIn: !state.isLoggedIn, loggedInWith: action.payload } };
        case SET_TOKEN_OBJ:
            return { ...state, ...{ tokenObj: action.payload } };
        case RESET_TOKEN_OBJ:
            return { ...initState }
        default:
            return state
    }
}

export default app
