'use client'

import { motion } from 'framer-motion'
import { Square3Stack3DIcon, UsersIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline'

import { subtitleVariants, listItemsVariants } from './Overview.animations'

const Overview = () => (
  <section className="bg-gray-50 dark:bg-base-200 w-full py-8">
    <div className="max-w-screen-lg px-8 py-6 mx-auto flex flex-col md:flex-row justify-between">
      <div className="mb-12 md:mb-0 w-full md:w-2/4">
        <h2 className="text-3xl font-medium md:text-4xl text-black dark:text-white leading-10 md:leading-12">
          A quick overview
        </h2>
        <motion.h3
          className="text-md font-normal md:text-lg text-gray-400 dark:text-zinc-500"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          10+ years of experience & 2 early startups
        </motion.h3>
      </div>

      <ul className="list-none space-y-10 md:space-y-8 w-full md:w-2/4">
        <motion.li
          variants={listItemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-row items-center space-x-2">
            <Square3Stack3DIcon className="w-5 h-5" />
            <span className="font-medium text-lg">Stack</span>
          </div>
          <p className="font-light">
            I enjoy working with Typescript, React, Node, Next JS, Tailwind CSS, React Testing
            Library and Cypress. However, I believe that choosing the right tech depends on the
            project requirements and skills of a team.
          </p>
        </motion.li>

        <motion.li
          variants={listItemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-row items-center space-x-2">
            <UsersIcon className="w-5 h-5" />
            <span className="font-medium text-lg">Role</span>
          </div>
          <p className="font-light">
            I thrive in both technical and managerial roles, with experience to back up both. I lean
            towards frontend development as I am closer to everything UI and UX, however I am also
            comfortable with any JS based backend frameworks.
          </p>
        </motion.li>

        <motion.li
          variants={listItemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-row items-center space-x-2">
            <PuzzlePieceIcon className="w-5 h-5" />
            <span className="font-medium text-lg">Approach</span>
          </div>
          <p className="font-light">
            I am UX-driven with a lean and agile product mindset. I consider thoughtful user
            experiences paired with beautiful user interfaces a key aspect of a successful product.
          </p>
        </motion.li>
      </ul>
    </div>
  </section>
)

export default Overview
