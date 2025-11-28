import React from "react";
import { Typography, Row, Col, Card, Button, Tag, List, Alert, Avatar, Divider } from "antd";
import { 
  RocketOutlined, 
  SafetyCertificateFilled, 
  TeamOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  ToolOutlined,
  SendOutlined,
  CheckCircleFilled
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Careers = () => {

  // --- JOB DATA ---
  const jobs = [
    {
      title: "Site Engineer (Electrical/Civil)",
      type: "Full Time",
      location: "Palakkad / TN Sites",
      experience: "2-4 Years",
      description: "Supervision of OHE installation, foundation works, and ensuring site safety compliance.",
      skills: ["B.Tech/Diploma", "AutoCAD", "Site Management"],
      color: "blue"
    },
    {
      title: "Heavy Vehicle Driver",
      type: "Contract",
      location: "Kerala Routes",
      experience: "5+ Years",
      description: "Driving heavy trailers for machinery transport. Must have valid Heavy License and clean record.",
      skills: ["Valid HMV License", "Route Knowledge", "Safety Protocol"],
      color: "green"
    },
    {
      title: "OHE Rigger / Lineman",
      type: "Project Based",
      location: "Railway Sites",
      experience: "1-3 Years",
      description: "Working at height for overhead cabling and mast erection under supervision.",
      skills: ["ITI Certificate", "Working at Height", "Physical Fitness"],
      color: "orange"
    }
  ];

  return (
    <div className="careers-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      
      {/* --- 1. HERO HEADER (Styled with Gradient) --- */}
      <div style={{ 
        background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)', 
        padding: '100px 20px', 
        textAlign: 'center', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <Tag color="gold" style={{ padding: '5px 15px', fontWeight: 'bold', fontSize: '12px', marginBottom: '20px' }}>
            NOW HIRING
          </Tag>
          <Title level={1} style={{ color: 'white', marginBottom: '20px', fontSize: '3rem' }}>
            Join Our Engineering Team
          </Title>
          <Paragraph style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Build your future with <strong>SHYKRU SOLUTIONS</strong>. We are looking for passionate individuals ready to tackle challenging Railway & Logistics projects.
          </Paragraph>
          
          <div style={{ marginTop: '40px' }}>
            <Button type="primary" size="large" icon={<MailOutlined />} href="mailto:shykrusolutions@gmail.com" style={{ height: '50px', padding: '0 40px', fontSize: '16px', fontWeight: 600 }}>
              Send Your CV
            </Button>
          </div>
        </div>
      </div>

      {/* --- 2. BENEFITS SECTION (Styled Cards) --- */}
      <div style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title level={2} style={{ color: '#001529' }}>Why Build a Career Here?</Title>
            <Text type="secondary" style={{ fontSize: '16px' }}>Growth, Safety, and Technical Excellence.</Text>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card hoverable  
                style={{ height: '100%', textAlign: 'center', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderRadius: '16px' }}
                bodyStyle={{ padding: '40px 20px' }}
              >
                <Avatar size={80} icon={<RocketOutlined />} style={{ backgroundColor: '#e6f7ff', color: '#1890ff', marginBottom: '20px' }} />
                <Title level={4}>Fast-Track Growth</Title>
                <Paragraph type="secondary">
                  Direct exposure to project management and on-site execution in a lean, agile OPC environment.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card hoverable  
                style={{ height: '100%', textAlign: 'center', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderRadius: '16px' }}
                bodyStyle={{ padding: '40px 20px' }}
              >
                <Avatar size={80} icon={<SafetyCertificateFilled />} style={{ backgroundColor: '#fff7e6', color: '#faad14', marginBottom: '20px' }} />
                <Title level={4}>Safety First</Title>
                <Paragraph type="secondary">
                  We don't compromise. Top-tier PPE and strict adherence to Indian Railway safety protocols.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card hoverable  
                style={{ height: '100%', textAlign: 'center', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderRadius: '16px' }}
                bodyStyle={{ padding: '40px 20px' }}
              >
                <Avatar size={80} icon={<TeamOutlined />} style={{ backgroundColor: '#f6ffed', color: '#52c41a', marginBottom: '20px' }} />
                <Title level={4}>Expert Mentorship</Title>
                <Paragraph type="secondary">
                  Learn directly from industry veterans with 10+ years of experience in Electrification.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      

[Image of construction workers discussing blueprints on site]


      {/* --- 3. CURRENT OPENINGS (Polished List) --- */}
      <div style={{ padding: '80px 20px', background: '#f5f7fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Row align="middle" justify="space-between" style={{ marginBottom: '40px' }}>
            <Col>
              <Title level={2} style={{ margin: 0, color: '#001529' }}>Open Positions</Title>
            </Col>
            <Col>
              <Text type="secondary">Location: Kerala & Tamil Nadu</Text>
            </Col>
          </Row>
          
          <List
            grid={{ gutter: 24, column: 1 }}
            dataSource={jobs}
            renderItem={item => (
              <List.Item>
                <Card hoverable  
                  style={{ borderRadius: '12px', border: '1px solid #f0f0f0', overflow: 'hidden' }}
                  bodyStyle={{ padding: '30px' }}
                >
                  <Row gutter={[24, 24]} align="middle">
                    <Col xs={24} md={16}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                         <Title level={4} style={{ margin: 0 }}>{item.title}</Title>
                         {item.type === 'Full Time' && <CheckCircleFilled style={{ color: '#1890ff' }} />}
                      </div>
                      
                      <div style={{ marginBottom: '15px' }}>
                        <Tag color={item.color}>{item.type}</Tag>
                        <Tag icon={<EnvironmentOutlined />} color="default">{item.location}</Tag>
                        <Tag icon={<ToolOutlined />} color="default">{item.experience}</Tag>
                      </div>
                      
                      <Paragraph type="secondary" style={{ fontSize: '15px', marginBottom: '20px' }}>
                        {item.description}
                      </Paragraph>
                      
                      <div>
                        {item.skills.map(skill => (
                          <Tag key={skill} style={{ background: '#fafafa', border: '1px solid #d9d9d9', color: '#595959', borderRadius: '4px' }}>
                            {skill}
                          </Tag>
                        ))}
                      </div>
                    </Col>
                    
                    {/* Action Side */}
                    <Col xs={24} md={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #f0f0f0', paddingLeft: '20px' }}>
                       <Text type="secondary" style={{ marginBottom: '10px' }}>Interested?</Text>
                       <Button 
                         type="primary" 
                         shape="round"
                         size="large"
                         icon={<SendOutlined />}
                         href={`mailto:shykrusolutions@gmail.com?subject=Application for ${item.title}`}
                         style={{ width: '100%' }}
                       >
                         Apply via Email
                       </Button>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>

      {/* --- 4. GENERAL APPLICATION (Clean Alert Box) --- */}
      <div style={{ padding: '60px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Alert
            message={<Title level={4} style={{ margin: 0 }}>General Applications</Title>}
            description={
              <div style={{ marginTop: '10px' }}>
                <Paragraph>
                  Don't see a role that fits? We are always hiring skilled engineers and riggers.
                </Paragraph>
                <Paragraph style={{ margin: 0 }}>
                  <strong>To Apply:</strong> Send your CV to <a href="mailto:shykrusolutions@gmail.com">shykrusolutions@gmail.com</a> with the subject line "General Application - [Your Trade]".
                </Paragraph>
              </div>
            }
            type="info"
            showIcon
            icon={<MailOutlined style={{ fontSize: '24px' }} />}
            style={{ borderRadius: '8px', border: '1px solid #91d5ff', background: '#e6f7ff', padding: '20px' }}
          />
        </div>
      </div>

    </div>
  );
};

export default Careers;