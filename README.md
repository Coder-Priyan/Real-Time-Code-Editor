# Real-Time Code Editor

A collaborative real-time code editor built using React, Node.js, Express, Socket.IO, and CodeMirror. This application allows multiple users to join the same room, write code together, and see updates instantly. It also supports code execution for JavaScript and Python directly from the editor.

## Features

* Real-time collaborative code editing
* Unique room-based collaboration
* Instant code synchronization using Socket.IO
* JavaScript code execution
* Python code execution
* User join and leave notifications
* Copy Room ID functionality
* Clean and responsive interface

## Tech Stack

### Frontend

* React.js
* React Router
* CodeMirror
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO

## Project Workflow

1. User creates or joins a room.
2. Socket connection is established with the server.
3. Code changes are emitted through Socket.IO events.
4. Server broadcasts updates to all users in the room.
5. New users receive the latest code automatically.
6. Users can execute JavaScript or Python code and view results in real time.

## Installation

```bash
npm install
```

### Start Frontend

```bash
npm run start:front
```

### Start Backend

```bash
npm run server:dev
```

### Production Mode

```bash
npm start
```

## Future Enhancements

* Multi-language support
* Voice collaboration
* Code version history
* User authentication
* Syntax error highlighting

## Author

Priyanshu Dangi
