import React from "react";
import { Typography, Row, Col, Card, Avatar, Tag, Button, Divider } from "antd";
import { 
  ThunderboltOutlined, 
  TruckOutlined, 
  TeamOutlined, 
  BankOutlined, 
  SafetyCertificateFilled, 
  ControlOutlined,
  ExperimentOutlined,
  DropboxOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
  CheckCircleFilled
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Services = () => {

  // --- SERVICE DATA ---
  const services = [
    {
      category: "Railway Electrification",
      description: "End-to-end execution of high-voltage traction systems for Indian Railways & Metros.",
      color: "#1890ff", // Blue
      icon: <ThunderboltOutlined />,
      subServices: [
        {
          title: "OHE Installation",
          icon: <ThunderboltOutlined />,
          desc: "Erection of masts, cantilevers, and contact wire stringing for 25kV AC traction.",
          badge: "CORE Compliant"
        },
        {
          title: "Traction Substations (TSS)",
          icon: <BankOutlined />,
          desc: "Civil and electrical construction of TSS, SP, and SSP units.",
          badge: "Turnkey"
        },
        {
          title: "SCADA & Power Supply",
          icon: <ControlOutlined />,
          desc: "Installation of Remote Control Centers (RCC) and auxiliary power systems.",
          badge: "Automation"
        },
        {
          title: "Testing & Commissioning",
          icon: <ExperimentOutlined />,
          desc: "Pre-commissioning tests, EIG inspection support, and grid synchronization.",
          badge: "NABL Equip"
        }
      ]
    },
    {
      category: "Transportation & Logistics",
      description: "Specialized fleet management for ODC (Over Dimensional Cargo) and industrial machinery.",
      color: "#52c41a", // Green
      icon: <TruckOutlined />,
      subServices: [
        {
          title: "Heavy Machinery Transport",
          icon: <TruckOutlined />,
          desc: "Relocation of Transformers, Turbines, and CNC machines using hydraulic axles.",
          badge: "Heavy Load"
        },
        {
          title: "Nationwide Delivery",
          icon: <GlobalOutlined />,
          desc: "Seamless logistics network covering Kerala, Tamil Nadu, and Pan-India routes.",
          badge: "GPS Tracked"
        },
        {
          title: "Industrial Packaging",
          icon: <DropboxOutlined />,
          desc: "Wooden crating and palletizing for safe transit of sensitive electronic panels.",
          badge: "Secure"
        },
        {
          title: "Material Handling",
          icon: <ControlOutlined />,
          desc: "On-site loading/unloading services using our own Cranes and Forklifts.",
          badge: "Safety 1st"
        }
      ]
    },
    {
      category: "On-Site Technical Support",
      description: "Deployment of certified manpower and engineering consultancy for infrastructure projects.",
      color: "#faad14", // Orange
      icon: <TeamOutlined />,
      subServices: [
        {
          title: "Skilled Manpower",
          icon: <TeamOutlined />,
          desc: "Supply of Electricians, Riggers, and Fitters for short/long term contracts.",
          badge: "Certified"
        },
        {
          title: "Railway Consultancy",
          icon: <SafetyCertificateFilled />,
          desc: "Project planning, BoQ estimation, and liaison with Railway officials.",
          badge: "Expert"
        },
        {
          title: "Maintenance Services",
          icon: <ControlOutlined />,
          desc: "Annual Maintenance Contracts (AMC) for substations and industrial grids.",
          badge: "24/7 Support"
        },
        {
          title: "Safety Audits",
          icon: <SafetyCertificateFilled />,
          desc: "Third-party inspection of site safety protocols and electrical grounding.",
          badge: "ISO 45001"
        }
      ]
    }
  ];

  return (
    <div className="services-page">
      
      {/* --- 1. HERO HEADER --- */}
      <div style={{ 
        background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)', 
        padding: '100px 20px', 
        textAlign: 'center', 
        color: 'white' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Tag color="geekblue" style={{ marginBottom: '15px', fontWeight: 'bold' }}>TECHNICAL EXPERTISE</Tag>
          <Title level={1} style={{ color: 'white', marginBottom: '20px' }}>
            Engineering Services Portfolio
          </Title>
          <Paragraph style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '700px', margin: '0 auto' }}>
            We combine engineering precision with logistical efficiency to deliver complex infrastructure projects on time.
          </Paragraph>
        </div>
      </div>

      {/* --- 2. SERVICE SECTIONS LOOP --- */}
      <div style={{ background: '#f5f7fa', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {services.map((service, index) => (
            <div key={index} style={{ marginBottom: '80px' }}>
              
              {/* SECTION HEADER */}
              <div style={{ 
                marginBottom: '30px', 
                borderLeft: `6px solid ${service.color}`, 
                paddingLeft: '25px',
                background: '#fff',
                padding: '30px',
                borderRadius: '0 12px 12px 0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
                <Avatar 
                  size={64} 
                  style={{ backgroundColor: `${service.color}15`, color: service.color }} 
                  icon={React.cloneElement(service.icon, { style: { fontSize: '32px' } })}
                />
                <div style={{ flex: 1 }}>
                  <Title level={2} style={{ margin: 0, color: '#001529' }}>{service.category}</Title>
                  <Paragraph type="secondary" style={{ fontSize: '16px', margin: '5px 0 0 0' }}>
                    {service.description}
                  </Paragraph>
                </div>
              </div>

              {/* CARDS GRID */}
              <Row gutter={[24, 24]}>
                {service.subServices.map((sub, subIndex) => (
                  <Col xs={24} sm={12} lg={6} key={subIndex}>
                    <Card hoverable  
                      
                      style={{ 
                        height: '100%', 
                        borderRadius: '12px', 
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.03)' 
                      }}
                      bodyStyle={{ padding: '25px' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                        <div style={{ color: service.color, fontSize: '28px' }}>
                          {sub.icon}
                        </div>
                        <Tag color={service.color} style={{ borderRadius: '10px', fontSize: '11px', marginRight: 0 }}>
                          {sub.badge}
                        </Tag>
                      </div>
                      
                      <Title level={5} style={{ marginBottom: '10px', minHeight: '45px' }}>
                        {sub.title}
                      </Title>
                      
                      <Paragraph type="secondary" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: 0 }}>
                        {sub.desc}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>

            </div>
          ))}

        </div>
      </div>

      {/* --- 3. CTA FOOTER --- */}
      <div style={{ background: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={3}>Need a Customized Rate Card?</Title>
          <Paragraph style={{ fontSize: '16px', color: '#595959', marginBottom: '30px' }}>
            We offer competitive pricing for OHE Installation and Heavy Transport services. 
            Contact our tender department for an official quote.
          </Paragraph>
          <Link to="/contact">
            <Button type="primary" size="large" icon={<ArrowRightOutlined />} style={{ height: '45px', padding: '0 40px' }}>
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Services;