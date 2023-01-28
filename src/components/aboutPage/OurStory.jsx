import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function OurStory() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, x: [-200, 100], rotateY: 90 }}
      transition={{ duration: 0.9, type: 'tween', stiffness: 100 }}
      whileInView={{ opacity: 1, x: [30, 20, 0], rotateY: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col items-center"
    >
      <div>
        <h1 className="mt-[37px] md:mt-[126px] mb-[14px] md:mb-[43px] text-[32px] md:text-[64px] text-[#025594] font-bold leading-[38px] md:leading-[75px]">
          {t('About.our-story')}
        </h1>
      </div>
      <div className="mb-[50px] md:mb-[129px]">
        <p className="max-w-[312px] md:max-w-[817px] text-center text-[16px] md:text-[24px] font-normal leading-loose md:leading-[36px]">
          {t('About.our-story-paragraph-p1')}
        </p>
        <p className="max-w-[312px] md:max-w-[817px] text-center text-[16px] md:text-[24px] font-normal leading-loose md:leading-[36px] mt-[30px]">
          {t('About.our-story-paragraph-p2')}
        </p>
      </div>
    </motion.div>
  );
}
