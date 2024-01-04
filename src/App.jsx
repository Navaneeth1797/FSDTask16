import React, { useState } from "react";
import Dashboard from "./components/Dashbord/";
import Edit from "./components/Edit";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {

  // State to manage the list of todos
  let [todouser, setTodouser] = useState([
  
    // Sample todo data
    {
      id: 1,
      Name: "Office task",
      Description: "This is the description for My first Task",
      Status: "Not Completed",
    },

    {
      id: 2,
      Name: "Office task",
      Description: "This is the description for My second Task",
      Status: "Completed",
    },

    {
      id: 3,
      Name: "Office task",
      Description: "This is the description for My third Task",
      Status: "Not Completed",
    },

  ]);

  return (

    <div id="Todoapp">
      
      <BrowserRouter>
        
        <Routes>
          
          {/* Route for the dashboard */}
          <Route
            path="/dashboard"
            element={
              <Dashboard todouser={todouser} setTodouser={setTodouser} />
            }
          />

          {/* Route for editing a user */}
          <Route
            path="/edit-user/:id"
            element={<Edit todouser={todouser} setTodouser={setTodouser} />}
          />

          {/* Default route, redirect to the dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" />} />

        </Routes>

      </BrowserRouter>

    </div>

  );
  
}

export default App;
