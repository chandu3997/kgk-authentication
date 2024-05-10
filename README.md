# User Authentication API

This is a Node.js Express application for user authentication using JSON Web Tokens (JWT) and SQLite database.

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chandu3997/kgk-authentication.git

2. Navigate to the project directory: 

    cd kgk-authentication

3. Install dependencies: 

    npm install
4. Running the Application

    Start the application using the following command: npm start
5.API Endpoints

    1. Register a User

        URL: /register

        Method: POST

        Request Body:
        json

                {
                    "username": "your_username",
                    "password": "your_password"
                }

        Response :

                {
                "message": "User registered successfully"
                }
    2.Login

        URL: /login

        Method: POST

        Request Body:

        json
            {
                "username": "your_username",
                "password": "your_password"
            }

        Response :
            {
                "token": "your_generated_jwt_token"
            }   
6.  Additional Information

    Token expiration time: 1 hour (adjustable in the code)
    Token format: JSON Web Token (JWT)
    Passwords are securely hashed using bcrypt before storing in the database.

..



