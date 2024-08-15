# Kitra Game - Geolocation Treasure Hunt

## Introduction

**Kitra** is a geolocation-based treasure hunting game where users can find treasures based on their current location. The game also tracks user progression, allowing logged-in users to see their achievements, such as the number of treasures found and the total money collected.

## Features

- **Geolocation-Based Treasure Search**: Find treasures within a specific radius of your current location.
- **User Progression**: Logged-in users can track their progress, including the number of treasures found, the total money value, and other fun stats.
- **User Authentication**: Secure login using JWT tokens.
- **API Documentation**: View API documentation directly from the app.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14.x or later)
- **MySQL** (v8.x or later)
- **npm** (v6.x or later)

## Installation

### 1. Clone the Repository:

```bash
git clone https://github.com/WildPoker/kitra_game.git
cd kitra_game
```

### 2. Install Dependencis:

```bash
npm install
```

### 3. Create ENV:

Create a .env file in the root directory and configure the following variables:

```bash
DB_NAME=kitra_game
DB_USER=root
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_DIALECT=mysql
JWT_SECRET=your_secret_key_here
PORT=5000
```

### 4. Create the Database:

Ensure MySQL is running, then create the database:

```bash
npm run setup-db
```

## Running The Application

### 1. Start the Server:

```bash
npm run start
```

### 2. Access the API:

The server will start on http://localhost:5000. You can access the following endpoints:

- _GET /api/treasure?latitude=14.55&longitude=121.02&distance=10&prize_value=15_
  - GET Find treasures within a 10 km radius of the specified coordinates with a minimum prize value of $15.
- _GET /api/user/progress (Requires Authentication)_
  - View the user's progression, including the number of treasures found and the total money collected.
- _POST /api/login_
  - Authenticate a user and receive a JWT token.
- _GET /documentation_
  - View the project documentation.

## API Documentation

The documentation is generated from the README.md file and can be viewed by accessing the /documentation endpoint. It provides details about the available endpoints, request parameters, and response formats.

## Example Requests

_POSTMAN API DOCS LINK_: https://documenter.getpostman.com/view/13262179/2sA3s6GqM3

### 1. Find Treasure:

```bash
GET /api/treasure?latitude=14.55&longitude=121.02&distance=10&prize_value=15
```

### 2. User Login:

```bash
POST /api/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

```

### 3. User Progression:

```bash
GET /api/user/progress
Authorization: Bearer your-jwt-token-here
```

## Troubleshooting

- _Invalid_ Latitude or Longitude: Ensure the latitude is between -90 and 90, and the longitude is between -180 and 180.
- _No Treasures Found_: Check if the coordinates are within range of any treasures. Adjust the distance or coordinates if necessary.
- _Database Connection Issues_: Ensure MySQL is running and the environment variables in .env are correctly configured.

## Contributing

Feel free to fork the project and submit pull requests. Any contributions to improve the game, enhance user progression, or add new features are welcome!
