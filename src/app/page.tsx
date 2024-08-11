import Image from 'next/image'

import { Search } from '@/components/Search'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 p-6">
      <header className="flex w-full justify-between">
        <Image src={'./logo.svg'} width={32} height={32} alt="logo" />
        <ThemeSwitcher />
      </header>
      <Search />
      <main></main>
    </div>
  )
}
