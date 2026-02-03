import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex items-center justify-start overflow-x-auto gap-5 flex-nowrap h-[55%] w-full py-5 mt-10 '>
        <div className='shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl overflow-hidden'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 dec 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptas laborum numquam minima temporibus libero, non eos, nisi sed vitae fugiat </p>
        </div>
         <div className='shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 dec 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi optio et doloribus cum, aperiam eos.</p>
        </div>
         <div className='shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 dec 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi optio et doloribus cum, aperiam eos.</p>
        </div>
         <div className='shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 dec 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi optio et doloribus cum, aperiam eos.</p>
        </div>
         <div className='shrink-0 h-full w-[300px] p-5 bg-fuchsia-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 dec 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci obcaecati repellat doloremque esse distinctio laudantium atque perspiciatis nam earum!</p>
        </div>
         <div className='shrink-0 h-full w-[300px] p-5 bg-cyan-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 dec 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Post a video on instagram</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nostrum minima, facilis ea excepturi sit reiciendis laboriosam soluta praesentium. Ea cum mollitia culpa voluptates illo.</p>
        </div>
    </div>
  )
}

export default TaskList