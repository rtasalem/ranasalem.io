import Image from 'next/image'
import { KbdKeys } from './components/home/kbd-keys'
import Bio from './components/home/bio'

export default function Home() {
  return (
    <div className='overflow-auto mx-auto max-w-6xl space-y-5'>
      <div className='text-center space-y-5 mt-6'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-mono'>Rana Salem</h1>
        <div>
          <Bio />
        </div>
        <div className='avatar mt-3'>
          <div className='mask mask-squircle w-80'>
            <Image
              src='/avatar.png'
              alt='Rana&apos;s avatar'
              fill
              className='object-cover'
              priority
              unoptimized={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
