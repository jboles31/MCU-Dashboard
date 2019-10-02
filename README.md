# MCU Dashboard

This is a collection of all the Marvel Cinematic Universe movies. As you click on a movie it's information will appear below the dashboard. The app checks the MongoDB for the movie's information and if it is not stored there than the app will make an API call to OMDB to retrieve the relevant data. It will then create a new entry in the MongoDB for that movie so on subsequent calls the data will be available without an API call.

![Dashboard-Demo](MCU-Dashboard.gif)

## Getting Started

* Install Dependencies
```bash
npm install
```
* Build webpack bundle, and start development server
```bash
npm run react-dev
```
* Run server
```bash
npm start
```

* Navigate to [http://localhost:3000](http://localhost:300)

## Notes

* Be sure to run ```mongod``` if the mongo connection is refused


## Tech Stack
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MondoDB](https://mongodb.com/)

## License

This project is licensed under the MIT License


#### Author: *[Jordan Boles](https://github.com/jboles31)*
