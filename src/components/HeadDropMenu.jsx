import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, message, Button } from 'antd';
import { history } from 'umi';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const handleMenuClick = ({ key }) => {
  if (key === '2') {
    // 清除本地存储
    localStorage.removeItem('userInfo');
    message.success('退出成功');
    history.push('/login');
  }
};
const items = [
  {
    label: '个人设置',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '退出登录',
    key: '2',
    icon: <LogoutOutlined />,
    danger: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const HeadDropMenu = () => (
  <Dropdown.Button menu={menuProps} icon={<UserOutlined />}>
    {userInfo.username}
  </Dropdown.Button>
);
export default HeadDropMenu;
