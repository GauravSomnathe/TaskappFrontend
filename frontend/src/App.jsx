import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/items');
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const addTask = async (taskData) => {
    try {
      const response = await axios.post('/api/items', taskData);
      setTasks([response.data, ...tasks]);
    } catch (err) {
      setError('Failed to add task');
      console.error(err);
    }
  };

  // Update task
  const updateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`/api/items/${id}`, taskData);
      setTasks(tasks.map(task => task._id === id ? response.data : task));
      setEditingTask(null);
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/items/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Management System</h1>
      </header>
      <main className="app-main">
        <TaskForm
          onSubmit={editingTask ? (data) => updateTask(editingTask._id, data) : addTask}
          initialData={editingTask}
          onCancel={() => setEditingTask(null)}
        />
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={setEditingTask}
            onDelete={deleteTask}
          />
        )}
      </main>
    </div>
  );
}

export default App;