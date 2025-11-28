import React from "react";
import { Row, Col, Typography, Form, Input, Button, Card, Space, Divider, message } from "antd";
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  SendOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
  FacebookFilled,
  InstagramFilled
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  // --- Form Submission Handler ---
  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Simulate API call
    setTimeout(() => {
      message.success("Thank you! Your inquiry has been sent to our tender department.");
      form.resetFields();
    }, 1000);
  };

  return (
    <div id="contact-section" style={{ background: '#f0f2f5', padding: '60px 0' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Title level={1} style={{ color: '#001529' }}>Contact Us</Title>
          <Paragraph type="secondary" style={{ fontSize: '16px' }}>
            Reach out for Tenders, Careers, or Business Collaborations.
          </Paragraph>
        </div>

        <Row gutter={[48, 48]}>
          
          {/* --- LEFT COLUMN: Contact Info & Social Media --- */}
          <Col xs={24} md={10}>
            <Card hoverable  variant={false} style={{ height: '100%', background: 'transparent', boxShadow: 'none' }}>
              
              <Title level={3}>Corporate Office</Title>
              <Paragraph style={{ fontSize: '16px', color: '#595959' }}>
                <EnvironmentOutlined style={{ color: '#1890ff', marginRight: '10px' }} />
                <strong>Shykru Solutions Pvt. Ltd.</strong><br />
                NO.35344-1, Calicut Road <br/>
                BRM Complex First Floor<br/>
                 Olavakkot, Palakkad
                 <br/> Kerala, India-678002
              </Paragraph>

              <Divider />

              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '15px' }} />
                  <div>
                    <Text type="secondary" style={{ display: 'block' }}>General Enquiry</Text>
                    <Text strong style={{ fontSize: '16px' }} ><Link href="tel:4412345678">+91 44 1234 5678</Link></Text>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MailOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '15px' }} />
                  <div>
                    <Text type="secondary" style={{ display: 'block' }}>Tender Dept.</Text>
                    <Text strong style={{ fontSize: '16px' }}>tenders@shykru.com</Text>
                  </div>
                </div>
              </Space>

              <Divider />

              {/* --- SOCIAL MEDIA TAGS --- */}
              <Title level={5} style={{ marginBottom: '20px' }}>Follow Us</Title>
              <Space size="middle">
                <Button 
                  shape="circle" 
                  icon={<LinkedinFilled />} 
                  size="large" 
                  href="https://linkedin.com" 
                  target="_blank"
                  style={{ color: '#0077b5', borderColor: '#0077b5' }}
                />
                <Button 
                  shape="circle" 
                  icon={<TwitterSquareFilled />} 
                  size="large" 
                  href="https://twitter.com" 
                  target="_blank"
                  style={{ color: '#1DA1F2', borderColor: '#1DA1F2' }}
                />
                <Button 
                  shape="circle" 
                  icon={<FacebookFilled />} 
                  size="large" 
                  href="https://facebook.com" 
                  target="_blank"
                  style={{ color: '#4267B2', borderColor: '#4267B2' }}
                />
                <Button 
                  shape="circle" 
                  icon={<InstagramFilled />} 
                  size="large" 
                  href="https://instagram.com" 
                  target="_blank"
                  style={{ color: '#E1306C', borderColor: '#E1306C' }}
                />
              </Space>

            </Card>
          </Col>

          {/* --- RIGHT COLUMN: Inquiry Form --- */}
          <Col xs={24} md={14}>
            <Card hoverable  
              title="Send an Inquiry" 
              variant={false} 
              style={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Row gutter={16}>
                  {/* Name Field */}
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Full Name"
                      name="name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input placeholder="John Doe" size="large" />
                    </Form.Item>
                  </Col>

                  {/* Phone Number Field */}
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      rules={[
                        { required: true, message: 'Please enter your phone number' },
                        { pattern: /^[0-9]+$/, message: 'Please enter a valid number' }
                      ]}
                    >
                      <Input prefix={<PhoneOutlined style={{color: '#bfbfbf'}} />} placeholder="+91 9876543210" size="large" />
                    </Form.Item>
                  </Col>
                </Row>

                {/* Email Field */}
                <Form.Item
                  label="Email ID"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input prefix={<MailOutlined style={{color: '#bfbfbf'}} />} placeholder="company@example.com" size="large" />
                </Form.Item>

                {/* Message Field */}
                <Form.Item
                  label="Message / Tender Reference"
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea 
                    rows={5} 
                    placeholder="Regarding Project ID: #1234 or General Inquiry..." 
                    maxLength={500}
                    showCount
                  />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                  <Button type="primary" htmlType="submit" icon={<SendOutlined />} size="large" block style={{ height: '45px' }}>
                    Send Message
                  </Button>
                </Form.Item>

              </Form>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Contact;