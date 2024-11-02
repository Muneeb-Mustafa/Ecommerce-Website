import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { DashboardOutlined, HomeOutlined, UnorderedListOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons';

const Sidebar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === '1') {
      navigate('/dashboard/admin/create-category');
    }  
    if (e.key === '2') {
      navigate('/dashboard/admin/create-product');
    }  
    if (e.key === '3') {
      navigate('/dashboard/admin/products');
    }  
    if (e.key === '4') {
      navigate('/dashboard/admin/update-product');
    }  
    if (e.key === '9') {
        navigate('/dashboard/admin/users');
    }  
  };

  const items = [
    {
      key: 'sub1',
      label: 'Categories',
      icon: <DashboardOutlined />,
      children: [
        {
          key: '1',
          label: 'Create Category',
        }, 
      ],
    },
    {
      key: 'sub2',
      label: 'Products',
      icon: <DashboardOutlined />,
      children: [
         {
          key: '2',
          label: 'Create Product',
        },
        {
          key: '3',
          label: 'Products',
        }
      ],
    },
    {
      type: 'divider',
    },
  ];

  const profileItems = [
    {
      key: 'grp',
      icon: <UserOutlined />,
      label: 'Profile',
      children: [
        {
          key: '13',
          icon: <PoweroffOutlined />,
          label: 'Signout',
          danger: true,
        },
      ],
    },
  ];

  return (
    <div
      style={{
        width: 256,
        height: '120vh', 
        display: 'flex',
        flexDirection: 'column',  
        left: 0,
        top: 0,
        background: '#001529', 
      }}
    >
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        style={{ flexGrow: 1 }}  
      />
      <Menu
        onClick={onClick}
        mode="inline"
        theme="dark"
        items={profileItems}
      />
    </div>
  );
};

export default Sidebar;
