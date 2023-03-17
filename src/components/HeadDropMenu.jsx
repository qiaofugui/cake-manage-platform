import {
  UserOutlined,
  LogoutOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { Dropdown, message, Badge } from 'antd';
import { history, connect } from 'umi';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));

const HeadDropMenu = (props) => {
  // 计算未读消息数量
  const badgeNumber = (list) => {
    return list?.filter((item) => !item.read).length;
  };
  const handleMenuClick = ({ key }) => {
    if (key === '3') {
      // 清除本地存储
      localStorage.removeItem('userInfo');
      message.success('退出成功');
      history.push('/login');
    }
    if (key === '2') {
      history.push('/dva/notice');
    }
  };
  const items = [
    {
      label: '个人设置',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '消息',
      key: '2',
      icon: (
        <Badge size="small" count={badgeNumber(props.notice.list)}>
          {' '}
          <MessageOutlined />{' '}
        </Badge>
      ),
    },
    {
      label: '退出登录',
      key: '3',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown.Button
      menu={menuProps}
      icon={
        <Badge size="small" count={badgeNumber(props.notice.list)}>
          <UserOutlined />
        </Badge>
      }
    >
      {userInfo?.username}
    </Dropdown.Button>
  );
};

const mapStateToProps = (state) => ({ notice: state.notice });
export default connect(mapStateToProps)(HeadDropMenu);
