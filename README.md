# Country Info App

This project is a React application that provides a login page and displays a list of countries with their flags and regions on the home page. The data is fetched from the REST Countries API.

## Table of Contents

- Features
- Prerequisites
- Installation
- Running the Application
- Building the Application
- Deployment
- File Structure
- API Reference
- Authors
- Contributing

## Features
- Login page with form validation
- Home page displaying a list of countries with their flags and regions
- Sign-out functionality
- Responsive design

## Prerequisites

1. Ensure you have the following installed on your machine:

    - Node.js
    - npm

## Installation

1. Clone the repository: **git clone https://github.com/Anushjp/country-info-app.git**
2. Navigate to the project directory: **cd react-country-info-app**
3. Install the dependencies: **npm install**

## Running the Application

To start the application in development mode, run: npm start

Open [Country Info App](https://country-info-app-neon.vercel.app/) to view it in your browser.

## Building the Application

To create an optimized build of the application for production, run: npm run build

This will create a build directory with the production build of the app.

## Deployment

This application can be deployed to Vercel. Follow these steps:

## Deploying to Vercel

1. Sign up or log in to Vercel.
2. Import your repository:
  -  Click on "New Project".
  -  Select your Git provider (GitHub, GitLab, Bitbucket).
  -  Find your repository and import it.
3. Configure the project settings:
  -  Ensure that the "Framework Preset" is set to "Create React App".
  -  Configure any environment variables if necessary.
4. Deploy the project:
  -  Click on "Deploy".

Your application will be deployed, and you will get a live URL to view it.

URL: [Country Info App](https://country-info-app-neon.vercel.app/)

## File Structure
src/
│
├── components/
│   ├── Home.js
│   ├── Login.js
│   └── ...
│
├── App.js
├── index.js
├── Login.css
└── ...

## API Reference

The application fetches country data from the following API endpoint:

- GET https://restcountries.com/v2/all?fields=name,region,flag

## Authors
- Initial work - Anushjp

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.
