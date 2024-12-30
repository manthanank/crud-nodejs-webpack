# CRUD Application with Node.js, Express, MongoDB, and Webpack

A full-stack CRUD (Create, Read, Update, Delete) application built with Node.js, Express, MongoDB, and Webpack.

## Features

- Create, read, update, and delete items
- MongoDB database integration
- Webpack bundling for client-side code
- Express.js REST API
- Development and production builds
- Vercel deployment ready

## Prerequisites

- Node.js (v14 or higher)
- MongoDB running locally or a MongoDB Atlas connection string
- npm or yarn package manager

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd crud-nodejs-webpack
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Configure MongoDB:

    - Update the MongoDB connection string in the `.env` file:

    ```text
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/crud-nodejs-webpack
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

This will start the Express server and the Webpack development server.

Backend server: [http://localhost:3000](http://localhost:3000)
Frontend server: [http://localhost:8080](http://localhost:8080)

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the production bundle
- `npm start`: Start the production server

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file includes the necessary configuration for both frontend and backend deployment.

## License

This project is open source and available under the [MIT License](LICENSE).
