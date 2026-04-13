import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-in-progress';
      default:
        return 'status-pending';
    }
  };

  return (
    <div className="task-item">
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
        <span className={`task-status ${getStatusColor(task.status)}`}>
          {task.status.replace('-', ' ').toUpperCase()}
        </span>
        <div className="task-dates">
          <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
          <small>Updated: {new Date(task.updatedAt).toLocaleDateString()}</small>
        </div>
      </div>
      <div className="task-actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;