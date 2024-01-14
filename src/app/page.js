import CalanderComponet from '@/components/calendar'
import Header from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <Header/>
     {/* <div className='mt-10 w-full'> */}

     <CalanderComponet />
     {/* </div> */}
    </main>
  )
}
