import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { projects } from "../constants/projects"

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto space-y-5">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-center mt-5 mb-5">Projects</h1>
        <p>Some highlights from my development portfolio...</p>
      </div>
      <div className="space-y-8 mb-10 divide-y divide-base-300 ">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row md:items-start md:gap-6 pb-6"
          >
            <div className="text-sm text-base-content/50 md:w-20 md:text-right">
              {project.year}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-base-content/70 mb-1">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <p className="text-sm text-base-content/70 mb-1">
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
                    className="btn btn-m btn-ghost"
                  >
                    <FontAwesomeIcon icon={link.icon} />
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
