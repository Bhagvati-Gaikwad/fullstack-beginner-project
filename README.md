# 👥 Full-Stack User Management App

A lightweight, full-stack CRUD (Create, Read, Update, Delete) application built to demonstrate the connection between a **Node.js/Express** backend and a **Vanilla JavaScript** frontend.

## 🚀 Features
- **Create:** Add new users via a web form.
- **Read:** View a real-time list of all users stored on the server.
- **Update:** Update existing user details (via API).
- **Delete:** Remove users from the list.
- **CORS Enabled:** Backend configured to allow frontend communication.

<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/f5acde73-1b4a-49c6-a8a0-665fc01680e5" />


## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Middleware:** CORS, Express JSON Parser

![logic](https://github.com/user-attachments/assets/8aa8ab87-91ae-4d9e-b4a2-43b1db5e817e)

## 📋 Prerequisites
Before running this project, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Bhagvati-Gaikwad/fullstack-beginner-project.git](https://github.com/Bhagvati-Gaikwad/fullstack-beginner-project.git)
   cd fullstack-beginner-project
Install dependencies:Bashnpm install
Start the backend server:Bashnode index.js
The server will start running on http://localhost:3001.Launch the frontend:Simply open the index.html file in your preferred web browser (Chrome, Firefox, Edge).📁 Project StructurePlaintext.
├── index.js          # Express server & API routes
├── index.html        # Frontend user interface
├── script.js         # Frontend logic & API calls
├── style.css         # UI styling
├── package.json      # Project dependencies
└── .gitignore        # Files to ignore (node_modules, etc.)
🔌 API EndpointsMethodEndpointDescriptionGET/usersFetch all usersPOST/usersCreate a new userPUT/users/:idUpdate user by IDDELETE/users/:idDelete user by IDDeveloped by Bhagvati Gaikwad
---
