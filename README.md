# Secure Kanban Board with JWT Authentication

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Deployment](#deployment)
- [Installation](#installation)
- [Usage](#usage)
- [Security Features](#security-features)
  - [JWT Implementation](#jwt-implementation)
  - [Session Management](#session-management)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Tasks](#tasks)
- [User Stories](#user-stories)
- [Acceptance Criteria](#acceptance-criteria)
  - [Login Page](#login-page)
  - [Authentication](#authentication-1)
  - [Session Management](#session-management-1)
  - [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
  
## Description
This full-stack Kanban board application implements secure authentication using JSON Web Tokens (JWT). Users can safely manage their work tasks through a protected interface that ensures data privacy and session management.

## Features
- Secure login system with JWT authentication
- Protected Kanban board routes
- Session management with token expiration
- Error handling for invalid credentials
- Automatic logout on inactivity
- Local storage management for persistent sessions

## Technologies Used
- Frontend:
  - React.js
  - React Router for navigation
  - Local Storage for token management
- Backend:
  - Node.js
  - Express.js
  - JWT for authentication
  - MongoDB (database)
- Deployment:
  - Render

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd kanban-jwt
```

2. Install dependencies for both client and server:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
Create a `.env` file in the server directory:
```env
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

## Usage

1. Start the development server:
```bash
# Start server (from server directory)
npm run start

# Start client (from client directory)
npm run dev
```

2. Access the application:
- Navigate to `http://localhost:5173` in your browser
- Log in with your credentials
- Start managing your tasks!

## Security Features

### JWT Implementation
- Tokens are generated upon successful login
- Tokens include expiration timestamps
- Secure storage in client's local storage
- Automatic token validation on protected routes

### Session Management
- Automatic logout on token expiration
- Protected routes require valid JWT
- Token cleanup on logout
- Inactivity detection and session termination

## API Endpoints

### Authentication
```
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/verify
```

### Tasks
```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

## User Stories

**As a member of an agile team, I want to:**
- Log in securely to access my tasks
- View my Kanban board after authentication
- Maintain my session across page refreshes
- Be automatically logged out after inactivity
- Receive clear feedback for invalid credentials

## Acceptance Criteria

1. **Login Page:**
   - Username and password input fields
   - Form validation
   - Error messaging for invalid credentials

2. **Authentication:**
   - JWT generation on successful login
   - Secure token storage
   - Protected route access

3. **Session Management:**
   - Automatic session expiration
   - Secure logout process
   - Route protection for unauthenticated users

4. **Security:**
   - Password hashing
   - Token validation
   - Secure API endpoints

## Deployment

The application is deployed on Render:
1. Create a new Web Service
2. Connect your repository
3. Configure build and start commands
4. Set environment variables
5. Deploy!

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
