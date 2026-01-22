---

# 📋 Task Management Web Application

A full-stack **Task Management Web Application** built as part of a technical assignment.
The application allows users to securely register and log in, manage their tasks efficiently, and organize them using search, filtering, and pagination.

The project follows **clean coding practices**, **RESTful API design**, and a **scalable full-stack architecture**.

---

## 🚀 Features

* User authentication (Signup & Login) using JWT
* Secure, user-specific task management
* Create, update, and delete tasks
* Search tasks by title
* Filter tasks by status (Pending / In Progress / Completed)
* Pagination for efficient data handling
* Responsive and clean UI
* Dockerized setup for easy local execution
* Deployed backend & frontend (optional)

---

## 🔗 **Live Links**
- Frontend: https://techsynix-assignment.vercel.app
- Backend API: https://techsynix-assignment.onrender.com


## 🛠 Tech Stack

### Frontend

* React (Vite)
* TypeScript
* Tailwind CSS
* Axios

### Backend

* Node.js (v22)
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt

### DevOps & Tools

* Docker & Docker Compose
* Git & GitHub
* Render (Backend deployment)
* Vercel (Frontend deployment)

---

## 📁 Project Structure

```
task-manager-fullstack/
│── frontend/        # React + Vite frontend
│── backend/         # Node.js + Express backend
│── docker-compose.yml
│── README.md
```

---

## ⚙️ Environment Variables

Create `.env` files using the provided `.env.example` files.

### Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager
JWT_SECRET=your_jwt_secret_key
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Project Setup (Without Docker)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ManojKumarTadikonda/Techsynix_Assignment.git
cd Techsynix_Assignment
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🐳 Project Setup (With Docker)

### 1️⃣ Prerequisites

* Docker
* Docker Compose

---

### 2️⃣ Run the Application

From the **project root**:

```bash
docker-compose up --build
```

---

### 3️⃣ Access the Application

| Service  | URL                                            |
| -------- | ---------------------------------------------- |
| Frontend | [http://localhost:3000](http://localhost:3000) |
| Backend  | [http://localhost:5000](http://localhost:5000) |

---

## 📸 Screenshots

Below are some screenshots demonstrating the functionality of the application.

> *(Add screenshots here)*

* Login & Signup screens
* Dashboard with task list
* Create / Edit task form
* Search, filter, and pagination functionality
* Responsive layout (mobile & desktop)

Example format:

```md
![Login Page](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
```

---

## 🎥 Demo Video

A short screen recording (2.20 minutes) demonstrating:

* Project setup
* User authentication
* Task creation, update, and deletion
* Search and pagination

Demo Video : https://youtu.be/9Nru-S4mn5I 

---

## 🌐 Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

### 👤 Author

**Manoj Kumar**
Full Stack Developer

---
