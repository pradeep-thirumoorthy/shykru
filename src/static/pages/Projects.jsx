import React, { useState } from "react";
import { Typography, Row, Col, Card, Tabs, Tag, Button, Image, Divider, Empty } from "antd";
import { 
  ProjectOutlined, 
  ThunderboltOutlined, 
  TruckOutlined, 
  EnvironmentOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  SyncOutlined,
  DownloadOutlined
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

const Projects = () => {

  // --- PROJECT DATA (Edit this with your real projects) ---
  // Status: "Completed" (Green) or "Ongoing" (Blue)
  const allProjects = [
    {
      id: 1,
      category: "Railway",
      title: "OHE Modification - Palakkad Div",
      client: "Southern Railway",
      location: "Palakkad, Kerala",
      status: "Ongoing",
      year: "2024-25",
      image: "https://images.unsplash.com/photo-1474487548417-781cb714c2f3?auto=format&fit=crop&q=80&w=600",
      description: "Modification of Overhead Equipment (OHE) for speed upgradation on the Palakkad-Shoranur section."
    },
    {
      id: 2,
      category: "Logistics",
      title: "50MVA Transformer Transport",
      client: "KSEB / Private Contractor",
      location: "Kochi to Coimbatore",
      status: "Completed",
      year: "Aug 2024",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      description: "Multi-axle transport of heavy transformer unit. Managed route survey and clearance permissions."
    },
    {
      id: 3,
      category: "Railway",
      title: "Traction Substation Maintenance",
      client: "L&T Construction (Sub-contract)",
      location: "Erode, Tamil Nadu",
      status: "Completed",
      year: "Feb 2024",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=600",
      description: "Routine maintenance and oil filtration of power transformers at TSS site."
    },
    {
      id: 4,
      category: "Logistics",
      title: "Steel Girder Delivery",
      client: "Infrastructure Corp",
      location: "Salem to Madurai",
      status: "Ongoing",
      year: "2024",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600",
      description: "Transporting 18m steel girders for bridge construction using extended flatbed trailers."
    }
  ];

  // Helper to filter projects
  const getProjects = (category) => {
    if (category === "All") return allProjects;
    return allProjects.filter(p => p.category === category);
  };

  return (
    <div className="projects-page">
      
      {/* --- 1. HERO HEADER --- */}
      <div style={{ 
        background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)', 
        padding: '80px 20px', 
        textAlign: 'center', 
        color: 'white' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Tag color="cyan" style={{ marginBottom: '15px', fontWeight: 'bold' }}>PORTFOLIO</Tag>
          <Title level={1} style={{ color: 'white', marginBottom: '20px' }}>
            Featured Projects
          </Title>
          <Paragraph style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '700px', margin: '0 auto' }}>
            A showcase of our engineering precision in Railway Electrification and reliability in Heavy Logistics across Southern India.
          </Paragraph>
        </div>
      </div>

      {/* --- 2. PROJECT GALLERY --- */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        <Tabs defaultActiveKey="1" centered type="card" size="large" style={{ marginBottom: '40px' }}>
          
          {/* TAB: ALL PROJECTS */}
          <TabPane tab={<span><ProjectOutlined /> All Works</span>} key="1">
             <ProjectGrid data={getProjects("All")} />
          </TabPane>

          {/* TAB: RAILWAY */}
          <TabPane tab={<span><ThunderboltOutlined /> Electrification</span>} key="2">
             <ProjectGrid data={getProjects("Railway")} />
          </TabPane>

          {/* TAB: LOGISTICS */}
          <TabPane tab={<span><TruckOutlined /> Logistics</span>} key="3">
             <ProjectGrid data={getProjects("Logistics")} />
          </TabPane>

        </Tabs>
      </div>

      {/* --- 3. DOWNLOAD CAPABILITY STATEMENT --- */}
      <div style={{ background: '#f0f2f5', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={3}>Need Detailed Case Studies?</Title>
          <Paragraph>
            We maintain detailed technical reports for all completed works to support tender qualifications.
          </Paragraph>
          <Button type="primary" icon={<DownloadOutlined />} size="large" href="/contact">
            Request Capability Statement
          </Button>
        </div>
      </div>

    </div>
  );
};

// --- SUB-COMPONENT: The Grid of Cards ---
const ProjectGrid = ({ data }) => {
  if (data.length === 0) return <Empty description="No projects listed in this category yet." />;

  return (
    <Row gutter={[32, 32]}>
      {data.map((project) => (
        <Col xs={24} md={12} lg={8} key={project.id}>
          <Card hoverable 
            style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #f0f0f0'
            }}
            cover={
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <Image 
                  alt={project.title} 
                  src={project.image} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  preview={false} // Disable popup if you want it simple
                />
                {/* Status Badge Overlay */}
                <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
                   {project.status === "Completed" ? (
                     <Tag color="success" icon={<CheckCircleFilled />}>COMPLETED</Tag>
                   ) : (
                     <Tag color="processing" icon={<SyncOutlined spin />}>ONGOING</Tag>
                   )}
                </div>
              </div>
            }
          >
            <div style={{ flex: 1 }}>
              <Text type="secondary" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {project.category}
              </Text>
              
              <Title level={4} style={{ margin: '5px 0 15px 0', minHeight: '50px' }}>
                {project.title}
              </Title>
              
              <div style={{ marginBottom: '15px' }}>
                <Paragraph type="secondary" ellipsis={{ rows: 3 }}>
                   {project.description}
                </Paragraph>
              </div>

              <Divider style={{ margin: '15px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Text strong style={{ fontSize: '13px' }}>
                   <EnvironmentOutlined style={{ color: '#1890ff', marginRight: '8px' }} /> 
                   {project.location}
                </Text>
                <Text type="secondary" style={{ fontSize: '13px' }}>
                   <strong>Client:</strong> {project.client}
                </Text>
                <Text type="secondary" style={{ fontSize: '13px' }}>
                   <CalendarOutlined style={{ marginRight: '8px' }} /> 
                   {project.year}
                </Text>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;