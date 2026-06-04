# Real-Time Code Editor

## Project Overview

Real-Time Code Editor is a web-based collaborative coding platform developed using React, Node.js, Express, Socket.IO, and CodeMirror. The application allows multiple users to join the same room and edit code simultaneously with real-time synchronization.

The main objective of this project is to demonstrate how real-time communication works using WebSockets and how multiple users can collaborate on code within a shared environment.

---

## Features

* Real-time collaborative code editing
* Room-based collaboration system
* Unique Room ID generation
* Instant code synchronization using Socket.IO
* Live user join and leave notifications
* Copy Room ID functionality
* JavaScript code execution support
* Python code execution support
* Multi-user collaboration environment
* Responsive and user-friendly interface

---

## Technologies Used

* React.js
* Node.js
* Express.js
* Socket.IO
* CodeMirror
* JavaScript
* HTML
* CSS

---

## System Workflow

1. User creates or joins a room using a unique Room ID.
2. Socket.IO establishes a real-time connection between client and server.
3. Users write code inside the CodeMirror editor.
4. Code changes are emitted to the server through WebSocket events.
5. The server broadcasts updates to all users in the same room.
6. New users automatically receive the latest code state.
7. Users can execute JavaScript or Python code and view output instantly.

### Flow Diagram

```text
User
    ↓
React Frontend
    ↓
Socket.IO Client
    ↓
Socket.IO Server
    ↓
Broadcast to Room
    ↓
Connected Users
```

---

## Project Structure

```text
Real-Time-Code-Editor/
│
├── server.js
├── package.json
├── public/
│
├── src/
│   ├── Actions.js
│   ├── socket.js
│   │
│   ├── components/
│   │   └── Editor.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   └── EditorPage.js
│   │
│   └── App.js
│
├── build/
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Coder-Priyan/Real-Time-Code-Editor.git

cd Real-Time-Code-Editor
```

### Install Dependencies

```bash
npm install
```

### Run Frontend

```bash
npm run start:front
```

### Run Backend

```bash
npm run server:dev
```

### Production Mode

```bash
npm start
```

### Open Browser

```text
http://localhost:3000
```

or

```text
http://localhost:5000
```

---

## Sample Usage

### Create Room

```text
Click "Create New Room"
↓
Generate Room ID
↓
Enter Username
↓
Join Room
```

### Real-Time Collaboration

```text
User A types code
↓
Socket Event Triggered
↓
Server Receives Update
↓
Broadcast to Room
↓
User B Sees Changes Instantly
```

---

## Socket Events

### Join Room

```text
JOIN
```

### Code Synchronization

```text
CODE_CHANGE
SYNC_CODE
```

### User Connection Management

```text
JOINED
DISCONNECTED
```

### Code Execution

```text
RUN_JAVASCRIPT
RUN_PYTHON
OUTPUT
```

---

## Learning Outcomes

* Understanding WebSockets
* Real-Time Communication
* Socket.IO Event Handling
* React Component Architecture
* State Management
* Client-Server Communication
* Room-Based Collaboration Systems
* Full Stack Web Development

---

## Future Enhancements

* Authentication System
* User Profiles
* Code History Tracking
* Multi-language Compiler Support
* Voice Collaboration
* Video Calling Integration
* Syntax Error Highlighting
* Cloud-Based Storage

---

## Contributors

* Priyanshu Dangi
* Akansha Joshi
* Deepak Kumar Kabi

---

## License

This project is developed for educational and academic purposes.
