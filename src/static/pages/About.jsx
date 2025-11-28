import React from "react";
import { Typography, Row, Col, Card, Timeline, Tag, Avatar, Divider, Descriptions, Statistic } from "antd";
import { 
  UserOutlined, 
  RocketOutlined, 
  BuildFilled,
  CheckCircleFilled
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <div className="about-page">
      
      {/* --- 1. HERO HEADER --- */}
      <div style={{ background: '#f0f2f5', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Tag color="blue" style={{ marginBottom: '15px', padding: '5px 15px', fontSize: '12px' }}>
            ESTABLISHED FEB 2024
          </Tag>
          <Title level={1} style={{ color: '#001529', marginBottom: '20px' }}>
            Building Infrastructure with Integrity
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#595959', maxWidth: '700px', margin: '0 auto' }}>
            SHYKRU SOLUTIONS (OPC) PRIVATE LIMITED is a registered Non-Government Company 
            dedicated to strengthening Kerala's Railway and Civil infrastructure through 
            engineering precision and transparent practices.
          </Paragraph>
        </div>
      </div>

      {/* --- 2. THE DIRECTOR'S PROFILE --- */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <Row gutter={[48, 48]} align="middle">
          
          {/* Left: Director Card */}
          <Col xs={24} md={10}>
            <Card 
              hoverable
              style={{ borderRadius: '16px', borderTop: '5px solid #faad14', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              bodyStyle={{ padding: '40px 20px' }}
            >
              <Avatar 
                size={130} 
                icon={<UserOutlined />} 
                style={{ backgroundColor: '#f0f2f5', color: '#faad14', marginBottom: '20px' }} 
              />
              <Title level={3} style={{ marginBottom: '5px', color: '#001529' }}>Shyamkumar Krishnakumar</Title>
              <Text type="secondary" style={{ fontSize: '16px', fontWeight: 600, color: '#1890ff' }}>Founder & Director</Text>
              
              <Divider />
              
              <Row gutter={16}>
                <Col span={12}>
                  {/* --- APPLIED THE STYLE HERE --- */}
                  <Statistic 
                    title="Industry Exp." 
                    value="10+" 
                    suffix="Yrs" 
                    valueStyle={{ fontSize: '16px', fontWeight: 'bold' }} 
                  />
                </Col>
                <Col span={12}>
                   {/* --- APPLIED THE STYLE HERE --- */}
                   <Statistic 
                     title="Focus" 
                     value="Rail/Civil" 
                     valueStyle={{ fontSize: '16px', fontWeight: 'bold' }} 
                   />
                </Col>
              </Row>

              <Divider />
              
              <Paragraph style={{ fontStyle: 'italic', fontSize: '15px', color: '#595959' }}>
                "Our mission is to bring professional, compliant, and timely execution to the Railway Electrification sector in Palakkad and beyond. As an OPC, I am personally committed to the quality of every project we undertake."
              </Paragraph>
            </Card>
          </Col>

          {/* Right: The Company Narrative */}
          <Col xs={24} md={14}>
            <Title level={2} style={{ color: '#001529' }}>A New Wave of Engineering</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Incorporated on <strong>13th February 2024</strong>, Shykru Solutions represents a modern approach to infrastructure development in Kerala. Headquartered in <strong>Olavakkot, Palakkad</strong>, we are strategically positioned to serve the Southern Railway zone efficiently.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Unlike traditional firms, our structure as an <strong>OPC (One Person Company)</strong> allows for faster decision-making, direct accountability, and a leaner operational model. This ensures that your projects—whether heavy logistics or traction substation works—are executed without bureaucratic delays.
            </Paragraph>
            
            <div style={{ marginTop: '30px' }}>
              <Title level={5}>Our Compliance Guarantee:</Title>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <Card size="small" style={{ background: '#f6ffed', borderColor: '#b7eb8f' }}>
                    <CheckCircleFilled style={{ color: '#52c41a', marginRight: '8px' }} /> 
                    <strong>MCA Registered</strong>
                  </Card>
                </Col>
                <Col xs={24} sm={12}>
                  <Card size="small" style={{ background: '#e6f7ff', borderColor: '#91d5ff' }}>
                    <CheckCircleFilled style={{ color: '#1890ff', marginRight: '8px' }} /> 
                    <strong>Pvt Ltd Liability</strong>
                  </Card>
                </Col>
                <Col xs={24} sm={12}>
                  <Card size="small" style={{ background: '#fff7e6', borderColor: '#ffd591' }}>
                    <CheckCircleFilled style={{ color: '#faad14', marginRight: '8px' }} /> 
                    <strong>MSME Compliant</strong>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      {/* --- 3. VISION & MISSION --- */}
      <div style={{ background: '#001529', padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[48, 48]}>
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <RocketOutlined style={{ fontSize: '40px', color: '#40a9ff', marginTop: '5px' }} />
                <div>
                  <Title level={3} style={{ color: 'white', marginTop: 0 }}>Our Vision</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }}>
                    To become the most trusted execution partner for Government Infrastructure projects in Kerala, recognized for safety, speed, and 100% statutory compliance.
                  </Paragraph>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <BuildFilled style={{ fontSize: '40px', color: '#faad14', marginTop: '5px' }} />
                <div>
                  <Title level={3} style={{ color: 'white', marginTop: 0 }}>Our Mission</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }}>
                    To leverage technical expertise and efficient logistics to deliver OHE and Civil Engineering projects that meet the rigorous standards of Indian Railways.
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* --- 4. CORPORATE TIMELINE & LEGAL DATA --- */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '50px', color: '#001529' }}>Our Journey & Legal Standing</Title>
        
        <Row gutter={[64, 48]}>
          <Col xs={24} md={12}>
            <Timeline mode="left">
              <Timeline.Item color="green" label="Feb 2024">
                <strong>Incorporation</strong><br/>
                Registered as OPC Pvt Ltd under RoC-Ernakulam.
              </Timeline.Item>
              <Timeline.Item color="blue" label="Mar 2024">
                <strong>HQ Establishment</strong><br/>
                Setup of Corporate Office at BRM Complex, Palakkad.
              </Timeline.Item>
              <Timeline.Item color="orange" label="Present">
                <strong>Active Operations</strong><br/>
                Executing Logistics & Civil Engineering tenders in Kerala/TN.
              </Timeline.Item>
            </Timeline>
          </Col>

          <Col xs={24} md={12}>
            <Descriptions 
              title="Statutory Details" 
              bordered 
              column={1} 
              size="small"
              // Corrected styles prop for Ant Design v5
              styles={{
                label: { fontWeight: 'bold', background: '#fafafa', width: '140px' },
                content: { background: '#fff' }
              }}
            >
              <Descriptions.Item label="Legal Status">Private Limited (OPC)</Descriptions.Item>
              <Descriptions.Item label="CIN">U42909KL2024OPC086130</Descriptions.Item>
              <Descriptions.Item label="Registration">086130</Descriptions.Item>
              <Descriptions.Item label="Auth. Capital">₹ 10,00,000</Descriptions.Item>
              <Descriptions.Item label="Paid-up Capital">₹ 50,000</Descriptions.Item>
              <Descriptions.Item label="Registrar">RoC-Ernakulam</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default About;