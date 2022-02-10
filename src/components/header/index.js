import CSWDropdown from "../dropdown";
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleClick = e => {
    navigate(e.key);
    setSelected(e.key);
  }

  return (
    <>
    <header>
      <h2>CSW Profile Application</h2>
      <div className="csw-menu">
      <Menu onClick={handleClick} selectedKeys={[selected]} mode="horizontal">
        <Menu.Item key="/app/table">
         Static Table
        </Menu.Item>
        <Menu.Item key="/app/json">
          JSON
        </Menu.Item>
        </Menu>
      </div>
      <CSWDropdown  />
    </header>
    </>
  );
}

export default Header;