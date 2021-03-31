import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Layout, Row, Col } from 'antd';
import {
  CommentOutlined,
  CalendarOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { createGlobalStyle } from 'styled-components';

const { Header, Content, Footer } = Layout;

const Global = createGlobalStyle`
`;

const AppLayout = ({ children }) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Global />
      <Header>
        <Menu
          defaultSelectedKeys={['1']}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item icon={<CommentOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />}>
            Record
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />}>
            Setting
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        {children}
      </Content>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
