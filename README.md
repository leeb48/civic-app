<br />
<p align="center">

  <h3 align="center">Civic App</h3>

  <h6 align="center">
    Get involved in your local and federal government with the Civic App.
  </h6>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Running Locally With NPM](#running-locally-with-npm)
  - [Running Locally With Docker-Compose](#Running-Locally-With-Docker-Compose)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

[Click here to see the working demo](http://civic-app.us-west-1.elasticbeanstalk.com/)

Click below to see a video of the app.
[![Link to demo video](http://img.youtube.com/vi/LWh7dxjXF6g/0.jpg)](https://www.youtube.com/watch?v=LWh7dxjXF6g&ab_channel=BongLee)

The goal of this project is to help inform people about elections and their representatives. The Civic App provides users with polling and early voting information in upcoming elections based on their location. Users can also use the Civic App before elections to find information about the candidates as well as currently elected officials.

### Built With

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Material-UI](https://material-ui.com/)
- [Google Civic API](https://developers.google.com/civic-information)
- [Kubernetes](https://kubernetes.io/) (For Development Only)
- [Skaffold](https://skaffold.dev/) (For Development Only)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Environment Variables

Before starting the app, you must acquire an API KEY from Google. [This](https://developers.google.com/civic-information/docs/using_api) link provides instructions on how to get the api key for Google Civic API. Acquiring the API KEY is free.

```
API_KEY=
```

#### Running Locally With NPM

To allow react development server to send requests to Express server you need to add a proxy in the _package.json_ file in the client directory. Right after the last entry in the client's _package.json_ file add **"proxy":"http://localhost:8000"** so that it looks like below.

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@date-io/date-fns": "^1.3.13",
    "@date-io/moment": "^1.3.13",
    "@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.56",
    "@material-ui/pickers": "^3.2.10",
    "@material-ui/styles": "^4.10.0",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "@types/jest": "^24.9.1",
    "@types/node": "^12.12.69",
    "@types/react": "^16.9.53",
    "@types/react-dom": "^16.9.8",
    "@types/react-router-dom": "^5.1.6",
    "@types/uuid": "^8.3.0",
    "axios": "^0.20.0",
    "canvasjs-react-charts": "^1.0.5",
    "date-fns": "^2.16.1",
    "material-table": "^1.69.1",
    "moment": "^2.29.1",
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    "react-moment": "^1.0.0",
    "react-plaid-link": "^3.0.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.4",
    "typescript": "^3.7.5",
    "uuid": "^8.3.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:8000"
}
```

Then place the .env file with the API*KEY variable set inside the \_backend* directory.

```
API_KEY=
```

From the root project directory run the following commands to start the app.

```sh
cd client && npm start
```

Open up a second terminal and run the command.

```sh
cd backend && npm start
```

The project should be running on [http://localhost:3000](http://localhost:3000)

#### Running Locally With Docker-Compose

After setting up the .env file in the project directory run the command **docker-compose up --build** inside the project directory.

The project should be running on [http://localhost:80](http://localhost:80)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Bong Lee - [@github](https://github.com/leeb46) - bongsoolee91@gmail.com

Project Link: [https://github.com/leeb48/civic-app](https://github.com/leeb48/civic-app)
