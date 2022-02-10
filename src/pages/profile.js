import { Card } from 'antd';
import { useSelector } from 'react-redux';
const { Meta } = Card;

const Profile = () => {
    const { name, email, imageUrl } = useSelector(state => state.profile);

    return <div className="csw-page">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="profile" src={imageUrl} />}
        >
            <Meta title={name} description={email} />
        </Card>
    </div>
}

export default Profile