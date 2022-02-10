const CONSTANTS = {
    G_CLIENT_ID: process.env.G_CLIENT_ID || '864048286413-ot5vp1d160eh7uipigq3itc6t4gcllci.apps.googleusercontent.com',
    G_LABEL: 'Login with Google',
    G_LOGIN_TYPE: 'GAPI',
    FB_APP_ID: process.env.FB_APP_ID || '229272116080181',
    FB_PROFILE: 'name,email,picture',
    FB_LOGIN_TYPE: 'FB',
    IDLE_TIME_PERIOD: 10000 //59000
}

export default CONSTANTS;