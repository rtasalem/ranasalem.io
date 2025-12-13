import { faGlobe, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNpm, faDocker } from '@fortawesome/free-brands-svg-icons'

export const projects = [
  {
    title: 'Find farm and land payment data',
    tech: 'Service migration, JavaScript, Node.js, Hapi.js, Nunjucks, HTML, GOV.UK Design System (GDS), PostgreSQL, Docker, AWS, Google Tag Manager, Content Security Policies (CSP), performance testing, journey testing, Playwright, BrowserStack',
    role: 'Full stack developer',
    description:
    'Lead the service migration from an Azure-based development platform to an AWS-based development platform. Iterated and improved existing features by implementing performance testing, journey testing, and aligning user-facing frontend views to GDS to be consistent with government-backed accessibility research. Regularly worked with and mentored "guest software developers" from both technical and non-technical backgrounds to deliver features and resolve bugs and technical debt.',
    links: [
      { icon: faGithub, label: 'GitHub' ,url: 'https://github.com/defra/fcp-mpdp-core' },
      { icon: faGlobe, label: 'Website', url: 'https://find-farm-and-land-payment-data.defra.gov.uk' }
    ],
    year: 2025
  },
  {
    title: 'Bin It!',
    tech: 'Python, Beautiful Soup (bs4), MongoDB, Docker',
    role: 'Backend developer, maintainer',
    description:
    'Python application that scrapes the Glasgow City Council (GCC) Refuse and Recycling Calendar and sends out email alerts the day before a bin collection is due, specifically which colour of bins are being collected.',
    links: [
      { icon: faGithub, label: 'GitHub' ,url: 'https://github.com/rtasalem/bin-it' },
      { icon: faDocker, label: 'Docker Hub', url: 'https://hub.docker.com/r/ranasalem13/bin-it' }
    ],
    year: 2025
  },
  {
    title: 'Homelab',
    tech: 'Cloudflare, Docker, Arch Linux, GitHub Pages, self-hosting, homelabbing',
    role: 'Developer, maintainer',
    description:
    'Personal homelab configuration running on a self-hosted server; Arch Linux + Lenovo ThinkPad. Runs a suite of self-hosted FOSS applications including Portainer, Cloudflared, Vaultwarden, and custom built applications. Purpose of this homelab is to understand the importance of self-hosting, security, and having full ownership of personal data.',
    links: [
      { icon: faGithub, label: 'GitHub' ,url: 'https://github.com/rtasalem/homelab' },
      { icon: faFile, label: 'Docs', url: 'https://homelab.ranasalem.io' }
    ],
    year: 2025
  },
  {
    title: 'ranasalem.io',
    tech: 'TypeScript, Next.js, DaisyUI, Contentlayer, MDX (Markdown + JSX)',
    role: 'Frontend developer, maintainer',
    description:
    'My personal portfolio website where I share my career history, projects, and write for my blog.',
    links: [
      { icon: faGithub, label: 'GitHub' ,url: 'https://github.com/rtasalem/ranasalem.io' },
      { icon: faGlobe, label: 'Website', url: 'https://ranasalem.io' }
    ],
    year: 2024
  },
  {
    title: 'Busgres',
    tech: 'JavaScript, Node.js, NPM, Microsoft Azure, Service Bus, PostgreSQL',
    role: 'Developer, maintainer',
    description:
    'Node.js module that consumes Azure Service Bus messages from topics or queues and writes the data to a PostgreSQL database. Configurable with a single client.',
    links: [
      { icon: faGithub, label: 'GitHub', url: 'https://github.com/rtasalem/busgres' },
      { icon: faNpm, label: 'NPM Registry', url: 'https://www.npmjs.com/package/busgres' }
    ],
    year: 2024
  },
  {
    title: 'Draft My CV',
    tech: 'JavaScript, Node.js, Express.js, Bulma, Nunjucks',
    role: 'Full stack developer, maintainer',
    description:
    'Online form for generating professional CVs in Microsoft Word or PDF format from user input. Streamlines job applications.',
    links: [
      { icon: faGithub, label: 'GitHub', url: 'https://github.com/rtasalem/draft-my-cv' }
    ],
    year: 2024
  },
  {
    title: 'Barbie E-Commerce Platform',
    tech: 'Java, JavaScript, React, Spring Boot, REST API',
    role: 'Backend developer',
    description:
      'Full stack Barbie themed e-commerce website submitted as a final group project to mark the end of my time as a trainee software developer at FDM Group.',
    links: [
      { icon: faGithub, label: 'GitHub', url: 'https://github.com/rtasalem/barbie-ecommerce-website' }
    ],
    year: 2023
  }
]
