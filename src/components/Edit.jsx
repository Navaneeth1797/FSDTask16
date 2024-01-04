import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

function Edit({ todouser, setTodouser }) {
  
  let paramas = useParams();

  // State variables for form inputs
  let [Name, setName] = useState("");
  let [Description, setDescription] = useState("");
  let navigate = useNavigate();

  // Function to find the index of a todo in the array
  let findindex = (id) => {
    for (let i = 0; i < todouser.length; i++) {
      if (todouser[i].id === id) {
        return i;
      }
    }
  };

  // Function to handle editing a todo
  let handleedit = () => {
    let id = Number(paramas.id);
    // Find the index of the todo with the given ID
    let index = findindex(id);
    let newarr = [...todouser];
    // Replace the old todo with the updated information
    newarr.splice(index, 1, { id, Name, Description });

    // Set the updated array of todos
    setTodouser(newarr);
    // Navigate back to the main dashboard
    navigate("/Card");
  };

  // Function to get user details for editing
  let getuseredit = () => {
    let id = Number(paramas.id);
    let index = findindex(id);
    // Set the Name and Description state variables with the current todo information
    setName(todouser[index].Name);
    setDescription(todouser[index].Description);
  };

  // Fetch the todo information when the component mounts
  useEffect(() => {
    getuseredit();
  }, []);

  return (

    <div className="container">
      <div className="todotitle3">
        
        <h1
          className="h3 mb-0 text-gray-800 "
          id="title3"
          style={{ textAlign: "center", marginTop: "10rem" }}
        >
          Edit Page
        </h1>

      </div>

      &nbsp;

      <div
        className="form2"
        id="formcontent2"
        style={{
          borderRadius: "95px",
          marginTop: "10rem",
          border: "8px solid #369980",
          width: "85rem",
          height: "37rem",
        }}
      >
        <Form>
          
          <div className="row">
            <div className="col-md-8">
              
              <Form.Control
                
                style={{
                  marginLeft: "15rem",
                  marginTop: "2rem",
                  border: "5px solid black",
                  height: "5rem",
                }}

                id="name2"
                value={Name}
                placeholder="Edit Todo Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            &nbsp;

            <div className="col-md-8">
              
              <Form.Control
                
                style={{
                  marginLeft: "15rem",
                  marginTop: "2rem",
                  border: "5px solid black",
                  height: "15rem",
                }}

                id="description2"
                value={Description}
                placeholder="Edit Todo Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            &nbsp;

            <div className="col-md-8">
              
              <Button
                id="editcard"
                style={{
                  marginLeft: "30rem",
                  marginTop: "2rem",
                  width: "14rem",
                  height: "4rem",
                }}
                onClick={() => handleedit()}
              >
                Update Todo
              </Button>

            </div>

          </div>

        </Form>

      </div>

    </div>

  );
}

export default Edit;
