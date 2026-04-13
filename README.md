# MERN Task Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing tasks with CRUD operations.

## Features

- ✅ Create, Read, Update, Delete tasks
- ✅ Task status management (Pending, In Progress, Completed)
- ✅ Clean and responsive UI
- ✅ RESTful API with proper error handling
- ✅ MongoDB database with Mongoose ODM

## Tech Stack

- **Frontend**: React.js with Vite, Axios for API calls
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Styling**: CSS with modern design

## Project Structure

```
mern-task-manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── itemController.js
│   ├── models/
│   │   └── itemModel.js
│   ├── routes/
│   │   └── itemRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.jsx
    │   │   ├── TaskItem.jsx
    │   │   └── TaskList.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all tasks |
| POST | `/api/items` | Create a new task |
| PUT | `/api/items/:id` | Update a task |
| DELETE | `/api/items/:id` | Delete a task |

### Task Schema

```javascript
{
  title: String (required),
  description: String (required),
  status: String (enum: ['pending', 'in-progress', 'completed']),
  createdAt: Date,
  updatedAt: Date
}
```

## Deployment

### Backend Deployment (Render)

1. Create a new account on [Render](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables in Render dashboard

### Frontend Deployment (Vercel/Netlify)

1. Create an account on [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Deploy the frontend (it will automatically detect Vite)
4. Update the API base URL in production if needed

## Usage

1. Open the application in your browser
2. Add new tasks using the form at the top
3. View all tasks in the list below
4. Edit tasks by clicking the "Edit" button
5. Delete tasks by clicking the "Delete" button
6. Change task status using the dropdown in the form

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).