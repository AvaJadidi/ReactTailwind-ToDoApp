import React, { useEffect, useRef, useState } from "react";
import checkList_icon from "../assets/checkList.png";
import TodoItems from "./TodoItems";

function Todo() {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);

  const inputRef = useRef();
  // add---------------------------------
  const addHandler = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
    console.log(todoList);
  };
  // delete
  const delTodoHandler = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  // check and unchecked
  const checkHandler = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // console.log(todo);
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
//   useEfect-----------------------------------

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList]);

//   main return--------------------------------
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center my-6 gap-2 pl-2">
        <img className="w-8" src={checkList_icon} alt="" />
        <h1 className="text-3xl font-semibold ">ToDo List</h1>
      </div>
      {/* input box */}
      <div className="flex items-center my-6 rounded-full bg-gray-200">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={addHandler}
          className="rounded-full bg-orange-600 w-28 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>
      {/* todo list */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              delTodoHandler={delTodoHandler}
              checkHandler={checkHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
