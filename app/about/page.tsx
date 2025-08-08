import Bio from "./components/bio" 
import Photos from "./components/photos"
import Timeline from "./components/timeline"

export default function Experience() {
  return (
    <div className="overflow-auto mx-auto max-w-6xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-5 mb-8">About</h1>
        <Bio />
        <Photos />
        <h1 className="text-3xl font-bold mt-5 mb-5">Timeline</h1>
        <p className="mb-5">My career so far...</p>
      </div>
      <Timeline />
    </div>
  )
}
