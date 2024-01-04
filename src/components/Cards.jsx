import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Cards({ todouser, handledelete, handlestatus }) {

  // UseNavigate hook for programmatic navigation
  let navigate = useNavigate();

  return (
    
    <Card
      id="card"
      style={{
        width: "21rem",
        margin: "30px",
        height: "25rem",
      }}
    >
      <Card.Body>
        
        {/* Display Task ID, Name, and Description */}
        <h5 className="card-title">Task: {todouser.id}</h5>

        <p className="card-name">Name: {todouser.Name}</p>

        <p className="card-description">Description: {todouser.Description}</p>

        {/* Status dropdown with styling based on status */}
        <div className="status-group">
          
          Status{" "}
          <select
            id="select2"
            style={{
              width: "180px",
              padding: "6px 10px",
              border: "3px solid #ccc",
              borderRadius: "15px",
              outline: "none",
              transition: "border-color 0.3s ease",

              backgroundColor:
                todouser.Status === "Completed" ? "palegreen" : "crimson",
            }}
            value={todouser.Status}
            onChange={(e) => handlestatus(todouser.id, e.target.value)}
          >
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>

        &nbsp;

        <div
          className="d-flex justify-content-end"
          style={{ marginLeft: "300px", margin: "45px" }}
        >
          {/* Edit and Delete buttons */}
          <Button
            id="card-button"
            className="btn btn-primary mx-2"
            variant="primary"
            style={{ width: "5rem" }}
            onClick={() => navigate(`/edit-user/${todouser.id} `)}
          >
            Edit
          </Button>

          <Button
            id="card-button2"
            className="btn btn-danger"
            variant="secondary"
            style={{ width: "5rem" }}
            onClick={() => {
              handledelete(todouser.id);
            }}
          >
            Delete
          </Button>

        </div>

      </Card.Body>

    </Card>

  );
}

export default Cards;
