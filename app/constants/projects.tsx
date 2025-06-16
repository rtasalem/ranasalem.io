import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons"

export const projects = [
  {
    title: "ranasalem.io",
    tech: "Next.js, TypeScript, DaisyUI",
    description:
      "My personal website where I share work experience, projects, and blog posts (mostly about tech and software).",
    links: [
      { icon: faGithub, url: "https://github.com/rtasalem/ranasalem.io" },
      { icon: faGlobe, url: "https://ranasalem.io" }
    ],
    year: 2024,
  },
  {
    title: "Busgres",
    tech: "Node.js, NPM, Microsoft Azure, PostgreSQL",
    description:
      "Node.js module that consumes Azure Service Bus messages and writes to PostgreSQL. Configurable with a single client.",
    links: [
      { icon: faGithub, url: "https://github.com/rtasalem/busgres" },
      { icon: faNpm, url: "https://www.npmjs.com/package/busgres" }
    ],
    year: 2024,
  },
  {
    title: "Draft My CV",
    tech: "Node.js, Express.js, Bulma, Nunjucks",
    description:
      "Online form for generating professional CVs in Word or PDF format from user input. Streamlines job applications.",
    links: [
      { icon: faGithub, url: "https://github.com/rtasalem/draft-my-cv" },
      { icon: faGlobe, url: "https://draftmycv.co.uk" }
    ],
    year: 2024,
  },
]