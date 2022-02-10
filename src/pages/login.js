import { Card } from 'antd';
import FacebookAuthProvider from '../auth/provider/facebook';
import GoogleAuthProvider from '../auth/provider/google';
const { Meta } = Card;

const Login = () => {

    return (
        <div className="csw-login">
            <Card
                type="inner"
                title="CSW User Profile Application">
                <Meta description="Simple application with OpenID 2.0" />
                <GoogleAuthProvider />
                <FacebookAuthProvider />
            </Card>
        </div>)


}

export default Login