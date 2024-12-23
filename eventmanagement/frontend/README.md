
# Event Management Dashboard

## Features
1. Manage events (CRUD operations).
2. Manage attendees and assign them tasks.
3. Track tasks related to events with progress visualization.
4. Login/logout functionality for secure access.

## Installation Instructions
1. Clone the repository: `git clone <repo-url>`
2. Navigate to the backend directory: `cd event-management-dashboard/backend`
3. Install dependencies: `npm install`
4. Start the server: `node server.js`
5. Navigate to the frontend directory: `cd ../frontend`
6. Install dependencies: `npm install`
7. Start the application: `npm start`

## API Endpoints
### Event Management
- `POST /api/events` - Create an event.
- `GET /api/events` - Fetch all events.
- `PUT /api/events/:id` - Update an event.
- `DELETE /api/events/:id` - Delete an event.

### Attendee Management
- `POST /api/attendees` - Add an attendee.
- `GET /api/attendees` - Get all attendees.
- `DELETE /api/attendees/:id` - Delete an attendee.

### Task Management
- `POST /api/tasks` - Create a task.
- `GET /api/tasks` - Get tasks for an event.
- `PUT /api/tasks/:id` - Update task status.

## Login/Logout Samples
### Login
Request:
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```
Response:
```json
{
    "message": "Login successful",
    "token": "<auth-token>"
}
```

### Logout
Request:
```json
{
    "token": "<auth-token>"
}
```
Response:
```json
{
    "message": "Logout successful"
}
```

## Notes
- Use valid data for all form inputs.
- Progress is visually represented using progress bars.

---
Developed for the Hackathon Assignment.
