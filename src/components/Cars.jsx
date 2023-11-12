import React from 'react'

function Cars({name}) {
  return (
    <div className='flex top-10 justify-center inset-x-0 px-5 py-5'>
        <img src={name} className='w-auto h-3/5 outline-2'/> 
    </div>
  )
}

export default Cars