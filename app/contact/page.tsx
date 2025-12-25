import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialMediaLinks } from "../constants/socials"

export default function Contact() {
  return (
    <div className="overflow-auto mx-auto max-w-6xl space-y-5 items-center">
      <div className='text-center space-y-5 mt-5'>
        <h1 className='text-3xl font-mono'>Contact</h1>
        <div className='mx-auto max-w-3xl'>
          <p>Send a message or take a look at my socials.</p>
        </div>
      </div>
      <div className="mx-auto max-w-md grid grid-cols-2 gap-2 justify-items-center">
        {socialMediaLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wide sm:btn-sm md:btn-md flex items-center gap-2"
          >
            <FontAwesomeIcon icon={icon} />
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
