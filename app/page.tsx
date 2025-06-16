import { KbdKeys } from "./constants/kbd-keys"

export default function Home() {
  return (
    <div className="hero bg-base-100 min-h-160 text-base-content">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-9xl font-bold mb-3">rana salem</h1>
          <div className="mb-5">
            <KbdKeys />
          </div>
          <p className="mb-5">
            Full-stack codesmith who occasionally writes about writing code.
          </p>
          <div className="avatar mb-5">
            <div className="w-100 rounded">
              <img src="avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
