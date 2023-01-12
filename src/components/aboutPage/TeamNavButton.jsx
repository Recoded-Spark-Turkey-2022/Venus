import React from 'react'

export default function TeamNavButton({children,onClick}) {
  return (
    <button type='button' className='text-[#025594] font-medium rounded-full hover:bg-[#025594] hover:text-[#ffffff] px-[17px] py-[4px]' onClick={onClick}>{children}</button>
  )
}
