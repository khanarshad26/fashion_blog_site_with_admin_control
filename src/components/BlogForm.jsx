import { Textarea } from '@chakra-ui/react';
import {
    Button, Form,
    Input
} from 'antd';
import React, { useState } from 'react';
import { saveBlog } from '../helper';

const BlogForm = ({blog}) => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [title, setTitle] = useState(blog ? blog.title : '');
  const [summary, setSummary] = useState(blog ? blog.summary : '');
  const [content, setContent] = useState(blog ? blog.content : '');

  const saveHandler = () => {
    saveBlog({
        ...blog, 
        title, 
        summary, 
        content, 
        created: blog.id ? blog.created : new Date(), 
        updated: new Date()
    });
    setTitle('');
    setSummary('');
    setContent('');
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
      <Form.Item label="Blog">
        <Textarea value={content} onChange={(e) => setContent(e.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Button onClick={saveHandler}>{blog.id ? 'Update Blog' : 'Create Blog'}</Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;