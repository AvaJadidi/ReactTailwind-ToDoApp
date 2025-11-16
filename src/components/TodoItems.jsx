import React from "react";
import check from "../assets/check.png"
import delet from "../assets/trash.png"
import uncheck from "../assets/uncheck.png"
function TodoItems({text, id, isComplete,delTodoHandler,checkHandler}) {
  return (
    <div  className="flex items-center my-3 gap-2">
      <div onClick={()=>{checkHandler(id)}} className="flex flex-1 items-center cursor-pointer ">
        <img className="w-5 " src={isComplete ? check : uncheck} alt="" />
        <p className={`text-slate-700 ml-4 text-lg decoration-amber-500 ${isComplete ? "line-through" : ""}`}>
          {text}
          </p>
      </div>
      <img onClick={()=>{delTodoHandler(id)}} src={delet}  className="w-5 cursor-pointer" alt="" />
    </div>
  );
}

export default TodoItems;
