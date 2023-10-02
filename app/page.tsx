import BlackCard from '@/components/BlackCards'
import ItemList from '@/components/ItemList'
import Slider from '@/components/Slider'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Slider/>
      <ItemList/>
      <BlackCard/>
    
    </main>
  )
}
