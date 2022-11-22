import React from 'react';
import Form from './Form/Form';
import './AddPost.css';

export default function AddPost() {
  return (
    <div className="add-post-container">
      <h2 className="form-title">Add Post</h2>
      <Form className="form" />
    </div>
  );
}
