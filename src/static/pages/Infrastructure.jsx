import React from "react";
import { Typography, Row, Col, Card, Tabs, Tag, List, Statistic, Divider } from "antd";
import { 
  TruckOutlined, 
  ThunderboltOutlined, 
  ToolOutlined, 
  SafetyCertificateFilled, 
  ExperimentOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Infrastructure = () => {

  // --- ASSET DATA ---
  const logisticsFleet = [
    { title: "Heavy Low-Bed Trailers", count: "On Demand", desc: "For transporting transformers & turbines." },
    { title: "Flatbed Trucks (40ft)", count: "Available", desc: "For steel girders and OHE masts." },
    { title: "Hydraulic Axles", count: "Partnered", desc: "Specialized for Over-Dimensional Cargo (ODC)." },
    { title: "Pickup Utilities", count: "Owned", desc: "For rapid site mobilization of manpower/tools." },
  ];

  const railwayTools = [
    { title: "OHE Wiring Train/Ladders", desc: "Manual and automated wiring platforms for mast work." },
    { title: "Tirfor & Pulling Machines", desc: "Heavy-duty tensioning equipment for conductor cabling." },
    { title: "Crimping Tools (Hydraulic)", desc: "For high-voltage cable jointing and termination." },
    { title: "Discharge Rods", desc: "Safety grounding equipment for line isolation." },
  ];

  const testingEquip = [
    { title: "5kV Insulation Tester", desc: "Megger for cable insulation resistance testing." },
    { title: "Earth Resistance Tester", desc: "Digital kits for substation grounding checks." },
    { title: "Micro-Ohm Meter", desc: "Contact resistance measurement for breakers." },
    { title: "Thermal Imaging Cam", desc: "For hotspot detection in electrical panels." },
  ];

  // --- NEW: Define Tabs as an Array of Objects (AntD v5 Standard) ---
  const tabItems = [
    {
      key: '1',
      label: <span><TruckOutlined /> Logistics Fleet</span>,
      children: (
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={10}>
             <img 
               src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" 
               alt="Heavy Truck Fleet" 
               style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
             />
          </Col>
          <Col xs={24} md={14}>
            <Title level={3}>Heavy Transport Capabilities</Title>
            <Paragraph type="secondary">
              Our logistics division is equipped to handle ODC (Over Dimensional Cargo) and standard heavy loads. 
              We ensure safe transit of Transformers, Turbines, and heavy Steel structures.
            </Paragraph>
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={logisticsFleet}
              renderItem={item => (
                <List.Item>
                  <Card hoverable size="small" title={item.title} extra={<Tag color="blue">{item.count}</Tag>}>
                    {item.desc}
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      )
    },
    {
      key: '2',
      label: <span><ThunderboltOutlined /> OHE & Electrification</span>,
      children: (
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title level={3}>Specialized Installation Gear</Title>
            <Paragraph type="secondary">
              Execution of Overhead Equipment (OHE) requires specialized tensioning and lifting tools. 
              We maintain a fully serviced inventory of stringing equipment.
            </Paragraph>
            <List
              itemLayout="horizontal"
              dataSource={railwayTools}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<ToolOutlined style={{ fontSize: '24px', color: '#faad14' }} />}
                    title={<Text strong>{item.title}</Text>}
                    description={item.desc}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={10}>
             <img 
               src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" 
               alt="Electrical Tools" 
               style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
             />
          </Col>
        </Row>
      )
    },
    {
      key: '3',
      label: <span><ExperimentOutlined /> Testing & Commissioning</span>,
      children: (
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Title level={3}>Precision Measurement Instruments</Title>
          <Paragraph>
            Accurate testing is the final step before grid synchronization. Our NABL-calibrated instruments ensure 
            compliance with Central Electricity Authority (CEA) regulations.
          </Paragraph>
          <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
            {testingEquip.map((item, idx) => (
              <Col xs={24} sm={12} md={6} key={idx}>
                <Card hoverable style={{ height: '100%', background: '#fff' }}>
                   <ExperimentOutlined style={{ fontSize: '30px', color: '#f5222d', marginBottom: '15px' }} />
                   <Title level={5}>{item.title}</Title>
                   <Text type="secondary" style={{ fontSize: '12px' }}>{item.desc}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )
    }
  ];

  return (
    <div className="infrastructure-page">
      
      {/* --- 1. HERO HEADER --- */}
      <div style={{ background: '#001529', padding: '80px 20px', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Tag color="cyan" style={{ marginBottom: '15px', fontWeight: 'bold' }}>ASSET CAPABILITY</Tag>
          <Title level={1} style={{ color: 'white', marginBottom: '20px' }}>
            Our Machinery & Tools
          </Title>
          <Paragraph style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>
            We own and manage a robust fleet of heavy machinery and precision testing instruments 
            required to execute Railway Electrification works without external dependency.
          </Paragraph>
        </div>
      </div>

      {/* --- 2. KEY STATS (Capacity Proof) --- */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', marginTop: '-40px' }}>
        <Card variant={false} style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={12} md={6} style={{ textAlign: 'center', borderRight: '1px solid #f0f0f0' }}>
               <Statistic title="Logistic Fleet Access" value="Pan-India" prefix={<TruckOutlined style={{color: '#1890ff'}} />} />
            </Col>
            <Col xs={12} md={6} style={{ textAlign: 'center', borderRight: '1px solid #f0f0f0' }}>
               <Statistic title="Storage Facility" value="Palakkad" prefix={<AppstoreOutlined style={{color: '#52c41a'}} />} />
            </Col>
            <Col xs={12} md={6} style={{ textAlign: 'center', borderRight: '1px solid #f0f0f0' }}>
               <Statistic title="Safety Rating" value="ISO Comp." prefix={<SafetyCertificateFilled style={{color: '#faad14'}} />} />
            </Col>
            <Col xs={12} md={6} style={{ textAlign: 'center' }}>
               <Statistic title="Testing Kits" value="Calibrated" prefix={<ExperimentOutlined style={{color: '#f5222d'}} />} />
            </Col>
          </Row>
        </Card>
      </div>

      {/* --- Visual Separator --- */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
         

[Image of engineering blueprints and safety helmet on a desk]

      </div>

      {/* --- 3. DETAILED ASSET BREAKDOWN (UPDATED TABS) --- */}
      <div style={{ padding: '60px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Use the new 'items' prop here instead of children TabPanes */}
          <Tabs 
            defaultActiveKey="1" 
            centered 
            type="card" 
            size="large" 
            style={{ marginBottom: '40px' }}
            items={tabItems} 
          />
          
        </div>
      </div>

      {/* --- 4. MAINTENANCE PROTOCOL --- */}
      <div style={{ padding: '60px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '40px' }}>Asset Maintenance Protocol</Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card title="Regular Calibration" variant={true}>
                <p>All testing instruments are calibrated annually by NABL accredited labs to ensure 100% accuracy.</p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Fleet Service Records" variant={true}>
                <p>Our transport fleet undergoes quarterly mechanical audits to prevent breakdowns during critical deliveries.</p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Safety Inspection" variant={true}>
                <p>Lifting gear (slings, pulleys) are load-tested before every major project deployment.</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  );
};

export default Infrastructure;