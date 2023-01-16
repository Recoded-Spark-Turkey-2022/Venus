import React from 'react'
import { useTranslation } from 'react-i18next';
import TeamNavButton from './TeamNavButton'

export default function TeamMembersNavigator({setter}) {
  const {t} = useTranslation()
  return (
    <div className='flex justify-center mt-[62px] mb-[82px]'>
      <TeamNavButton onClick={() => setter("View All")}>{t("About.our-team-countries.view-all")}</TeamNavButton>
      <TeamNavButton onClick={() => setter("USA")}>{t("About.our-team-countries.USA")}</TeamNavButton>
      <TeamNavButton onClick={() => setter("Turkey")}>{t("About.our-team-countries.Turkey")}</TeamNavButton>
      <TeamNavButton onClick={() => setter("Lebanon")}>{t("About.our-team-countries.Lebanon")}</TeamNavButton>
    </div>
  )
}
