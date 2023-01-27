import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../UI/Container';
import TeamMembersNavigator from './TeamMembersNavigator';
import TeamMemberCard from './TeamMemberCard';
import teamData from '../../TeamData/teamData';

export default function OurTeamSection() {
  const { t } = useTranslation();
  const [showByCountry, setShowByCountry] = useState('View All');

  const itemsToDisplay = teamData.filter((team) => {
    if (showByCountry === 'View All') {
      return true;
    }
    return team.country === showByCountry;
  });

  return (
    <div className="bg-[#EAFBFF]">
      <h1 className="text-center text-[48px] font-bold leading-[56px] text-[#025594] pt-[25px] md:pt-[85px]">
        {t('About.our-team')}
      </h1>
      <Container>
        <div className="flex flex-col items-center pb-[158px]">
          <TeamMembersNavigator
            setter={setShowByCountry}
            output={showByCountry}
          />
          <div className="flex flex-wrap grid-rows-2 justify-center items-center  gap-x-[50px] gap-y-[93px] max-w-[1000px] content-center">
            {itemsToDisplay.map((teamMember) => (
              <TeamMemberCard
                key={teamMember.id}
                name={teamMember.name}
                img={teamMember.img}
                href={teamMember.linkedin}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
