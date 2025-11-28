import React from "react";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import { 
  EnvironmentOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  SafetyCertificateOutlined,
  LinkedinFilled,
  FacebookFilled,
  RightOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ background: '#001529', color: 'rgba(255, 255, 255, 0.65)', padding: '60px 50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <Row gutter={[48, 48]}>
          
          {/* --- COLUMN 1: COMPANY CONTACT & LEGAL --- */}
          <Col xs={24} md={8}>
            <div style={{ marginBottom: '20px' }}>
              <Title level={4} style={{ color: 'white', marginBottom: '5px' }}>SHYKRU SOLUTIONS</Title>
              <Text style={{ color: '#40a9ff', fontSize: '12px' }}>(OPC) PRIVATE LIMITED</Text>
            </div>
            
            <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <EnvironmentOutlined style={{ color: '#faad14', fontSize: '18px', marginTop: '4px' }} />
                <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                  No.35344-1, Calicut Road,<br/>
                  B R M Complex, 1st Floor,<br/>
                  Olavakkot, Palakkad - 678002
                </Text>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <MailOutlined style={{ color: '#faad14', fontSize: '18px' }} />
                <a href="mailto:shykrusolutions@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                  shykrusolutions@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <SafetyCertificateOutlined style={{ color: '#52c41a', fontSize: '18px' }} />
                <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                  CIN: U42909KL2024OPC086130
                </Text>
              </div>
            </Space>
          </Col>

          {/* --- COLUMN 2: QUICK LINKS --- */}
          <Col xs={24} md={8}>
            <Title level={5} style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Quick Links
            </Title>
            <Space orientation="vertical" size="large">
              <Link to="/" style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center' }}>
                <RightOutlined style={{ fontSize: '12px', marginRight: '8px' }} /> Home
              </Link>
              <Link to="/about" style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center' }}>
                <RightOutlined style={{ fontSize: '12px', marginRight: '8px' }} /> Corporate Profile
              </Link>
              <Link to="/services" style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center' }}>
                <RightOutlined style={{ fontSize: '12px', marginRight: '8px' }} /> Our Services
              </Link>
              <Link to="/projects" style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center' }}>
                <RightOutlined style={{ fontSize: '12px', marginRight: '8px' }} /> Projects Gallery
              </Link>
              <Link to="/contact" style={{ color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center' }}>
                <RightOutlined style={{ fontSize: '12px', marginRight: '8px' }} /> Contact Us
              </Link>
            </Space>
          </Col>

          {/* --- COLUMN 3: LOCATION MAP --- */}
          <Col xs={24} md={8}>
            <Title level={5} style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Locate Us
            </Title>
            <div style={{ 
              borderRadius: '8px', 
              overflow: 'hidden', 
              border: '1px solid #434343',
              height: '200px'
            }}>
              {/* Google Maps Embed */}
              <iframe 
                title="Office Location"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy" 
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                // This query points to Olavakkot, Palakkad
                src="https://maps.google.com/maps?q=Olavakkot,Palakkad,Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <div style={{ marginTop: '15px' }}>
               <Space size="large">
                 <LinkedinFilled style={{ fontSize: '24px', color: '#0077b5', cursor: 'pointer' }} />
                 <FacebookFilled style={{ fontSize: '24px', color: '#4267B2', cursor: 'pointer' }} />
               </Space>
            </div>
          </Col>

        </Row>
        
        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.15)', margin: '40px 0' }} />
        
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)' }}>
              © {new Date().getFullYear()} Shykru Solutions (OPC) Pvt Ltd. All Rights Reserved.
            </Text>
          </Col>
          <Col>
            <Text style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)' }}>
              Regulated by Ministry of Corporate Affairs (MCA)
            </Text>
          </Col>
        </Row>

      </div>
    </Footer>
  );
};

export default AppFooter;