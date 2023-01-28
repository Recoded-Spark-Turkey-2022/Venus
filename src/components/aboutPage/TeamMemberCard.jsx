import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TeamMemberCard({ name, href, img }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.9,
        delay: 0.3,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-[263px] flex flex-col items-center justify-center brightness-110  duration-500 ease-in hover:brightness-75 "
    >
      <a
        href={href}
        rel="noreferrer"
        className="inline-flex flex-col items-center justify-center"
        target="_blank"
      >
        <img
          src={img}
          alt="profile-pic"
          className=" aspect-[3/4]  object-cover  rounded-[20px] "
        />
        <h5 className="text-[#025594] text[14px] font-bold leading-[16.5px] tracking-[-0.32px] mt-10">
          {name}
        </h5>
        <span className="text-[#025594] text[12px] font-light leading-[14px] tracking-[-0.27px]">
          {t('About.our-team-job-title.job-title')}
        </span>
      </a>
    </motion.div>
  );
}
