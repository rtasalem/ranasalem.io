export default function Photos() {
  return (
    <div className="photos">
      <div className="flex gap-2 justify-center space-y-1">
        <div>
          <img
            src="mini-me-1.jpeg"
            alt="A childhood photo of Rana sat typing at a computer (1)."
            className="w-150 h-110"
          />
        </div>
        <div>
          <img
            src="mini-me-2.jpeg"
            alt="A childhood photo of Rana sat typing at a computer (2)."
            className="w-150 h-110"
          />
        </div>
      </div>
      <p className="text-left text-xs italic">*Photographs of me developing this website.</p>
    </div>
  )
}
