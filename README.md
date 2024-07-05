# ToDo List Application

A simple and elegant ToDo List application built with React. This application allows users to add, edit, complete, and delete tasks. The tasks are stored in the browser's local storage so that they persist even after the page is refreshed.

## Features

Add new tasks
Edit existing tasks
Mark tasks as completed
Delete tasks
Persistent storage using local storage

## Technologies Used

React
HTML
CSS
JavaScript
React Icons

# Getting Started 
## Prerequisites

Make sure you have the following installed on your machine:

Node.js
npm (Node Package Manager)

# Installation

## Clone the repository:

git clone https://github.com/Rakshithaalluri/Get-things-done-Todo-list.git

## Navigate to the project directory:
cd todo-list

## Install the dependencies:
npm install

## Running the Application

To start the application in development mode, run:
npm start

This will start the application and open it in your default web browser. If it doesn't open automatically, navigate to http://localhost:3000 in your browser.

## Project Structure

src/App.js: The main component that holds the state and renders the Header, Form, and Tasks components.

src/components/Form.js: A functional component that handles the input form for adding and editing tasks.

src/components/Header.js: A simple component that displays the header of the application.

src/components/Tasks.js: A component that displays the list of tasks and handles the completion and deletion of tasks.

src/App.css: Styles for the main application component.

src/components/Form.css: Styles for the Form component.

src/components/Header.css: Styles for the Header component.

src/components/Tasks.css: Styles for the Tasks component.

# Components

## App Component
Manages the state of the application.
Handles local storage for tasks.
Renders Header, Form, and Tasks components.

## Form Component
Handles input for new tasks and editing existing tasks.
Updates the state in the App component.

## Header Component
Displays the main heading and subtitle of the application.

# Tasks Component
Displays the list of tasks.
Handles task completion, deletion, and editing.

## CSS Styling
The application uses CSS for styling, with media queries for responsiveness. Each component has its own CSS file for better modularity.


### Deployment 

To build the application for production, run:
npm run build

This will create an optimized production build in the build folder. You can then deploy the contents of the build folder to your preferred hosting service.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.




