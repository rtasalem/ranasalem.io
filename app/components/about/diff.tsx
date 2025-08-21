import Image from 'next/image'

export default function Diff() {
  return (
    <div className='hidden lg:block'>
      <figure className='diff aspect-16/9' tabIndex={0}>
        <div className='diff-item-1' tabIndex={0}>
          <Image
            src='/childhood-1.jpeg'
            alt='A childhood photo of Rana sat typing at a computer (1).'
            width={200}
            height={200}
            priority
            unoptimized={true} />
        </div>
        <div className='diff-item-2'>
          <Image
            src='/childhood-2.jpeg'
            alt='A childhood photo of Rana sat typing at a computer (2).'
            width={200}
            height={200}
            priority
            unoptimized={true} />
        </div>
        <div className='diff-resizer'></div>
      </figure>
      <p className='text-left text-xs italic mt-1'>*Photographs of me developing this website.</p>
    </div>
  )
}
