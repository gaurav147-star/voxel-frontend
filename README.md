# Project Name

Brief description of your project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Setting up ReactJS](#setting-up-reactjs)
  - [Setting up Backend (Node.js)](#setting-up-backend-nodejs)
  - [Handling Environment Variables](#handling-environment-variables)
- [API Endpoints](#api-endpoints)

## Getting Started

These instructions will guide you on how to set up the project on your local machine.

### Cloning the Repository

frontend: 
```bash
git clone https://github.com/gaurav147-star/voxel-frontend
```
backend:
```bash
git clone https://github.com/gaurav147-star/voxel-backend
```
### Setting up ReactJS

Install Dependencies:

```bash
cd frontend
npm install
```

Start the React App:

```bash
npm start
```

### Setting up Backend (Node.js)

Install Dependencies:

```bash
cd backend
npm install
```

Start the Backend Server:

```bash
npm start
```

## Environment Variables

### Handling Environment Variables

1. **Create Environment Variables File:**

   - Create a file named `.env` in the backend directory.
   - Add your environment variables in the format: ` MONGODB_URI=YOUR_MONGODB_URI`.

2. **Load Environment Variables:**

   - Use a package like `dotenv` to load environment variables from the `.env` file.

## API Endpoints

- `GET /api/startups/search?keyword=Technology&industry=Technology`:

  - **Description:** Search startups based on keyword and industry.
  - **Request Method:** GET
  - **Parameters:**
    - `keyword`: Keyword for search
    - `industry`: Industry for filtering
  - **Response:** Details of startups matching the criteria.

- `GET /api/getIndustry`:

  - **Description:** Get industry information.
  - **Request Method:** GET
  - **Response:** Information about different industries.

- `GET /api/startups`:

  - **Description:** Get all startups.
  - **Request Method:** GET
  - **Response:** Details of all available startups.

- `POST /api/startups`:
  - **Description:** post new startup.
  - **Request Method:** POST
  - **Response:** Details of new startup.

Add more details or descriptions about each endpoint, request methods, expected responses, etc.
