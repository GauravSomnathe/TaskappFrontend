import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        status: initialData.status
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit(formData);
    if (!initialData) {
      setFormData({ title: '', description: '', status: 'pending' });
    }
  };

  const handleCancel = () => {
    setFormData({ title: '', description: '', status: 'pending' });
    onCancel();
  };

  return (
    <div className="task-form-container">
      <h2>{initialData ? 'Edit Task' : 'Add New Task'}</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {initialData ? 'Update Task' : 'Add Task'}
          </button>
          {initialData && (
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;