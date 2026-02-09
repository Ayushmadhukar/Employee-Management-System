import React, { useContext, useState } from 'react'
import CompleteTask from '../components/TaskList/CompleteTask'
import { AuthContext } from '../context/Authprovider'

const CreateTask = () => {

  const [userData,setUseData] = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setcategory] = useState('')

const submitHandler = (e) => {
  e.preventDefault()

  const task = {
    title,
    description,
    date,
    category,
    active: false,
    newTask: true,
    completed: false,
    failed: false
  }

  const updatedData = userData.map((elem) => {
    if (asignTo.trim().toLowerCase() === elem.firstName.toLowerCase()) {
      return {
        ...elem,
        tasks: [...elem.tasks, task],
        taskStats: {
          ...elem.taskStats,
          newTask: elem.taskStats.newTask + 1
        }
      }
    }
    return elem
  })

  setUseData(updatedData)

  setTitle('')
  setDescription('')
  setDate('')
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
              value ={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="text" placeholder="Make a UI design " />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input 
              value ={date}
              onChange={(e)=>{
                setDate(e.target.value)
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
            value ={description}
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
             className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400" name="" id=""></textarea>
           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Crate Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask