export default function ProjectDetails({ params }: { params: { projectName: string } }) {
  return (
    <div>
      <h1>Project Details: {params.projectName}</h1>
    </div>
  )
}