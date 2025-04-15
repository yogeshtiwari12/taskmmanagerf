import React, { useEffect, useState } from 'react';
import { Card, Button, Progress, Tag, Table, Typography, Row, Col, Space, Divider, Dropdown, Menu, Badge, Avatar, List, Modal, Form, Input, DatePicker, Select, Slider } from 'antd';
import { DownOutlined, CalendarOutlined, FireOutlined, CheckCircleOutlined, ClockCircleOutlined, PlusOutlined, EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';
// import Addtask from './addtask';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserTasks } from '../redux/authslice';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

function Dashboard() {
  const dispatch = useDispatch();
  const { tasks, taskLoading, taskError, taskSuccess } = useSelector((state) => state.auth);

  const [activeFilter, setActiveFilter] = useState('all');
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchUserTasks());
  }, [dispatch]);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenSize < 768; // Breakpoint for mobile view

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const getFilteredTasks = () => {
    if (!tasks) return [];
    
    switch (activeFilter) {
      case 'inprogress':
        return tasks.filter(task => task.progress === 'In Progress');
      case 'completed':
        return tasks.filter(task => task.progress === 'Completed' || task.completed);
      case 'highpriority':
        return tasks.filter(task => task.priority === 'High');
      case 'all':
      default:
        return tasks;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#f5222d';
      case 'Medium':
        return '#fa8c16';
      case 'Low':
        return '#52c41a';
      default:
        return '#1890ff';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High':
        return <FireOutlined style={{ marginRight: 8 }} />;
      case 'Medium':
        return <span style={{ marginRight: 8 }}>⚡</span>;
      case 'Low':
        return <span style={{ marginRight: 8 }}>•</span>;
      default:
        return null;
    }
  };

  const getProgressStatus = (percent) => {
    if (percent === 100) return 'success';
    if (percent > 50) return 'active';
    return 'normal';
  };

  const getProgressColor = (percent) => {
    if (percent === 100) return { from: '#52c41a', to: '#52c41a' };
    if (percent > 70) return { from: '#1890ff', to: '#52c41a' };
    if (percent > 30) return { from: '#1890ff', to: '#1890ff' };
    return { from: '#faad14', to: '#1890ff' };
  };

  const renderStatusBadge = (progress) => {
    const statusColor = progress === 'Completed' ? '#52c41a' : 
                      progress === 'In Progress' ? '#1890ff' : '#faad14';
    const statusIcon = progress === 'Completed' ? <CheckCircleOutlined /> : 
                      progress === 'In Progress' ? <ClockCircleOutlined /> : 
                      <ClockCircleOutlined />;
    
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: '6px 12px',
        borderRadius: '16px', 
        background: `${statusColor}15`,
        border: `1px solid ${statusColor}30`,
        width: 'fit-content' 
      }}>
        {statusIcon}
        <Text style={{ 
          color: statusColor,
          fontWeight: 600,
          fontSize: '14px',
          whiteSpace: 'nowrap'
        }}>
          {progress}
        </Text>
      </div>
    );
  };

  const renderPriorityBadge = (priority) => {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '8px 12px',
        borderRadius: '20px', 
        background: `${getPriorityColor(priority)}15`,
        border: `1px solid ${getPriorityColor(priority)}30`,
        width: 'fit-content',
        whiteSpace: 'nowrap'
      }}>
        {getPriorityIcon(priority)}
        <Text style={{ 
          color: getPriorityColor(priority), 
          fontSize: '16px', 
          fontWeight: 600,
          fontFamily: "'Segoe UI', 'Poppins', sans-serif"
        }}>
          {priority}
        </Text>
      </div>
    );
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    form.setFieldsValue({
      title: task.title,
      description: task.description,
      deadline: moment(task.deadline),
      priority: task.priority,
      progress: task.progress
    });
    setEditModalVisible(true);
  };

  const handleEditCancel = () => {
    setEditModalVisible(false);
    setCurrentTask(null);
    form.resetFields();
  };

  async function handleedittask(taskId, taskData) {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/task/updatetask/${taskId}`, 
        taskData,
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }

  const handleEditSubmit = async (values) => {
    try {
      setLoading(true);

      let progressPercentage;
      switch (values.progress) {
        case 'Completed':
          progressPercentage = 100;
          break;
        case 'In Progress':
          progressPercentage = 50;
          break;
        case 'On Hold':
          progressPercentage = 25;
          break;
        case 'Not Started':
          progressPercentage = 0;
          break;
        case 'Cancelled':
          progressPercentage = 0;
          break;
        default:
          progressPercentage = 0;
      }
      
      const taskData = {
        title: values.title,
        description: values.description,
        deadline: values.deadline.toISOString(),
        priority: values.priority,
        progress: values.progress,
        progressPercentage: progressPercentage,
        completed: values.progress === 'Completed'
      };
      
      await handleedittask(currentTask._id, taskData);
      
      dispatch(fetchUserTasks());
      
      setEditModalVisible(false);
      setCurrentTask(null);
      form.resetFields();
    } catch (error) {
      alert("Failed to update task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (taskId) => {
    setTaskToDelete(taskId);
    setDeleteModalVisible(true);
  };

  const handleDeleteCancel = () => {
    setTaskToDelete(null);
    setDeleteModalVisible(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `http://localhost:4000/api/task/deletetask/${taskToDelete}`,
        { withCredentials: true }
      );
      
      dispatch(fetchUserTasks());
      setDeleteModalVisible(false);
      setTaskToDelete(null);
    } catch (error) {
      console.error("Error deleting task:", error);
      Modal.error({
        title: 'Error',
        content: 'Failed to delete task. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Task', 
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div style={{ marginLeft: '12px' }}>
          <Text strong style={{ fontSize: '20px', fontFamily: "'Segoe UI', 'Poppins', sans-serif", color: '#262626' }}>{text}</Text>
          <div style={{ marginTop: '8px' }}>
            <Text style={{ fontSize: '15px', color: '#595959', fontFamily: "'Segoe UI', 'Poppins', sans-serif" }}>{record.description}</Text>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
            <CalendarOutlined style={{ color: '#8c8c8c', marginRight: '8px' }} />
            <Text type="secondary" style={{ fontSize: '15px', fontFamily: "'Segoe UI', 'Poppins', sans-serif" }}>
              Due: {new Date(record.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </Text>
          </div>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'progress',
      key: 'status',
      width: 150,
      render: (progress) => renderStatusBadge(progress),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      width: 140,
      render: (priority) => renderPriorityBadge(priority),
    },
    {
      title: 'Progress',
      dataIndex: 'progressPercentage',
      key: 'progress',
      width: 220,
      render: (percent, record) => {
        const progressValue = percent || record.progressPercent || 0;
        
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <Text style={{ fontWeight: 500, color: '#595959' }}>Completion</Text>
              <Text style={{ fontWeight: 600, color: '#262626' }}>{progressValue}%</Text>
            </div>
            <Progress 
              percent={progressValue} 
              status={getProgressStatus(progressValue)} 
              strokeColor={{ 
                '0%': getProgressColor(progressValue).from, 
                '100%': getProgressColor(progressValue).to 
              }}
              style={{ height: '16px' }}
              strokeWidth={10}
              trailColor="#f0f0f0"
            />
          </div>
        );
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button 
            size="large" 
            type="primary" 
            onClick={() => openEditModal(record)}
            style={{ 
              borderRadius: '6px', 
              fontWeight: 500,
              fontFamily: "'Segoe UI', 'Poppins', sans-serif",
              boxShadow: '0 2px 4px rgba(24,144,255,0.2)'
            }}
          >
            Edit
          </Button>
          <Button 
            size="large" 
            danger 
            onClick={() => handleDeleteClick(record._id)}
            style={{ 
              borderRadius: '6px', 
              fontWeight: 500,
              fontFamily: "'Segoe UI', 'Poppins', sans-serif",
              boxShadow: '0 2px 4px rgba(245,34,45,0.1)'
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    }
  ];

  const renderMobileTaskCard = (item) => {
    return (
      <Card 
        key={item._id}
        style={{ 
          marginBottom: '16px', 
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: 'none'
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <Text strong style={{ fontSize: '18px', color: '#262626', display: 'block', marginBottom: '8px' }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: '14px', color: '#595959', display: 'block', marginBottom: '12px' }}>
            {item.description}
          </Text>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <CalendarOutlined style={{ color: '#8c8c8c', marginRight: '8px' }} />
            <Text type="secondary" style={{ fontSize: '14px' }}>
              Due: {new Date(item.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </Text>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {renderStatusBadge(item.progress)}
          {renderPriorityBadge(item.priority)}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <Text style={{ fontWeight: 500, color: '#595959', fontSize: '14px' }}>Completion</Text>
            <Text style={{ fontWeight: 600, color: '#262626', fontSize: '14px' }}>
              {item.progressPercentage || item.progressPercent || 0}%
            </Text>
          </div>
          <Progress 
            percent={item.progressPercentage || item.progressPercent || 0} 
            status={getProgressStatus(item.progressPercentage || item.progressPercent || 0)} 
            strokeColor={{ 
              '0%': getProgressColor(item.progressPercentage || item.progressPercent || 0).from, 
              '100%': getProgressColor(item.progressPercentage || item.progressPercent || 0).to 
            }}
            style={{ height: '14px' }}
            strokeWidth={8}
            trailColor="#f0f0f0"
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <Button 
            type="primary" 
            icon={<EditOutlined />}
            onClick={() => openEditModal(item)}
            style={{ 
              borderRadius: '6px', 
              fontWeight: 500,
              flex: 1,
              boxShadow: '0 2px 4px rgba(24,144,255,0.2)'
            }}
          >
            Edit
          </Button>
          <Button 
            danger 
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteClick(item._id)}
            style={{ 
              borderRadius: '6px', 
              fontWeight: 500,
              flex: 1,
              boxShadow: '0 2px 4px rgba(245,34,45,0.1)'
            }}
          >
            Delete
          </Button>
        </div>
      </Card>
    );
  };

  // const handleAddTask = (newTask) => {
  //   dispatch(fetchUserTasks());
  //   setAddTaskModalVisible(false);
  // };

  const totalTasks = tasks ? tasks.length : 0;
  const completedTasks = tasks ? tasks.filter(task => task.completed || task.progress === 'Completed').length : 0;
  const inProgressTasks = tasks ? tasks.filter(task => task.progress === 'In Progress').length : 0;
  const highPriorityTasks = tasks ? tasks.filter(task => task.priority === 'High').length : 0;

  return (
    <div style={{ 
      padding: '20px', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #f8fcff 100%)', 
      minHeight: '100vh', 
      fontFamily: "'Segoe UI', 'Poppins', sans-serif" 
    }}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card 
            style={{ 
              borderRadius: '12px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
              background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <Title level={3} style={{ 
                  fontSize: '28px', 
                  marginBottom: '8px', 
                  background: 'linear-gradient(90deg, #1890ff 0%, #52c41a 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Segoe UI', 'Poppins', sans-serif",
                  fontWeight: 600
                }}>
                  Performance Dashboard
                </Title>
                <Text style={{ fontSize: '16px', color: '#8c8c8c' }}>Track your productivity and task progress</Text>
              </div>
              <Button 
                type="primary" 
                size="large" 
                style={{ 
                  fontSize: '16px', 
                  height: 'auto', 
                  padding: '8px 20px', 
                  borderRadius: '8px', 
                  background: 'linear-gradient(90deg, #1890ff 0%, #52c41a 100%)',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(24,144,255,0.25)',
                  fontWeight: 600,
                  marginTop: { xs: '16px', md: 0 }
                }}
              >
                Generate Report
              </Button>
            </div>
            
            <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  bordered={false} 
                  style={{ 
                    background: 'linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%)', 
                    textAlign: 'center', 
                    padding: '24px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(24,144,255,0.15)',
                    height: '100%'
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
                  <Title level={2} style={{ fontSize: '36px', margin: '0 0 8px 0', color: '#0050b3' }}>{totalTasks}</Title>
                  <Text style={{ fontSize: '18px', color: '#096dd9', fontWeight: 500 }}>Total Tasks</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  bordered={false} 
                  style={{ 
                    background: 'linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)', 
                    textAlign: 'center', 
                    padding: '16px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(82,196,26,0.15)',
                    height: '100%'
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
                  <Title level={2} style={{ fontSize: '36px', margin: '0 0 8px 0', color: '#237804' }}>{completedTasks}</Title>
                  <Text style={{ fontSize: '18px', color: '#389e0d', fontWeight: 500 }}>Completed</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  bordered={false} 
                  style={{ 
                    background: 'linear-gradient(135deg, #fff7e6 0%, #ffe7ba 100%)', 
                    textAlign: 'center', 
                    padding: '24px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(250,173,20,0.15)',
                    height: '100%'
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏳</div>
                  <Title level={2} style={{ fontSize: '36px', margin: '0 0 8px 0', color: '#ad6800' }}>{inProgressTasks}</Title>
                  <Text style={{ fontSize: '18px', color: '#d48806', fontWeight: 500 }}>In Progress</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  bordered={false} 
                  style={{ 
                    background: 'linear-gradient(135deg, #fff1f0 0%, #ffccc7 100%)', 
                    textAlign: 'center', 
                    padding: '24px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(245,34,45,0.15)',
                    height: '100%'
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔥</div>
                  <Title level={2} style={{ fontSize: '36px', margin: '0 0 8px 0', color: '#a8071a' }}>{highPriorityTasks}</Title>
                  <Text style={{ fontSize: '18px', color: '#cf1322', fontWeight: 500 }}>High Priority</Text>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
        <Col span={24}>
          <Card 
            style={{ 
              borderRadius: '12px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
            loading={taskLoading}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              marginBottom: '20px',
              gap: '12px'
            }}>
              <Title level={4} style={{ margin: 0, fontSize: '22px', fontWeight: 600 }}>My Tasks</Title>
              <Button 
                type="primary" 
                size="large" 
                icon={<PlusOutlined />}
                onClick={() => setAddTaskModalVisible(true)}
                style={{ 
                  fontSize: '16px', 
                  height: 'auto', 
                  padding: '6px 20px', 
                  borderRadius: '8px',
                  background: '#1890ff',
                  fontWeight: 600,
                  boxShadow: '0 2px 6px rgba(24,144,255,0.25)'
                }}
              >
                Add New Task
              </Button>
            </div>
            
            <div style={{ 
              display: 'flex', 
              marginBottom: '20px', 
              background: '#f5f5f5', 
              borderRadius: '8px', 
              padding: '4px', 
              width: 'fit-content',
              flexWrap: 'wrap',
              gap: '4px'
            }}>
              <Button 
                size="large" 
                type={activeFilter === 'all' ? 'primary' : 'default'}
                onClick={() => handleFilterChange('all')}
                style={{ 
                  borderRadius: '6px',
                  fontWeight: 500,
                  marginBottom: '4px',
                  boxShadow: activeFilter === 'all' ? '0 2px 4px rgba(24,144,255,0.2)' : 'none'
                }}
              >
                All Tasks
              </Button>
              <Button 
                size="large" 
                type={activeFilter === 'inprogress' ? 'primary' : 'default'}
                onClick={() => handleFilterChange('inprogress')}
                style={{ 
                  borderRadius: '6px',
                  fontWeight: 500,
                  marginBottom: '4px',
                  boxShadow: activeFilter === 'inprogress' ? '0 2px 4px rgba(24,144,255,0.2)' : 'none' 
                }}
              >
                In Progress
              </Button>
              <Button 
                size="large" 
                type={activeFilter === 'completed' ? 'primary' : 'default'}
                onClick={() => handleFilterChange('completed')}
                style={{ 
                  borderRadius: '6px',
                  fontWeight: 500,
                  marginBottom: '4px',
                  boxShadow: activeFilter === 'completed' ? '0 2px 4px rgba(24,144,255,0.2)' : 'none'
                }}
              >
                Completed
              </Button>
              <Button 
                size="large" 
                type={activeFilter === 'highpriority' ? 'primary' : 'default'}
                onClick={() => handleFilterChange('highpriority')}
                style={{ 
                  borderRadius: '6px',
                  fontWeight: 500,
                  marginBottom: '4px',
                  boxShadow: activeFilter === 'highpriority' ? '0 2px 4px rgba(24,144,255,0.2)' : 'none'
                }}
              >
                High Priority
              </Button>
            </div>
            
            {taskError && (
              <div style={{ padding: '20px', textAlign: 'center', color: '#f5222d' }}>
                Error loading tasks. Please try again.
              </div>
            )}
            
            {!taskLoading && !taskError && (
              <>
                {isMobile ? (
                  <List
                    dataSource={getFilteredTasks()}
                    renderItem={renderMobileTaskCard}
                    rowKey="_id"
                    locale={{ emptyText: "No tasks found. Add a new task to get started!" }}
                  />
                ) : (
                  <Table 
                    dataSource={getFilteredTasks()}
                    columns={columns} 
                    rowKey="_id"
                    pagination={false}
                    bordered={false}
                    style={{ fontSize: '16px' }}
                    rowClassName={(record, index) => 
                      index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
                    }
                    onRow={(record) => ({
                      style: { 
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        borderRadius: '8px',
                        marginBottom: '8px'
                      },
                      onMouseEnter: (e) => {
                        e.currentTarget.style.backgroundColor = '#f0f7ff';
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.backgroundColor = '';
                      }
                    })}
                    scroll={{ x: 'max-content' }}
                    locale={{ emptyText: "No tasks found. Add a new task to get started!" }}
                  />
                )}
              </>
            )}
          </Card>
        </Col>
      </Row>

      <Modal
        title={
          <div style={{ fontSize: '20px', fontWeight: 600 }}>
            <EditOutlined style={{ marginRight: '10px', color: '#1890ff' }} />
            Edit Task
          </div>
        }
        open={editModalVisible}
        onCancel={handleEditCancel}
        footer={null}
        width={700}
        bodyStyle={{ padding: '24px' }}
        style={{ borderRadius: '12px' }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleEditSubmit}
          initialValues={{
            priority: 'Medium',
            progress: 'In Progress'
          }}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="title"
                label="Task Title"
                rules={[{ required: true, message: 'Please enter task title' }]}
              >
                <Input 
                  placeholder="Enter task title" 
                  size="large"
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>
            </Col>
            
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"              >
                <TextArea 
                  placeholder="Enter task description" 
                  rows={4}
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} md={12}>
              <Form.Item
                name="deadline"
                label="Deadline"
                rules={[{ required: true, message: 'Please select a deadline' }]}
              >
                <DatePicker 
                  style={{ width: '100%', borderRadius: '8px' }}
                  size="large"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} md={12}>
              <Form.Item
                name="priority"
                label="Priority"
                rules={[{ required: true, message: 'Please select priority' }]}
              >
                <Select
                  size="large"
                  style={{ width: '100%', borderRadius: '8px' }}
                  dropdownStyle={{ borderRadius: '8px' }}
                >
                  <Option value="High">
                    <span style={{ color: '#f5222d', fontWeight: 500 }}>
                      <FireOutlined style={{ marginRight: 8 }} />
                      High
                    </span>
                  </Option>
                  <Option value="Medium">
                    <span style={{ color: '#fa8c16', fontWeight: 500 }}>
                      <span style={{ marginRight: 8 }}>⚡</span>
                      Medium
                    </span>
                  </Option>
                  <Option value="Low">
                    <span style={{ color: '#52c41a', fontWeight: 500 }}>
                      <span style={{ marginRight: 8 }}>•</span>
                      Low
                    </span>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            
            <Col xs={24} md={12}>
              <Form.Item
                name="progress"
                label="Status"
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Select
                  size="large"
                  style={{ width: '100%', borderRadius: '8px' }}
                  dropdownStyle={{ borderRadius: '8px' }}
                >
                  <Option value="Not Started">
                    <span style={{ color: '#d9d9d9', fontWeight: 500 }}>Not Started</span>
                  </Option>
                  <Option value="In Progress">
                    <span style={{ color: '#1890ff', fontWeight: 500 }}>In Progress</span>
                  </Option>
                  <Option value="On Hold">
                    <span style={{ color: '#faad14', fontWeight: 500 }}>On Hold</span>
                  </Option>
                  <Option value="Completed">
                    <span style={{ color: '#52c41a', fontWeight: 500 }}>Completed</span>
                  </Option>
                  <Option value="Cancelled">
                    <span style={{ color: '#f5222d', fontWeight: 500 }}>Cancelled</span>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <Button 
              onClick={handleEditCancel}
              size="large"
              icon={<CloseOutlined />}
              style={{ 
                borderRadius: '8px',
                fontWeight: 500,
                width: '120px'
              }}
            >
              Cancel
            </Button>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large"
              loading={loading}
              icon={loading ? null : <SaveOutlined />}
              style={{ 
                borderRadius: '8px',
                fontWeight: 500,
                background: 'linear-gradient(90deg, #1890ff 0%, #52c41a 100%)',
                border: 'none',
                width: '120px',
                boxShadow: '0 4px 10px rgba(24,144,255,0.25)'
              }}
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal>

      {/* <Modal
        open={addTaskModalVisible}
        onCancel={() => setAddTaskModalVisible(false)}
        footer={null}
        width={700}
        bodyStyle={{ padding: 0 }}
        style={{ borderRadius: '12px' }}
      >
        <Addtask 
          onAddTask={handleAddTask} 
          onCancel={() => setAddTaskModalVisible(false)} 
        />
      </Modal> */}

      <Modal
        title="Delete Task"
        open={deleteModalVisible}
        onCancel={handleDeleteCancel}
        footer={[
          <Button key="cancel" onClick={handleDeleteCancel}>
            Cancel
          </Button>,
          <Button key="delete" type="primary" danger loading={loading} onClick={handleDeleteConfirm}>
            Delete
          </Button>
        ]}
      >
        <p>Are you sure you want to delete this task? This action cannot be undone.</p>
      </Modal>
    </div>
  );
}

export default Dashboard;