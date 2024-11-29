'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CodeBracketIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

import { subtitleVariants, listItemsVariants } from './Projects.animations'

const Projects = () => (
  <section className="w-full py-8">
    <div className="max-w-screen-lg px-8 py-6 mx-auto">
      <div className="mb-12 md:mb-8">
        <h2 className="text-3xl font-medium md:text-4xl text-black dark:text-white leading-10 md:leading-12">
          Projects
        </h2>
        <motion.h3
          className="text-md font-normal md:text-lg text-gray-400 dark:text-zinc-500"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I enjoy tinkering around with micro-projects
        </motion.h3>
      </div>

      <ul className="list-none space-y-10 md:space-y-2 w-full">
        <motion.li
          variants={listItemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row items-start space-x-4 md:items-center"
        >
          <CodeBracketIcon className="w-5 h-5 flex-shrink-0 mt-2 md:mt-0" />
          <p className="font-light">
            Creating or contributing to open-source projects, such as{' '}
            <Link
              href="https://github.com/AdrianApan/yamde"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex space-x-1 items-center mx-auto border-b border-dashed border-gray-300 dark:border-slate-600 hover:border-primary hover:dark:border-primary hover:text-primary leading-6"
            >
              YAMDE
            </Link>
          </p>
        </motion.li>

        <motion.li
          variants={listItemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row items-start space-x-4 md:items-center"
        >
          <LightBulbIcon className="w-5 h-5 flex-shrink-0 mt-2 md:mt-0" />
          <p className="font-light">
            Building proof-of-concepts and prototypes, in the lines of{' '}
            <Link
              href="https://github.com/AdrianApan/mfe-react"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex space-x-1 items-center mx-auto border-b border-dashed border-gray-300 dark:border-slate-600 hover:border-primary hover:dark:border-primary hover:text-primary leading-6"
            >
              React micro-frontend
            </Link>{' '}
            and{' '}
            <Link
              href="https://github.com/AdrianApan/highlighter-prototype"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex space-x-1 items-center mx-auto border-b border-dashed border-gray-300 dark:border-slate-600 hover:border-primary hover:dark:border-primary hover:text-primary leading-6"
            >
              Highlighter prototype
            </Link>
          </p>
        </motion.li>

        <motion.li
          variants={listItemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row items-start space-x-4 md:items-center"
        >
          <RocketLaunchIcon className="w-5 h-5 flex-shrink-0 mt-2 md:mt-0" />
          <p className="font-light">
            Launching fully-fledged monetised products, such as{' '}
            <Link
              href="https://role.so/"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex space-x-1 items-center mx-auto border-b border-dashed border-gray-300 dark:border-slate-600 hover:border-primary hover:dark:border-primary hover:text-primary leading-6"
            >
              Role.so
            </Link>{' '}
            and{' '}
            <Link
              href="https://www.censtats.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex space-x-1 items-center mx-auto border-b border-dashed border-gray-300 dark:border-slate-600 hover:border-primary hover:dark:border-primary hover:text-primary leading-6"
            >
              Censtats
            </Link>{' '}
            <span className=" text-gray-400 dark:text-zinc-500">(sold in 2021)</span>
          </p>
        </motion.li>
      </ul>
    </div>
  </section>
)

export default Projects
