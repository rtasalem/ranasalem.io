export default function Diff() {
  return (
    <div>
      <figure className='diff aspect-16/9' tabIndex={0}>
        <div className='diff-item-1' role='img' tabIndex={0}>
          <img
            alt='A childhood photo of Rana sat typing at a computer (1).'
            src='mini-me-1.jpeg' />
        </div>
        <div className='diff-item-2' role='img'>
          <img
            alt='A childhood photo of Rana sat typing at a computer (2).'
            src='mini-me-2.jpeg' />
        </div>
        <div className='diff-resizer'></div>
      </figure>
      <p className='text-left text-xs italic mt-1'>*Photographs of me developing this website.</p>
    </div>
  )
}
