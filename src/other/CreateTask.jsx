import React, { useState } from 'react'
import CompleteTask from '../components/TaskList/CompleteTask'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setcategory] = useState('')

  const [newTask, setNewTask] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()

    setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, Completed:false, failed:false })

    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(function (elem) {
      if(asignTo == elem.firstName){
        elem.tasks.push(newTask)
        console.log(elem)
      }
    })

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAsignTo('')
    setcategory('')
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className=" flex w-full flex-wrap items-start justify-between ">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
              value ={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="text" placeholder="Make a UI design " />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input 
              value ={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="Date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
              value ={asignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category </h3>
              <input 
              value ={category}
              onChange={(e)=>{
                setcategory(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="text" placeholder="designde, dev, etc" />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5 ">Description</h3>
            <textarea 
            value ={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
             className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400" name="" id=""></textarea>
           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Crate Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask