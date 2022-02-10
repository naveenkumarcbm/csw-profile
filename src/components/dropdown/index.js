import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { GoogleLogout } from 'react-google-login';
import CONSTANTS from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { resetProfile, resetTokenObj } from '../../store/action';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useEffect } from 'react';

const GLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutSuccess = () => {
        dispatch(resetTokenObj());
        dispatch(resetProfile());
        navigate("/")
    }
    return <GoogleLogout
        clientId={CONSTANTS.G_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
    />
}

const FLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutSuccess = () => {
        dispatch(resetTokenObj());
        dispatch(resetProfile());
        navigate("/")
    }
    return <Button type="link" onClick={() => window.FB.logout(onLogoutSuccess)}>Logout</Button>

}

const CSWDropdown = () => {
    const { profile, app } = useSelector(state => state);
    const navigate = useNavigate();
    const { name } = profile;
    const { loggedInWith, isLoggedIn } = app;

    useEffect(() => {
        if (!isLoggedIn) navigate("/");
    }, [isLoggedIn])

    const menuList = (
        <Menu>
            <Menu.Item key="logout">{loggedInWith && loggedInWith === CONSTANTS.G_LOGIN_TYPE ? <GLogout /> : <FLogout />}</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menuList}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {`${name}  `}<DownOutlined />
            </a>
        </Dropdown>
    )
}

export default CSWDropdown;