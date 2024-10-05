# Full-Stack Course Management Application

A full-stack course management system built using **Next.js** for the frontend and **NestJS** for the backend, offering seamless functionality for managing courses, including creation, search, and pagination.

## Project Structure

- **`frontend/`**: Next.js application for the client-side
- **`backend/`**: NestJS application for the server-side

## Frontend (Next.js)

### Running the Frontend

To start the frontend development server:

```bash
cd frontend
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Key Features

- **Course Listing**: Displays a list of courses with pagination for better user experience.
- **Search**: Enables users to search courses by title or teacher.
- **Add Course**: Functionality to create and add new courses.
- **Course Details**: View detailed information about each course.

### API Integration

The frontend interacts with the backend API via **Axios**, with the client configuration located in `frontend/app/services/api.ts`.

## Backend (NestJS)

### Running the Backend

To set up and run the backend:

```bash
cd backend
npm install
npm run start:dev
```

The backend server will run at [http://localhost:4000](http://localhost:4000).

### API Endpoints

- **`GET /courses`**: Fetch a paginated list of courses with optional search filters.
- **`POST /courses`**: Create a new course.
- **`GET /courses/:id`**: Retrieve details for a specific course by its ID.

### Authentication

The app uses **JWT (JSON Web Token)** authentication:
- Tokens are stored in `localStorage` on the client side.
- API requests automatically include the token for secure access.
- Unauthorized users (401 errors) are redirected to the login page.

## Development

- **Frontend**: Modify `frontend/app/page.tsx` to update the main page. The project utilizes **Next.js 13** with the App Router.
- **Backend**: Built with **NestJS**, providing a robust, scalable backend solution.

## Deployment

- **Frontend**: Easily deployable to platforms like **Vercel**.
- **Backend**: Follow **NestJS** deployment practices for the hosting environment of your choice.

## Contributing

Contributions are welcome! Feel free to open a pull request for suggestions or improvements.

## License

This project is open-source under the **MIT License**.
