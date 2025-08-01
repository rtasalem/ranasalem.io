import { KbdKeys } from "./constants/kbd-keys"

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-100 text-base-content">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-9xl font-bold mb-5">RANA SALEM</h1>
          <div className="mb-5">
            <KbdKeys />
          </div>
          <p className="mb-5">
            Full-stack codesmith who occasionally writes about writing code.
          </p>
        </div>
      </div>
    </div>
  )
}
