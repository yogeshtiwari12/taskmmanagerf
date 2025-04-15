import React, { useState } from 'react';
import { Card, Form, Input, DatePicker, Select, Button, Row, Col, Typography, Space, Divider } from 'antd';
import { FireOutlined, CalendarOutlined, SaveOutlined, CloseOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';
import { url } from './url';

import axios from 'axios';
import moment from 'moment';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

function Addtask() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(moment().add(7, 'days'));
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Not Started');

  const handleSubmit = async () => {
    try {
      setLoading(true);
      
      const formattedDeadline = deadline ? deadline.toISOString() : '';
      
      const taskData = {
        title,
        description,
        deadline: formattedDeadline,
        progress: status,
        priority,
     
      };
      
      const response = await axios.post(
        `${url}/api/task/createtask`,
        taskData,
        { withCredentials: true }
      );
      
      if (response.data) {
        alert(response.data.message);
        console.log("Task created successfully:", response.data.message);
        
   
        resetForm();
      }
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Error creating task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDeadline(moment().add(7, 'days'));
    setPriority('Medium');
    setStatus('Not Started');
    form.resetFields();
  };

 

  const handleCancel = () => {
    resetForm();
    if (onCancel) {
      onCancel();
    }
  };

  const onFinish = (values) => {
    setTitle(values.title);
    setDescription(values.description || '');
    setDeadline(values.deadline);
    setPriority(values.priority);
    setStatus(values.status);
    
    handleSubmit();
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #f8fcff 100%)'
    }}>
      <Card
        style={{
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          maxWidth: '700px',
          width: '100%',
          border: 'none',
          background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'linear-gradient(135deg, #1890ff 0%, #52c41a 100%)', 
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 16px auto',
            boxShadow: '0 4px 10px rgba(24,144,255,0.25)'
          }}>
            <PlusOutlined style={{ fontSize: '28px', color: 'white' }} />
          </div>
          <Title level={3} style={{ 
            margin: '0 0 8px 0', 
            fontSize: '28px',
            fontWeight: 600,
            color: '#262626',
            background: 'linear-gradient(90deg, #1890ff 0%, #52c41a 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent'
          }}>
            Create New Task
          </Title>
          <Text type="secondary" style={{ fontSize: '16px', display: 'block' }}>
            Add details below to create a new task for your project
          </Text>
        </div>

        <Divider style={{ margin: '16px 0 32px 0' }} />

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            title: title,
            description: description,
            priority: priority,
            status: status,
            deadline: deadline
          }}
          requiredMark={false}
        >
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                name="title"
                label={<Text strong style={{ fontSize: '16px' }}>Task Title</Text>}
                rules={[{ required: true, message: 'Please enter a task title' }]}
              >
                <Input 
                  placeholder="Enter task title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  size="large"
                  style={{ 
                    borderRadius: '10px', 
                    height: '50px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    fontSize: '16px'
                  }}
                />
              </Form.Item>
            </Col>
            
            <Col span={24}>
              <Form.Item
                name="description"
                label={<Text strong style={{ fontSize: '16px' }}>Description</Text>}
              >
                <TextArea 
                  placeholder="Enter task description" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  style={{ 
                    borderRadius: '10px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    fontSize: '16px',
                    padding: '12px'
                  }}
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} md={8}>
              <Form.Item
                name="deadline"
                label={
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>
                    <CalendarOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
                    Deadline
                  </div>
                }
                rules={[{ required: true, message: 'Please select a deadline' }]}
              >
                <DatePicker 
                  value={deadline}
                  onChange={(date) => setDeadline(date)}
                  style={{ 
                    width: '100%', 
                    borderRadius: '10px',
                    height: '50px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    fontSize: '16px'
                  }} 
                  size="large"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} md={8}>
              <Form.Item
                name="priority"
                label={<Text strong style={{ fontSize: '16px' }}>Priority Level</Text>}
                rules={[{ required: true, message: 'Please select priority' }]}
              >
                <Select
                  value={priority}
                  onChange={(value) => setPriority(value)}
                  size="large"
                  style={{ 
                    width: '100%', 
                    borderRadius: '10px',
                    height: '50px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    fontSize: '16px'
                  }}
                  dropdownStyle={{ borderRadius: '10px' }}
                >
                  <Option value="High">
                    <span style={{ color: '#f5222d', fontWeight: 500, fontSize: '16px' }}>
                      <FireOutlined style={{ marginRight: 8 }} />
                      High
                    </span>
                  </Option>
                  <Option value="Medium">
                    <span style={{ color: '#fa8c16', fontWeight: 500, fontSize: '16px' }}>
                      <span style={{ marginRight: 8 }}>⚡</span>
                      Medium
                    </span>
                  </Option>
                  <Option value="Low">
                    <span style={{ color: '#52c41a', fontWeight: 500, fontSize: '16px' }}>
                      <span style={{ marginRight: 8 }}>•</span>
                      Low
                    </span>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            
            <Col xs={24} md={8}>
              <Form.Item
                name="status"
                label={<Text strong style={{ fontSize: '16px' }}>Initial Status</Text>}
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Select
                  value={status}
                  onChange={(value) => setStatus(value)}
                  size="large"
                  style={{ 
                    width: '100%', 
                    borderRadius: '10px',
                    height: '50px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    fontSize: '16px'
                  }}
                  dropdownStyle={{ borderRadius: '10px' }}
                >
                  <Option value="Not Started">
                    <span style={{ color: '#d9d9d9', fontWeight: 500, fontSize: '16px' }}>Not Started</span>
                  </Option>
                  <Option value="In Progress">
                    <span style={{ color: '#1890ff', fontWeight: 500, fontSize: '16px' }}>In Progress</span>
                  </Option>
                  <Option value="On Hold">
                    <span style={{ color: '#faad14', fontWeight: 500, fontSize: '16px' }}>On Hold</span>
                  </Option>
                  <Option value="Completed">
                    <span style={{ color: '#52c41a', fontWeight: 500, fontSize: '16px' }}>Completed</span>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          
          <Divider style={{ margin: '16px 0 32px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            <Button 
              onClick={handleCancel}
              size="large"
              icon={<CloseOutlined />}
              style={{ 
                borderRadius: '10px',
                fontWeight: 600,
                width: '160px',
                height: '50px',
                fontSize: '16px'
              }}
            >
              Cancel
            </Button>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              size="large"
              icon={loading ? null : <CheckOutlined />}
              style={{ 
                borderRadius: '10px',
                fontWeight: 600,
                background: 'linear-gradient(90deg, #1890ff 0%, #52c41a 100%)',
                border: 'none',
                width: '160px',
                height: '50px',
                fontSize: '16px',
                boxShadow: '0 4px 15px rgba(24,144,255,0.25)'
              }}
            >
              Create Task
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Addtask; 
