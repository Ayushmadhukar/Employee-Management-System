import React, { useContext } from 'react'
import { AuthContext } from '../context/Authprovider'

const AllTask = () => {
    const [userData,setUseData] = useContext(AuthContext)
  return (
    <div id='task' className='bg-[#1c1c1c] p-5 mt-5 rounded  '>
        <div className='bg-neutral-800 rounded-xs mb-2 px-4 py-2 flex justify-between'>
            <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
            <h5 className='w-1/5 text-lg font-medium'>New Task</h5>
            <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
            <h5 className='w-1/5 text-lg font-medium'>Complected Task</h5>
            <h5 className='w-1/5 text-lg font-medium'>Failed Task</h5>
        </div>
        <div>
            {userData.map((elem, idx)=>{
            return <div key={idx} className='bg-neutral-600 mb-2 px-4 py-2 flex justify-between'>
            <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
            <h5 className='w-1/5 text-lg font-medium'>{elem.taskStats.newTask}</h5>
            <h5 className='w-1/5 text-lg font-medium'>{elem.taskStats.active}</h5>
            <h5 className='w-1/5 text-lg font-medium'>{elem.taskStats.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium'>{elem.taskStats.failed}</h5>
        </div>
        })}
        </div>
        </div>
  )
}

export default AllTask