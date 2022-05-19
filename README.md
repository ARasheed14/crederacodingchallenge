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

To handle small UI styles I chose to use Matarial UI framework. Since the exercise is not UI focused I did not spend to much time making it perfect. I spent the majority of the time working on the filters. The operator filter to be exact. As the application scales the UI will be broken up into multiple components and we would pass the data to the components. This also allows us to remove a lot of the clutter out of the App.tsx file. Ex. Filter component can be a stand alone component. Search feature can be a stand alone component.

## State Management

I chose to use localstate due to the size of the application but as the application scales we would use a state management framework like Redux or any others.

## Typescript

Due to time I didn't get a chance to implement any type Models. Since we know what our data looks like for this exercise it is fine but we would usually implement Models to check our Data types.

## Available Scripts






