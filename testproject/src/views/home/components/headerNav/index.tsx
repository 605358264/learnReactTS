import React, { Component } from "react";
import './index.less'
import { Menu, MenuProps } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: '销售中心',
    key: 'sell',
    icon: <AppstoreOutlined />,
  },
  {
    label: '账户中心',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: '财务中心',
    key: 'money',
    icon: <AppstoreOutlined />,
  },
  {
    label: '学习工具',
    key: 'study',
    icon: <AppstoreOutlined />,
  },
  {
    label: '慕课大学',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  }
];
const HeaderNav = () => {
  const [current, setCurrent] = React.useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <div className="headerNavBox">
            <div className="left">
              <div className="menu">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
              </div>
              <div className="userInfo">

              </div>
            </div>
          </div>  
}          
export default HeaderNav