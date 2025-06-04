export default function Projects() {
  return (
    <div className="flex justify-center items-center text-base-content bg-base-100 min-h-screen">
      <div className="card lg:card-side bg-base-200">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Website</button>
            <button className="btn btn-primary">Source Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}