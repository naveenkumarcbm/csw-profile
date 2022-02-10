import { RESET_PROFILE, SET_PROFILE } from "../action";

const initState = {
    email: "",
    imageUrl: "",
    name: ""
}

const profile = (state = initState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...action.payload };
        case RESET_PROFILE:
            return { ...initState };
        default:
            return state
    }
}

export default profile
