import { GrHelpBook } from 'react-icons/gr'

import { Search } from '@/components/Search'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 p-6">
      <header className="flex w-full justify-between">
        <GrHelpBook size={32} className="text-primary" />
        <ThemeSwitcher />
      </header>
      <Search />
      <main></main>
    </div>
  )
}
