import React from "react";
import { Typography, Button, Row, Col, Card, Statistic, Tag, Divider, Descriptions, Avatar } from "antd";
import { 
  ArrowRightOutlined, 
  ThunderboltOutlined, 
  SafetyCertificateFilled, 
  ProjectFilled, 
  BankOutlined,
  EnvironmentOutlined,
  UserOutlined,
  RiseOutlined,
  CheckCircleFilled,
  BuildFilled
} from "@ant-design/icons";
import { Link } from "react-router-dom"; 

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  
  // --- TRUST SIGNALS (Tailored for OPC/Startups) ---
  const stats = [
    { 
      title: "Director's Experience", 
      value: "10+", // Update this to Mr. Shyamkumar's actual years in the field
      suffix: " Yrs",
      icon: <RiseOutlined /> 
    },
    { 
      title: "Authorized Capital", 
      value: "₹10", 
      suffix: " Lakhs",
      icon: <BankOutlined /> 
    },
    { 
      title: "Registration No", 
      value: "086130", 
      icon: <SafetyCertificateFilled /> 
    },
    { 
      title: "Active Projects", 
      value: "Kerala", 
      suffix: " & TN",
      icon: <BuildFilled /> 
    },
  ];

  return (
    <div className="home-page">
      
      {/* --- 1. HERO SECTION: Compliance & Authority --- */}
      <div style={{ 
        background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)', 
        padding: '80px 50px', 
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginTop: '-20px' // Connects seamlessly with Fixed Header
      }}>
        {/* Subtle grid pattern for engineering look */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', zIndex: 2 }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={14}>
              <Tag color="#f50" style={{ marginBottom: '15px', padding: '5px 10px', fontSize: '12px', fontWeight: 'bold' }}>
                CIN: U42909KL2024OPC086130
              </Tag>
              
              <Title style={{ color: 'white', fontSize: '3.5rem', marginTop: 0, lineHeight: 1.1 }}>
                SHYKRU SOLUTIONS <br/>
                <span style={{ fontSize: '1.8rem', fontWeight: 300, color: '#bae7ff' }}>(OPC) PRIVATE LIMITED</span>
              </Title>
              
              <Title level={3} style={{ color: '#ffffff', marginTop: '-10px', marginBottom: '25px', fontWeight: 400 }}>
                Engineering Kerala's Railway Infrastructure
              </Title>
              
              <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', maxWidth: '550px', lineHeight: '1.6' }}>
                A registered <strong>Private Limited Entity</strong> specializing in OHE Electrification, Traction Substations, and Industrial Logistics. Partner with us for transparent and compliant project execution.
              </Paragraph>
              
              <div style={{ marginTop: '40px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Link to="/services">
                  <Button type="primary" size="large" style={{ height: '50px', padding: '0 40px', fontSize: '16px', fontWeight: 600 }}>
                    Our Expertise
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button ghost size="large" style={{ height: '50px', padding: '0 40px', color: 'white', borderColor: 'white', fontSize: '16px' }}>
                    Contact Director
                  </Button>
                </Link>
              </div>
            </Col>
            
            {/* Visual: Contextual Engineering Image */}
            <Col xs={24} md={10}>
               <div style={{ 
                 background: 'rgba(255,255,255,0.1)', 
                 backdropFilter: 'blur(10px)', 
                 borderRadius: '16px', 
                 padding: '15px',
                 border: '1px solid rgba(255,255,255,0.2)',
                 textAlign: 'center',
                 boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
               }}>
                 [Image of engineering blueprints and safety helmet on a desk]
                 <div style={{ marginTop: '15px', color: 'white', fontSize: '14px', fontWeight: 'bold' }}>
                    <EnvironmentOutlined /> Reg. Office: Olavakkot, Palakkad
                 </div>
               </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* --- 2. CORPORATE CREDIBILITY STRIP --- */}
      <div style={{ background: '#ffffff', padding: '60px 20px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Title level={2} style={{ color: '#001529' }}>Corporate Profile</Title>
            <Text type="secondary" style={{ fontSize: '16px' }}>
              Building trust through financial transparency and engineering expertise.
            </Text>
          </div>
          
          {/* Key Stats Grid */}
          <Row gutter={[24, 24]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                <Card hoverable  variant={false}  style={{ textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                    <Statistic 
                      title={<span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#8c8c8c', letterSpacing: '1px' }}>{stat.title}</span>}
                      value={stat.value} 
                      suffix={stat.suffix}
                      prefix={<span style={{ color: '#1890ff', marginRight: '8px' }}>{stat.icon}</span>}
                      valueStyle={{ fontWeight: 'bold', color: '#001529', fontSize: '20px' }}
                    />
                </Card>
              </Col>
            ))}
          </Row>

          <Divider style={{ margin: '50px 0' }} />

          {/* Detailed Entity Info (Crucial for Tenders) */}
          <Descriptions 
            title="Registered Entity Details (RoC-Ernakulam)" 
            bordered 
            column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
            labelStyle={{ fontWeight: 'bold', background: '#fafafa', width: '200px' }}
            contentStyle={{ background: '#fff' }}
          >
            <Descriptions.Item label="Company Name">SHYKRU SOLUTIONS (OPC) PRIVATE LIMITED</Descriptions.Item>
            <Descriptions.Item label="Director / Promoter">
              <UserOutlined style={{ marginRight: '5px', color: '#1890ff' }} /> Mr. Shyamkumar Krishnakumar
            </Descriptions.Item>
            <Descriptions.Item label="Incorporation Date">13-02-2024</Descriptions.Item>
            <Descriptions.Item label="Registered Address">
              No.35344-1, Calicut Road, BRM Complex 1st Floor,<br/>
              Olavakkot, Palakkad, Kerala - 678002
            </Descriptions.Item>
            <Descriptions.Item label="Email Contact">
               <a href="mailto:shykrusolutions@gmail.com" style={{ color: '#1890ff' }}>shykrusolutions@gmail.com</a>
            </Descriptions.Item>
            <Descriptions.Item label="Company Status"><Tag color="green">ACTIVE</Tag></Descriptions.Item>
          </Descriptions>
        </div>
      </div>

      {/* --- 3. CORE SERVICES TEASER --- */}
      <div style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row align="middle" justify="space-between" style={{ marginBottom: '40px' }}>
            <Col>
              <Title level={2} style={{ margin: 0, color: '#001529' }}>Our Expertise</Title>
              <Paragraph type="secondary" style={{ margin: 0, fontSize: '16px' }}>
                Delivering value across key infrastructure sectors in Tamil Nadu & Kerala.
              </Paragraph>
            </Col>
            <Col>
              <Link to="/services">
                <Button type="default" size="large">View All Services <ArrowRightOutlined /></Button>
              </Link>
            </Col>
          </Row>

          <Row gutter={[32, 32]}>
            {/* Service 1: Railway */}
            <Col xs={24} md={8}>
              <Card hoverable style={{ height: '100%', borderRadius: '12px', borderTop: '4px solid #1890ff' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                   <Avatar size={50} style={{ backgroundColor: '#e6f7ff', color: '#1890ff' }} icon={<ThunderboltOutlined />} />
                   <Title level={4} style={{ margin: '0 0 0 15px' }}>Railway Electrification</Title>
                </div>
                <ul style={{ paddingLeft: '20px', color: '#595959', marginBottom: '20px' }}>
                  <li>Overhead Equipment (OHE)</li>
                  <li>Traction Substations (TSS)</li>
                  <li>Power Supply Systems</li>
                  <li>Testing & Commissioning</li>
                </ul>
              </Card>
            </Col>
            
            {/* Service 2: Logistics */}
            <Col xs={24} md={8}>
              <Card hoverable  style={{ height: '100%', borderRadius: '12px', borderTop: '4px solid #52c41a' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                   <Avatar size={50} style={{ backgroundColor: '#f6ffed', color: '#52c41a' }} icon={<ProjectFilled />} />
                   <Title level={4} style={{ margin: '0 0 0 15px' }}>Logistics & Transport</Title>
                </div>
                <ul style={{ paddingLeft: '20px', color: '#595959', marginBottom: '20px' }}>
                  <li>Machinery Transportation</li>
                  <li>Industrial Product Delivery</li>
                  <li>Secure Packaging</li>
                  <li>Nationwide Coverage</li>
                </ul>
              </Card>
            </Col>

            {/* Service 3: Support */}
            <Col xs={24} md={8}>
              <Card hoverable style={{ height: '100%', borderRadius: '12px', borderTop: '4px solid #faad14' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                   <Avatar size={50} style={{ backgroundColor: '#fffbe6', color: '#faad14' }} icon={<SafetyCertificateFilled />} />
                   <Title level={4} style={{ margin: '0 0 0 15px' }}>Technical Support</Title>
                </div>
                <ul style={{ paddingLeft: '20px', color: '#595959', marginBottom: '20px' }}>
                  <li>Skilled Manpower Supply</li>
                  <li>Inspection Services</li>
                  <li>Railway Project Consultancy</li>
                  <li>Maintenance Support</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* --- 4. CALL TO ACTION (CTA) --- */}
      <div style={{ background: '#001529', padding: '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2} style={{ color: 'white' }}>Ready to Execute Your Next Project?</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', marginBottom: '40px' }}>
            We are actively bidding for Tenders and seeking Engineering Partnerships in the Southern Railway Zone.
          </Paragraph>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link to="/contact">
              <Button type="primary" size="large" icon={<ArrowRightOutlined />} style={{ height: '50px', padding: '0 40px' }}>
                Request Capability Statement
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;