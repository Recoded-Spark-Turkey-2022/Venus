import React from 'react'


export default function TeamMemberCard({name, title}) {
 
  return (
    <div className='max-w-[263px]'>
        <h5 className='text-[#025594] text[14px] font-bold leading-[16.5px] tracking-[-0.32px]'>{name}</h5>
        <span className='text-[#025594] text[12px] font-light leading-[14px] tracking-[-0.27px]'>{title}</span>
    </div>
  )
}
