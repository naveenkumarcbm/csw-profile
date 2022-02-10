import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, setProfile, setTokenObj } from '../../store/action';
import { useDispatch } from 'react-redux';
import CONSTANTS from '../../constants';

const GoogleAuthProvider = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const responseGoogle = (response) => {
        dispatch(isLoggedIn(CONSTANTS.G_LOGIN_TYPE));
        dispatch(setProfile(response.profileObj));
        navigate("app")
        dispatch(setTokenObj(response));
    }

    const componentFailure = console.error

    return <div><GoogleLogin
        clientId={CONSTANTS.G_CLIENT_ID}
        buttonText={CONSTANTS.G_LABEL}
        isSignedIn={true}
        autoLoad={false}
        onSuccess={responseGoogle}
        onFailure={componentFailure} /></div>
}

export default GoogleAuthProvider;
