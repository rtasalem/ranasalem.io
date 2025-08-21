import Bio from '../components/about/bio'
import Diff from '../components/about/diff'
import Timeline from '../components/about/timeline'

export default function Experience() {
  return (
    <div className='overflow-auto mx-auto max-w-6xl space-y-5'>
      <div className='text-center space-y-5 mt-5'>
        <h1 className='text-3xl font-mono'>About</h1>
        <Bio />
        <Diff />
        <h1 className='text-3xl font-mono'>Timeline</h1>
        <p>My career so far.</p>
      </div>
      <Timeline />
    </div>
  )
}
