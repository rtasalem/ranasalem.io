import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { projects } from "../constants/projects"

export default function Projects() {
  return (
    <div className="bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-4">projects</h1>
        <p className="text-center text-base-content/60 mb-10">
          A selection of side projects I’ve built and maintained...
        </p>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start md:gap-6 border-b border-base-300 pb-6"
            >
              <div className="text-sm text-base-content/50 md:w-20 md:text-right">
                {project.year}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm text-base-content/70 mb-1">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <p className="text-base-content/70 mb-3">{project.description}</p>
                <div className="flex gap-2">
                  {project.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xl btn-ghost"
                    >
                      <FontAwesomeIcon icon={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
