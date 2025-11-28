import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link, useLocation } from "react-router-dom"; // Import Link
import { UserOutlined, ThunderboltOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
  const location = useLocation(); // Get current URL path

  // Define Menu Items with React Router Links
  const menuItems = [
    { 
      key: '/', 
      label: <Link to="/">Home</Link> 
    },
    { 
      key: '/about', 
      label: <Link to="/about">About</Link> 
    },
    { 
      key: '/services', 
      label: <Link to="/services">Services</Link> 
    },
    { 
      key: '/projects', 
      label: <Link to="/projects">Projects</Link> 
    },
    { 
      key: '/infrastructure', 
      label: <Link to="/infrastructure">Infrastructure</Link> 
    },
    { 
      key: '/careers', 
      label: <Link to="/careers">Careers</Link> 
    },
    { 
      key: '/contact', 
      label: <Link to="/contact">Contact</Link> 
    },
  ];

  return (
    <Header 
      style={{ 
        position: 'fixed', 
        zIndex: 1000, 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '0 50px'
      }}
    >
      <div className="logo" style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
        <ThunderboltOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '8px' }} />
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#001529' }}>Shykru Solutions Pvt. Ltd.</span>
      </div>
      
      <Menu 
        theme="light" 
        mode="horizontal" 
        // Automatically selects the item based on the current path
        selectedKeys={[location.pathname]} 
        items={menuItems} 
        style={{ flex: 1, minWidth: 0, borderBottom: 'none', fontSize: '15px' }} 
      />
      
      {/* <Button type="primary" icon={<UserOutlined />} shape="round">
        Login
      </Button> */}
    </Header>
  );
};

export default AppHeader;