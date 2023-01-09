import React from 'react'
import TeamNavButton from './TeamNavButton'

export default function TeamMembersNavigator({setter}) {
  return (
    <div className='flex justify-center mt-[62px] mb-[82px]'>
      <TeamNavButton onClick={() => setter("View All")}>View All</TeamNavButton>
      <TeamNavButton onClick={() => setter("USA")}>USA</TeamNavButton>
      <TeamNavButton onClick={() => setter("Turkey")}>Turkey</TeamNavButton>
      <TeamNavButton onClick={() => setter("Lebanon")}>Lebanon</TeamNavButton>
    </div>
  )
}
