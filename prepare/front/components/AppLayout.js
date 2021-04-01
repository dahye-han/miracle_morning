import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Layout } from 'antd';
import {
  CommentOutlined,
  CalendarOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { createGlobalStyle } from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

const Global = createGlobalStyle`
`;

const AppLayout = ({ children }) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Global />
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <Menu
            defaultSelectedKeys={['1']}
            mode="lined"
            theme="dark"
            style={{margin:'15px'}}
          >
            <Menu.Item icon={<CommentOutlined />} style={{fontSize:'15px', marginBottom: '15px'}}>
              <Link href="/"><a>HOME</a></Link>
            </Menu.Item>
            <Menu.Item icon={<CalendarOutlined />} style={{fontSize:'15px', marginBottom: '15px'}}>
              <Link href="/record"><a>RECORD</a></Link>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} style={{fontSize:'15px', marginBottom: '15px'}}>
              <Link href="/profile"><a>PROFILE</a></Link>
            </Menu.Item>
            <Menu.Item icon={<SettingOutlined />} style={{fontSize:'15px', marginBottom: '15px'}}>
              <Link href="/setting"><a>SETTING</a></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header  style={{ padding: 0, background: '#fff' }} />
          <Content style={{ minHeight: '360px', padding: '24px', background: 'orange',  margin: '0 16px' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}> HANAE @2021 </Footer>
        </Layout>
      </Layout> 
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
