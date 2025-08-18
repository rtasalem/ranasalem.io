import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { projects } from "../constants/projects"

export default function Projects() {
  return (
    <div className="overflow-auto max-w-5xl mx-auto space-y-5">
      <h1 className="text-3xl text-center font-mono mt-5">Projects</h1>
      <p className="text-center">Some highlights from my development portfolio...</p>
      <div className="space-y-5 divide-y divide-base-300 ">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row md:items-baseline md:gap-6 pb-6"
          >
            <div className="text-sm font-mono text-base-content/50 md:w-20 md:text-right">
              {project.year}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold font-mono mb-1">{project.title}</h2>
              <p className="text-base-content/70 mb-1">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <p className="text-base-content/70 mb-1">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="text-base-content/70 mb-3">{project.description}</p>
              <div className="flex gap-1">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-ghost font-mono"
                  >
                    <FontAwesomeIcon icon={link.icon} className="text-lg" />
                    <p className="text-sm ml-2">{link.label}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
