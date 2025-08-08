import { KbdKeys } from "./constants/kbd-keys"

export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="space-y-5">
          <h1 className="text-9xl font-bold">RANA SALEM</h1>
          <div>
            <KbdKeys />
          </div>
          <p>Full stack codesmith who, other than writing code, occasionally writes.</p>
        </div>
      </div>
    </div>
  )
}
