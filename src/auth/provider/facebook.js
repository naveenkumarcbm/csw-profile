import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoggedIn, setProfile, setTokenObj } from '../../store/action';
import CONSTANTS from '../../constants';

const FacebookAuthProvider = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const responseFacebook = (res) => {
        dispatch(isLoggedIn(CONSTANTS.FB_LOGIN_TYPE));
        let profile = {
            name: res.name,
            email: res.email,
            imageUrl: res.picture.data.url
        }
        dispatch(setProfile(profile));
        navigate("app")
        dispatch(setTokenObj(res));
    };

    const componentFailure = console.error

    return <div><FacebookLogin
        // autoLoad={true}
        appId={CONSTANTS.FB_APP_ID}
        fields={CONSTANTS.FB_PROFILE}
        onFailure={componentFailure}
        callback={responseFacebook} />
    </div>
}

export default FacebookAuthProvider;
