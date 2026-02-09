import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl overflow-hidden'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
          <p className='text-sm mt-2 '>{data.description}
          </p>
          <div className='flex justify-between gap-2 mt-4'>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md text-xs h-10 font-medium hover:bg-green-700 transition">
  Mark as Completed
</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-red-700 transition">
  Mark as Failed
</button>
          </div>
        </div>
  )
}

export default AcceptTask