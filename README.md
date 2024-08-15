Kitra Game - Geolocation Treasure Hunt
Introduction
Kitra is a geolocation-based treasure hunting game where users can find treasures based on their current location. Treasures are spread across different coordinates, and users can discover these treasures by sending their latitude and longitude to the API. The game also tracks user progression, allowing logged-in users to see their achievements, such as the number of treasures found and the total money collected.

Features
Geolocation-Based Treasure Search: Find treasures within a specific radius of your current location.
User Progression: Logged-in users can track their progress, including the number of treasures found, the total money value, and other fun stats.
User Authentication: Secure login using JWT tokens.
API Documentation: View API documentation directly from the app.
Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14.x or later)
MySQL (v8.x or later)
npm (v6.x or later)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/kitra_game.git
cd kitra_game
Install Dependencies:

bash
Copy code
npm install
Setup Environment Variables:

Create a .env file in the root directory and configure the following variables:

plaintext
Copy code
DB_NAME=kitra_game
DB_USER=root
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_DIALECT=mysql
JWT_SECRET=your_secret_key_here
PORT=5000
Create the Database:

Ensure MySQL is running, then create the database:

bash
Copy code
npm run setup-db
This command will:

Create the kitra_game database if it doesn't exist.
Run the migrations to set up the tables (Treasures, Users, MoneyValues, UserProgress).
Seed the database with initial data.
Running the Application
Start the Server:

bash
Copy code
npm run start:dev
Access the API:

The server will start on http://localhost:5000. You can access the following endpoints:

GET /app/treasures?latitude=14.55&longitude=121.02&distance=10&prize_value=15
Find treasures within a 10 km radius of the specified coordinates with a minimum prize value of $15.
GET /app/user/progress (Requires Authentication)
View the user's progression, including the number of treasures found and the total money collected.
POST /app/login
Authenticate a user and receive a JWT token.
GET /documentation
View the project documentation.
API Documentation
The documentation is generated from the README.md file and can be viewed by accessing the /documentation endpoint. It provides details about the available endpoints, request parameters, and response formats.

Example Requests

1. Find Treasures
   bash
   Copy code
   GET /app/treasures?latitude=14.55&longitude=121.02&distance=10&prize_value=15
2. User Login
   bash
   Copy code
   POST /app/login
   Content-Type: application/json

{
"email": "user@example.com",
"password": "password123"
} 3. View User Progress
bash
Copy code
GET /app/user/progress
Authorization: Bearer your-jwt-token-here
Troubleshooting
Invalid Latitude or Longitude: Ensure the latitude is between -90 and 90, and the longitude is between -180 and 180.
No Treasures Found: Check if the coordinates are within range of any treasures. Adjust the distance or coordinates if necessary.
Database Connection Issues: Ensure MySQL is running and the environment variables in .env are correctly configured.
Contributing
Feel free to fork the project and submit pull requests. Any contributions to improve the game, enhance user progression, or add new features are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more details.

This README provides a comprehensive guide to setting up, running, and using your Kitra game application, covering everything from installation to troubleshooting. Let me know if you need any further details or modifications!
