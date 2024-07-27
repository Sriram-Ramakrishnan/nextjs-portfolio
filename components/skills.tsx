"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar as FullStar } from "react-icons/fa6";
import { FaRegStar as EmptyStar } from "react-icons/fa6";
import { FaRegStarHalfStroke as HalfStar } from "react-icons/fa6";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 md:gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col justify-center gap-1 items-center bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/20 dark:text-white/80 w-32 h-32"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: [null, 1.1, 1.1] }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
          <Image src={skill.icon} alt={skill.name} className="w-8 h-8 lg:w-10 lg:h-10 mx-auto" />
          <p className="text-sm lg:text-lg">  {skill.name} </p>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => {
              if (i < skill.stars) {
                return <FullStar key={i} className="text-gray-700 dark:text-white/80" />;
              } else {
                return <EmptyStar key={i} className="text-gray-700 dark:text-white/80" />;
              }
            })}
          </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
