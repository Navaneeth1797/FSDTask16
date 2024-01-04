import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cards from "./Cards/";

function Dashbord({ todouser, setTodouser }) {

  // State variables for form inputs and filters
  let [Name, setName] = useState("");
  let [Description, setDescription] = useState("");
  let [Status, setStatus] = useState("Not Completed");
  let [Filterstatus, setFilterstatus] = useState("All");

  // Function to filter todos based on status
  let filterselection = () => {
    if (Filterstatus === "Completed") {
      return todouser.filter((todouser) => todouser.Status === "Completed");
    } else if (Filterstatus === "Not Completed") {
      return todouser.filter((todouser) => todouser.Status === "Not Completed");
    } else {
      return todouser;
    }
  };

  // Function to handle status change
  let handlestatus = (id, newStatus) => {
    let updatedarr = todouser.map((todouser) =>
      todouser.id === id ? { ...todouser, Status: newStatus } : todouser
    );
    setTodouser(updatedarr);
  };

  // Function to handle adding a new todo
  let handleadd = () => {
    let id = todouser.length ? todouser[todouser.length - 1].id + 1 : 1;
    let newarr = [...todouser];
    newarr.push({ id, Name, Description, Status });
    setTodouser(newarr);
    setName("");
    setDescription("");
    setStatus("");
    setFilterstatus("All");
  };

  // Function to handle todo deletion
  let handledelete = (id) => {
    let index;
    for (let i = 0; i < todouser.length; i++) {
      if (todouser[i].id == id) {
        index = i;
        break;
      }
    }
    let newArr = [...todouser];
    newArr.splice(index, 1);
    setTodouser(newArr);
  };

  return (
    <>
      <div className="container" style={{ background: "darkseagreen" }}>
        
        <div className="todotitle">
          
          <h1
            className="h3 mb-0 text-gray-800 "
            id="title"
            style={{ color: "#369980" }}
          >
            My Todo
          </h1>

        </div>

        <div className="form" id="formcontent">
          
          <Form>
            
            <div className="row">
              
              <div className="col-md-4">
                
                <Form.Control
                  //Name Input
                  id="name1"
                  value={Name}
                  placeholder="Todo Name"
                  style={{
                    border: "1px solid #369980",
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                
                <Form.Control
                  //Description Input
                  id="description1"
                  value={Description}
                  placeholder="Todo Description"
                  style={{
                    border: "1px solid #369980",
                  }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="col-md-4" id="button">
                
                <Button
                  //Add Todo Button
                  style={{
                    backgroundColor: "#13AD89",
                    width: "12rem",
                    borderRadius: "15px",
                  }}
                  onClick={() => handleadd()}
                  disabled={!Name.trim() || !Description.trim()}
                >
                  Add Todo
                </Button>

              </div>

            </div>

          </Form>

        </div>

        <div className="statusfiltercontent">
          
          <div className="row">
            
            <h5 className=" text-gray-800 " id="title2">
              My Todos
              <label className=" text-black" id="filter">
                Status Filter :
              </label>

              <select
                //Form Section
                id="select"
                value={Filterstatus}
                onChange={(e) => setFilterstatus(e.target.value)}
              >
                <option className="text-black centered" value="All">
                  All
                </option>

                <option className="text-black centered" value="Completed">
                  Completed
                </option>

                <option className="text-black" value="Not Completed">
                  Not Completed
                </option>

              </select>

            </h5>

          </div>

        </div>

      </div>

      <div className="container-sm">
        
        <div className="row">
          
          {/* Mapping Over Filtered Todos */}
          {filterselection().map((todouser) => {

            return (

              // Render Cards component for each todo
              <Cards
                todouser={todouser}
                key={todouser.id}
                handledelete={handledelete}
                handlestatus={handlestatus}
              />
            );

          })}

        </div>

      </div>

    </>

  );
  
}

export default Dashbord;
