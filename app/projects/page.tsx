import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faNpm
} from "@fortawesome/free-brands-svg-icons"

export default function Projects() {
  return (
    <div className="overflow-x-auto bg-base-100 text-base-content">
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5 mb-3">projects</h1>
        <p>A showcase of but a few of the side projects that I've been developing and maintaining...</p>
      </div>
      <div className="flex justify-center items-center text-base-content bg-base-100 mt-10">
        <div className="flex flex-col gap-5 mb-15">
          <div className="card card-side card-border bg-base-300 w-200">
            <div className="card-body">
              <h2 className="card-title">ranasalem.io (Personal Website)</h2>
              <p>
                <strong>Tech Stack:</strong> Next.js, TypeScript, DaisyUI
              </p>
              <p>
                My little corner of the internet a.k.a my personal website where I list information relating to my work experience, projects, and blog about
                (mostly) tech and software development.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><a href="https://github.com/rtasalem/ranasalem.io"><FontAwesomeIcon icon={faGithub} /></a></button>
              </div>
            </div>
          </div>
          <div className="card card-side card-border bg-base-300 w-200">
            <div className="card-body">
              <h2 className="card-title">Busgres</h2>
              <p>
                <strong>Tech Stack:</strong> Node.js, NPM, Microsoft Azure, PostgreSQL
              </p>
              <p>
                Node.js module available to download from the NPM registry which will consume messages
                from an Azure Service Bus queue or topic and persist those messages to a PostgreSQL database.
                This is done by configuring a single client that takes in Azure Service Bus and PostgreSQL variables
                rather than setting up a separate client for message broker and database.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><a href="https://www.npmjs.com/package/busgres"><FontAwesomeIcon icon={faNpm} /></a></button>
                <button className="btn btn-primary"><a href="https://github.com/rtasalem/busgres"><FontAwesomeIcon icon={faGithub} /></a></button>
              </div>
            </div>
          </div>
          <div className="card card-side card-border bg-base-300 w-200">
            <div className="card-body">
              <h2 className="card-title">Draft My CV</h2>
              <p>
                <strong>Tech Stack:</strong> Node.js, Express.js, Bulma, Nunjucks
              </p>
              <p>
                An online web form where users can submit all details relating to their contect info, work experience,
                educations, projects, interests and have a high-quality CV/resume generated for them to download as a Word
                doc or PDF. This speeds up the process of creating a CV ready for any job application.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><a href="https://draftmycv.co.uk"><FontAwesomeIcon icon={faGlobe} /></a></button>
                <button className="btn btn-primary"><a href="https://github.com/rtasalem/draft-my-cv"><FontAwesomeIcon icon={faGithub} /></a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}