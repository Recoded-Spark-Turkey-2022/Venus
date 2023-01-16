import React from 'react'
import { useTranslation } from 'react-i18next';

export default function TeamMemberCard({name, href}) {
  const {t} = useTranslation()
  return (
    <div className='max-w-[263px]'>
        <h5 className='text-[#025594] text[14px] font-bold leading-[16.5px] tracking-[-0.32px]'><a href={href} rel="noreferrer" target="_blank">{name}</a></h5>
        <span className='text-[#025594] text[12px] font-light leading-[14px] tracking-[-0.27px]'>{t("About.our-team-job-title.job-title")}</span>
    </div>
  )
}
