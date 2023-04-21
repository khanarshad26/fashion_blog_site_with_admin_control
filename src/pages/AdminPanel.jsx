import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import BlogForm from '../components/BlogForm';
import EventForm from '../components/EventForm';

const { Header, Content, Sider } = Layout;

export const TABS  = {
    Blogs: 'Blogs',
    Events: 'Events'
}

const items2 = [{icon: LaptopOutlined, tab: 'Create Blog'}, {icon: NotificationOutlined, tab: 'Create Events'}].map(
  (item, index) => {
    const key = String(index + 1);

    return {
      key: item.tab === 'Create Blog' ? TABS.Blogs : TABS.Events,
      icon: React.createElement(item.icon),
      label: item.tab,
    };
  },
);

const AdminPanel = () => {
  const {token: { colorBgContainer }} = theme.useToken();
  const [tab, setTab] = useState(TABS.Blogs);
  const blog = {title: '', summary: '', content: ''};
  const event = {     
    title: '', 
    summary: '', 
    address: '', 
    material: '',
    startDate: new Date(),
    endDate: new Date(),
  };

  return (
    <Layout>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={(item) => setTab(item.key)}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{tab}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {tab === TABS.Blogs ? <BlogForm blog={blog} /> : <EventForm event={event}/>}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;