import { KbdKeys } from "./constants/kbd-keys"

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-100 text-base-content">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-9xl font-bold mb-3">RANA SALEM</h1>
          <div className="mb-">
            <KbdKeys />
          </div>
          <p className="mb-5">
            Full-stack codesmith who occasionally writes about writing code.
          </p>
          <div className="photos">
            <div className="flex justify-center mb-2">
              <div className="w-auto rounded">
                <img
                  src="mini-me-1.jpeg"
                  alt="A childhood photo of Rana sat typing at a computer."
                  className="w-150 h-110"
                />
              </div>
              <div className="w-auto rounded">
                <img
                  src="mini-me-2.jpeg"
                  alt="A childhood photo of Rana sat typing at a computer."
                  className="w-150 h-110"
                />
              </div>
            </div>
            <p className="text-center italic">Photographs my parents took of me developing this website.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
