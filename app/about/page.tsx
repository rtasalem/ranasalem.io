import Bio from "./components/bio"
import Diff from "./components/diff"
import Timeline from "./components/timeline"

export default function Experience() {
  return (
    <div className="overflow-auto mx-auto max-w-6xl">
      <div className="text-center space-y-5">
        <h1 className="text-3xl font-bold mt-5">About</h1>
        <Bio />
        <Diff />
        <h1 className="text-3xl font-bold">Timeline</h1>
        <p className="mb-5">My career so far...</p>
      </div>
      <Timeline />
    </div>
  )
}
