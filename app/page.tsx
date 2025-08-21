import Image from 'next/image'
import { KbdKeys } from './components/home/kbd-keys'

export default function Home() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div className='space-y-5'>
          <div className='avatar'>
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
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>RANA SALEM</h1>
          <div>
            <KbdKeys />
          </div>
          <p>Full stack codesmith who, other than writing code, occasionally writes.</p>
        </div>
      </div>
    </div>
  )
}
