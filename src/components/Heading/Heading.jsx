import React from 'react'

const Heading = (props) => {
  return (
    <div className='w-fit mx-auto'>
        <h2 className='text-zinc-800 md:text-5xl text-[2.5rem] font-bold'><span className='text-orange-500'>{props.highlight}</span> {props.heading}</h2>
        <div className='w-34 h-1 bg-orange-300 md:mt-6 mt-3 ml-auto'></div>
    </div>
  )
}

export default Heading
