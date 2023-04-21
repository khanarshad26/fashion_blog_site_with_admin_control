import {
  Button, Form,
  Input
} from 'antd';
import React, { useState } from 'react';
import { saveEvent } from '../helper';

const BlogForm = ({event}) => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [title, setTitle] = useState(event ? event.title : '');
  const [summary, setSummary] = useState(event ? event.summary : '');
  const [address, setAddress] = useState(event ? event.address : '');
  const [material, setMaterial] = useState(event ? event.material : '');
  const [startDate, setStartDate] = useState(event ? event.startDate : new Date());
  const [endDate, setEndDate] = useState(event ? event.endDate : startDate);

  const saveHandler = () => {
    saveEvent({
        ...event, 
        title, 
        summary, 
        address, 
        material,
        startDate,
        endDate,
        created: event.id ? event.created : new Date(), 
        updated: new Date()
    });
    setTitle('');
    setSummary('');
    setAddress('');
    setMaterial('');
    setStartDate(new Date());
    setEndDate(new Date());
  }

  const handleStartDate = (e) => {
    setStartDate(e.target.value)
    if(startDate > endDate) {
      setEndDate(startDate);
    }
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Title">
        <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Summary">
        <Input value={summary} onChange={(e) => setSummary(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Address">
        <Input value={address} onChange={(e) => setAddress(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Material">
        <Input value={material} onChange={(e) => setMaterial(e.target.value)}/>
      </Form.Item>
      {/* <Form.Item label="Start date">
        <DatePicker value={startDate} onChange={handleStartDate}/>
      </Form.Item>
      <Form.Item label="End Date">
        <DatePicker value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
      </Form.Item> */}
      <Form.Item>
        <Button onClick={saveHandler}>{event.id ? 'Update Event' : 'Create Event'}</Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;