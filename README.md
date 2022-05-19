# crederacodingchallenge
The Application Does the following:

Lists weather forcast for a specified time period. Ex. 7 Day forecast.
Utilizes weatherAPI to retrieve weather information based on City Code to pinpoint location.

Build a user interface to create a filter and update a list of products to reflect the results. Use the exercise to demonstrate not only a solution to the problem but your approach to software design and testing.
Scope:  
- As a user, I want to view my local weather results. 
- As a user, I want to filter for a specific category.
- As a user, I want the web application to be responsive in nature for mobile devices. 
- As a developer, I want an API key so I can call the an API to retrieve data. 

## How to Install the project

- run git clone https://github.com/ARasheed14/salsify-test.git
- cd into project
- run npm install
- run npm run start

## Architecture

![diagram](https://user-images.githubusercontent.com/17747101/169180967-cf136787-6308-4b1a-a70c-44eb04dad567.png)

## WeatherAPI

Usually our data comes from making API calls to the server. In this exercise Mock data is provided by datastore.js. Instead of performing a network request to retrieve data we get our data from the mock datastore. I would create services to handle all our data calls but since there are no network calls I didn't create any services.

## User Interface

## Available Scripts






