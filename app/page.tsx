import { KbdKeys } from "./components/home/kbd-keys"

export default function Home() {
  return (
    <div className="hero bg-base-100 min-h-screen text-base-content">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-9xl font-bold mb-6">RANA SALEM</h1>
          <KbdKeys />
          <p className="py-6">
            Full-stack codesmith who occasionally writes about writing code.
          </p>
          <div className="avatar">
            <div className="w-100 rounded">
              <img src="avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
