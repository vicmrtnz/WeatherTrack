# WeatherTrack
Module 9 Challenge

WeatherTrack is a web application that leverages the OpenWeather API to retrieve and display weather data for cities worldwide. The application features a full-stack architecture, allowing users to search for current weather information and manage their search history.

Features

Weather Search: Fetch real-time weather data for any city.

Search History: Save and manage a list of searched cities.

Responsive Design: Optimized for various devices.

Backend Services: Built with Node.js and Express.

Frontend Framework: Powered by Vite and TypeScript.

Persistent Data: Store search history in a JSON file on the server.

Technologies Used

Frontend

TypeScript

Vite

HTML/CSS

Backend

Node.js

Express

OpenWeather API

JSON for data storage

DevOps

Render for deployment

Git for version control

Installation

Prerequisites

Node.js (v14+)

npm or yarn

Steps

Clone the repository:

git clone https://github.com/vicmrtnz/WeatherTrack.git

Navigate to the project directory:

cd WeatherTrack

Install dependencies for the frontend and backend:

cd Develop/client
npm install
cd ../server
npm install

Set up the environment variables:

Create a .env file in the Develop/server folder.

Add the following variables:

PORT=3001
API_KEY=your_openweather_api_key

Build the frontend:

cd ../client
npm run build

Start the backend server:

cd ../server
npm start

Usage

Access the application in your browser at http://localhost:3001.

Search for a city's weather using the search bar.

View and manage your search history.

Deployment

The application is deployed on Render. You can access it at: WeatherTrack

Folder Structure

WeatherTrack
├── client
│   ├── public
│   ├── src
│   ├── styles
│   ├── index.html
│   └── vite.config.json
├── server
│   ├── db
│   ├── src
│   │   ├── routes
│   │   ├── service
│   │   └── server.ts
│   ├── .env.example
│   └── package.json
├── .gitignore
├── README.md
└── package.json

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Description of changes"

Push to the branch:

git push origin feature-name

Create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

OpenWeather API for providing weather data.

Render for deployment services.

Developed by Victoria Martinez and contributors.

