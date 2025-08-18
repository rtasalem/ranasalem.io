import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'

export const projects = [
  {
    title: 'ranasalem.io',
    tech: 'TypeScript, Next.js, DaisyUI, Contentlayer, MDX (Markdown + JSX)',
    role: 'Sole developer',
    description:
    'My personal portfolio website where I share my career history, projects, and write for my blog.',
    links: [
      { icon: faGithub, label: 'GitHub' ,url: 'https://github.com/rtasalem/ranasalem.io' },
      { icon: faGlobe, label: 'Website', url: 'https://ranasalem.io' }
    ],
    year: 2024,
  },
  {
    title: 'Busgres',
    tech: 'JavaScript, Node.js, NPM, Microsoft Azure, Service Bus, PostgreSQL',
    role: 'Sole developer',
    description:
    'Node.js module that consumes Azure Service Bus messages from topics or queues and writes the data to a PostgreSQL database. Configurable with a single client.',
    links: [
      { icon: faGithub, label: 'GitHub', url: 'https://github.com/rtasalem/busgres' },
      { icon: faNpm, label: 'NPM Registry', url: 'https://www.npmjs.com/package/busgres' }
    ],
    year: 2024,
  },
  {
    title: 'Draft My CV',
    tech: 'JavaScript, Node.js, Express.js, Bulma, Nunjucks',
    role: 'Sole developer',
    description:
    'Online form for generating professional CVs in Microsoft Word or PDF format from user input. Streamlines job applications.',
    links: [
      { icon: faGithub, label: 'GitHub', url: 'https://github.com/rtasalem/draft-my-cv' },
      { icon: faGlobe, label: 'Website', url: 'https://draftmycv.co.uk' }
    ],
    year: 2024,
  },
  {
    title: 'Barbie E-Commerce Platform',
    tech: 'Java, JavaScript, React, Spring Boot, REST API',
    role: 'Backend developer',
    description:
      'Full-stack Barbie themed e-commerce website submitted as a final group project to mark the end of my time as a trainee software developer at FDM Group.',
    links: [
      { icon: faGithub, label: 'GitHub', url: 'https://github.com/rtasalem/barbie-ecommerce-website' }
    ],
    year: 2023,
  },
  {
    title: 'MacBook Setup Scripts',
    tech: 'Bash, Homebrew',
    role: 'Maintainer',
    description:
      'A series of Bash scripts I created to make the process of setting up a MacBook for software development under Defra\'s Farming and Countryside Programme easier. Installs all mandatory packages and software. Also provides optional installs for a variety of applications that make day-to-day development and communications easier for developers at all levels.',
    links: [
      { icon: faGithub, label: 'GitHub', url: 'https://github.com/rtasalem/dfcp-mac-scripts' }
    ],
    year: 2024,
  }
]
