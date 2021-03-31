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
            <Link href="/"><a>Home</a></Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined />}>
            <Link href="/record"><a>Record</a></Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            <Link href="/profile"><a>Profile</a></Link>
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />}>
            <Link href="/setting"><a>Setting</a></Link>
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
