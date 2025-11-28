import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Grid } from "antd";
import { Link, useLocation } from "react-router-dom";
import { ThunderboltOutlined, MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const AppHeader = () => {
  const location = useLocation();
  const screens = useBreakpoint(); // Breakpoint hook to detect screen size
  const [open, setOpen] = useState(false); // State for mobile drawer

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Define Menu Items
  const menuItems = [
    { key: '/', label: <Link to="/">Home</Link> },
    { key: '/about', label: <Link to="/about">About</Link> },
    { key: '/services', label: <Link to="/services">Services</Link> },
    { key: '/projects', label: <Link to="/projects">Projects</Link> },
    { key: '/infrastructure', label: <Link to="/infrastructure">Infrastructure</Link> },
    { key: '/careers', label: <Link to="/careers">Careers</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensures Logo and Menu/Button are spaced out
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: screens.md ? '0 50px' : '0 20px', // Responsive padding
      }}
    >
      {/* --- LOGO --- */}
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <ThunderboltOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '8px' }} />
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#001529' }}>
          {screens.xs ? 'Shykru Sol.' : 'Shykru Solutions Pvt. Ltd.'} 
          {/* Shorten name on very small screens if needed */}
        </span>
      </div>

      {/* --- DESKTOP MENU (Visible on Medium screens and up) --- */}
      {screens.md ? (
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ 
            flex: 1, 
            minWidth: 0, 
            borderBottom: 'none', 
            justifyContent: 'flex-end', 
            fontSize: '15px' 
          }}
        />
      ) : (
        /* --- MOBILE HAMBURGER BUTTON (Visible on Small screens) --- */
        <Button 
          type="text" 
          icon={<MenuOutlined style={{ fontSize: '20px' }} />} 
          onClick={showDrawer} 
        />
      )}

      {/* --- MOBILE DRAWER COMPONENT --- */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        width={250} // Width of the slide-out menu
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="inline" // Vertical mode for mobile
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={onClose} // Close drawer when a link is clicked
          style={{ borderRight: 0 }}
        />
        
        {/* Optional: Mobile Login Button inside Drawer */}
        {/* <div style={{ padding: '20px' }}>
           <Button block type="primary" icon={<UserOutlined />}>Login</Button>
        </div> */}
      </Drawer>
    </Header>
  );
};

export default AppHeader;