export default function Contact() {
  return (
    <div className="overflow-auto mx-auto max-w-6xl space-y-5 mt-3 items-center">
      <div>
        <input type="text" placeholder="Name" className="input" />
      </div>
      <div>
        <input type="text" placeholder="Email" className="input" />
      </div>
      <div>
        <textarea className="textarea" placeholder="Message"></textarea>
      </div>
    </div>
  )
}
