import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState([]);
  const [strikeValue, setStrikeValue] = useState([]);
  const [Count, totalcount] = useState("");

  var handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      strikeValue[event.target.id] = "text-decoration-line-through";
      event.totalCount = Count + 1;
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
      strikeValue[event.target.id] = "text-decoration-none";
    }
    setChecked(updatedList);
  };

  var HandleOnChange = (event) => {
    setTask(event?.target?.value);
  };

  var HandleOnClick = () => {
    setItems([...items, task]);
  };

  var DeleteTask = (index) => {
    console.log(index);
    const updateditems = items.filter((element, id) => {
      return id !== index;
    });
    setItems(updateditems);
  };

  var checkCount = checked.length;

  var uncheckCount = items.length - checkCount;

  return (
    <div>
      <div
        style={{ height: "100vh" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="w-50 ">
          <div className="d-flex justify-content-center">
            <h1 className="my-3"><b>To-Do List </b></h1>
          </div>

          < div className="d-flex justify-content-center">
            <input className="w-75 m-2"
              type="text"
              name="task"
              placeholder="Add tasks here...."
              onChange={HandleOnChange}
              value={task}
            ></input>
            <button style={{ backgroundColor:"salmon" }} onClick={HandleOnClick} type="button" className="btn btn-md h-25 m-2">Add</button>
          </div>

          <div class="container ">
            <div className="row  m-lg-5 m-md-4 m-sm-3">
            <div className=" col-xl-6 col-md-5 col-sm-12 col-12 completeTask">
              {`Accomplished tasks : ${checkCount}`}
            </div>

            <div className="col-xl-6 col-md-5 col-sm-12 col-12 uncompleteTask">
              {`Unaccomplished tasks : ${uncheckCount}`}
            </div>
            </div>
          </div>
          

          <div className="showItems w-100 ">
            <ul>
              {items?.map((item, index) => {
                const indexValue = strikeValue[index];
                return (
                  <>
                  <div key={index} className="d-flex flex-row justify-content-between w-100" >
                    <div>
                    <input className="me-3"
                      value={item}
                      id={index}
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <span className={indexValue}>{item}</span>
                    </div>

                    <div>
                    <i
                      className="fa fa-trash-o"
                      onClick={() => DeleteTask(index)}
                    ></i>

                    </div>
                  </div>
                    <hr/>
                    </>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ToDoList;
