QuickHire - Modern and simple Job Portal

QuickHire is a full-stack job board application designed to connect talent with opportunities. It features a seamless user experience, real-time job filtering, and a robust admin dashboard for managing listings.

Key Features

For Candidates-------->

Firebase Authentication: Secure login and signup (Email/Password).

Job Exploration: Browse 12+ featured jobs with category-based filtering.

Advanced Search: Filter jobs by title, company, or location.

Job Details: View full descriptions, salary ranges, and company info.

Easy Apply: Submit applications with a resume link and cover note.

For Admins----->

Role-Based Access: Automatic "user" role on signup; Admin power for authorized accounts.

Job Management: Add new job listings with formatted salary ranges.

Delete Control: Remove outdated or filled job listings directly from the UI.

Tech Stack----->
Frontend:

React.js (Vite)

Tailwind CSS & DaisyUI (Styling)

React Router Dom (Navigation)

Firebase Auth (Authentication)

Axios (API Requests)

React Icons (UI Assets)

Backend:

Node.js & Express.js

MongoDB (Database)

Dotenv (Environment Variables)

CORS (Cross-Origin Resource Sharing)

Installation & Setup-------------->

1. Clone the repository (https://github.com/mehrajhr/quickHire-client)

2. Backend Setup
Navigate to the server folder: cd quickhire-backend

Install dependencies: npm install
Create a .env file and add:

PORT=5000

DB_USER= your db username

DB_PASS= Your db pass name

Start the server: nodemon index.js

3. Frontend Setup

Navigate to the client folder: cd quickhire-frontend

Install dependencies: npm install

Create a .local.env for Firebase config if needed.

Start the app: npm run dev

Method,Endpoint,Description

GET,/api/jobs,Fetch all job listings

GET,/api/jobs/:id,Get specific job details

POST,/api/jobs,Add a new job (Admin Only)

DELETE,/api/jobs/:id,Remove a job (Admin Only)

POST,/api/applications,Submit a job application

GET,/api/users/:email,Get user role and details


Frontend live link : https://quick-hire-7.netlify.app/

Backend live link : https://quick-hire-server-seven.vercel.app/
