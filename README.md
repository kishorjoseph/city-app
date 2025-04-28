# React + Vite +  Spring Boot for serving the API

#  This read me include React set up  + Spring Boot Server set up instructions # 

# Technology & Requirements

Tools: Built with React + Redux Toolkit

Business :  Basic functionality to count the occurances of a city present within the response of a public weather API.

UI Requirement - Need an input box to type in the city and a search/submit functionality that will show the number of repeated 
cities present within the API.

Public API - https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22


# Installation and set up instructions React

git clone https://github.com/kishorjoseph/city-app.git

cd city-app


# Install the dependencies

npm install


# Start the development server

npm start

Vite config updated to auto open the browser at port  http://localhost:3001/


# # # # # # # # # # # # # # # #  SERVER SET UP # # # # # # # # # # 


# Installation and set up instructions Spring Boot Server for the API

Clone the repository from - https://github.com/kishorjoseph/weather-app

Navigate to the directory and install the maven dependencies - mvn clean install

Run the spring boot project - mvn spring-boot:run

Notes - Project port configured to run on 8080 inside resources

End points available to test from postman or from React from end

http://localhost:8080/api/weather/citycount?cityname=

http://localhost:8080/api/weather

If maven not installed -

brew install maven # (if using Homebrew)

then cd path to project and do an mvn clean install.

Alternatively , project can be loaded into intellijIDE and run the main application to serve the API

















This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
