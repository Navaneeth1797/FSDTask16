# React + Vite

# React Todo App

A simple React application for managing a todo list.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Features](#features)
- [How to Contribute](#how-to-contribute)


## Prerequisites

- Node.js and npm installed

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   
Install dependencies:
npm install

Run the application:
npm start

Open your browser and navigate to "http://localhost:5173/"


Features
Add, edit, delete todos
Filter todos by status


App Component (App.jsx):
Holds the main state (todouser) and renders the Dashboard component within a BrowserRouter.
Uses Routes and Route components for handling different views, including the Dashboard and Edit components.
Dashboard Component (Dashbord.jsx):

Manages the state for the to-do list (todouser).
Provides a form for adding new tasks, a status filter, and renders the Cards component for displaying tasks.
Uses the filterselection function to filter tasks based on their status.
Utilizes the handleadd function to add new tasks and the handledelete function to delete tasks.
Passes down the handlestatus function to the Cards component for updating task status.

Cards Component (Cards.jsx):
Renders individual task cards, displaying task information (name, description, status).
Provides a select input for changing the task status.
Uses the handlestatus function passed down from the Dashboard component to update the task status.
Uses React Router's useNavigate hook to navigate to the edit page when the "Edit" button is clicked.

Edit Component (Edit.jsx):
Manages the state for the edited task (Name and Description).
Uses the useParams hook from React Router to extract the task ID from the URL.
Retrieves the task information based on the ID using the findindex and getuseredit functions.
Provides a form for editing task details and uses the handleedit function to update the task.
Uses the useNavigate hook to navigate back to the dashboard after updating the task

Additional Features:
Clear Form Inputs: Added a clearForm function to clear the form inputs after adding a new todo.

Filter All Todos: The default filter is set to "All" to display all todos regardless of their completion status.

Additional useEffect: Included an additional useEffect block for any logic that needs to run on component mount.

Enhanced handleAdd: The handleAdd function now creates a new todo object and adds it to the existing todos.

## Deployment

The application is deployed on Netlify. You can access it [here] "https://dulcet-frangollo-fa5162.netlify.app/dashboard"

