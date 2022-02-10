export const SET_PROFILE = "SET_PROFILE"
export const RESET_PROFILE = "RESET_PROFILE"

export const IS_LOGGED_IN = "IS_LOGGED_IN"
export const SET_TOKEN_OBJ = "SET_TOKEN_OBJ"
export const RESET_TOKEN_OBJ = "RESET_TOKEN_OBJ"


// PROFILE
export const setProfile = payload => ({ type: SET_PROFILE, payload });
export const resetProfile = () => ({ type: RESET_PROFILE});

//APP
export const isLoggedIn = payload => ({ type: IS_LOGGED_IN, payload });
export const setTokenObj = payload => ({ type: SET_TOKEN_OBJ, payload });
export const resetTokenObj = () => ({ type: RESET_TOKEN_OBJ });
