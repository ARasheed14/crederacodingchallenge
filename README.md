# crederacodingchallenge
The Application Does the following:

Lists weather forcast for a specified time period. Ex. 7 Day forecast.
Utilizes weatherAPI to retrieve weather information based on City Code to pinpoint location.

Build a user interface to create a filter and update a list of products to reflect the results. Use the exercise to demonstrate not only a solution to the problem but your approach to software design and testing.
Scope:  
- As a user, I want to view my local weather results. 
- As a user, I want to view future weather forecast.
- As a user, I want the web application to be responsive in nature for mobile devices. 
- As a developer, I want an API key so I can call the an API to retrieve data. 

## How to Install the project

- run git clone https://github.com/ARasheed14/crederacodingchallenge.git
- cd into project
- run npm install
- run npm run start

## Architecture

![diagram](https://user-images.githubusercontent.com/17747101/169180967-cf136787-6308-4b1a-a70c-44eb04dad567.png)

## WeatherAPI

Usually our data comes from making API calls to the server. In this exercise Mock data is provided by datastore.js. Instead of performing a network request to retrieve data we get our data from the mock datastore. I would create services to handle all our data calls but since there are no network calls I didn't create any services.

## User Interface

Created custom components to handle custom UI animations required by the App design.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
 
