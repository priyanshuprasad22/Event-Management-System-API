# Event Management System API

## Introduction

This repository contains the source code for an Event Management System API built using Node.js with Express.js framework for the backend and MongoDB as the database. Swagger UI is utilized for API documentation.

## Tech Stack and Database Choice

### Tech Stack:
- **Node.js**: Chosen for its asynchronous and event-driven architecture, which makes it suitable for handling multiple concurrent connections in real-time applications.
- **Express.js**: A minimalist web application framework for Node.js, used for routing and middleware to handle HTTP requests.
- **MongoDB**: A NoSQL document database, selected for its flexibility in handling unstructured data typically encountered in event management systems.

### Database:
MongoDB was chosen due to its flexibility in handling various types of data and its scalability. It allows for easy integration with Node.js using libraries like Mongoose, providing a schema-based solution for modeling application data.

## Design Decisions and Challenges

### Design Decisions:
- **RESTful Architecture**: The API follows RESTful principles to ensure scalability, maintainability, and flexibility.
- **Modular Code Structure**: The codebase is organized into modules to improve code maintainability and scalability.
- **Middleware**: Utilized middleware functions for request error handling.
- **Swagger Documentation**: Employed Swagger UI for API documentation to facilitate easier understanding and testing of endpoints.

### Challenges and Solutions:
- **Data Modeling**: Designing effective schemas to represent event data and relationships efficiently in MongoDB.
- **Error Handling**: Ensuring robust error handling to provide informative responses and maintain system reliability.
- **Concurrent API Calls**: Incorporating concurrent API calls to external services like weather and distance APIs posed a challenge due to the asynchronous nature of Node.js. Using Promise.all to handle multiple asynchronous operations concurrently was a viable solution.


## Setting Up and Running the Project

1. Clone the repository:
   ```bash
    git clone https://github.com/priyanshuprasad22/Event-Management-System-API.git
2.  Navigate to the project directory:
    ```bash
    cd Event-Management-System-API
3.  Install dependencies:
    ```bash
    npm install
4.  Set up environment variables:
    ```bash
    Create a .env file in the root directory and define environment variables such as database connection URI, JWT secret, etc.
5. Start the server:
   ```bash
   npm start





