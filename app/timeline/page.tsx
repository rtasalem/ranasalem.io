import CareerHistory from '../components/timeline/career-history'

export default function Experience() {
  return (
    <div className='overflow-auto mx-auto max-w-6xl space-y-5'>
      <div className='text-center space-y-5 mt-5'>
        <h1 className='text-3xl font-mono'>Timeline</h1>
        <p>My career so far.</p>
      </div>
      <CareerHistory />
    </div>
  )
}
