import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-cyan-600 text-white font-[Poppins] py-2 px-6 rounded-3xl md:ml-8 hover:bg-gray-800 font-bold 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button