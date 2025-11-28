// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Result, Button } from "antd";

// --- Import Layout Components ---
// Ensure these paths match where you saved your files
import AppHeader from "./Header"; // Or "./components/Header" if you moved it
import AppFooter from "./Footer"; // The file we just created above

// --- Import Page Components ---
import Home from "./pages/Home";
import Services from "./pages/Services"; // From your previous request
import About from "./pages/About";
import Infrastructure from "./pages/Infrastructure";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";



const { Content } = Layout;

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" href="/">Back Home</Button>}
  />
);

const Complete = () => {
  return (
    <Layout style={{ minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Header (Fixed at top) */}
      <AppHeader /> 
      
      {/* 2. Main Content Area */}
      {/* marginTop: '64px' prevents content from hiding behind the fixed header */}
      <Content style={{ marginTop: '64px', flex: 1, background: '#f0f2f5' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all route for errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      
      {/* 3. Footer (Stays at bottom) */}
      <AppFooter />
      
    </Layout>
  );
};

export default Complete;