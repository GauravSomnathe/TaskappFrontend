import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks found. Add your first task above!</div>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;