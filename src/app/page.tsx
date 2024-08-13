import { GrHelpBook } from 'react-icons/gr'

import { Error } from '@/components/Error'
import { Search } from '@/components/Search'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  let data = null

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 p-6">
      <header className="flex w-full justify-between">
        <GrHelpBook size={32} className="text-primary" />
        <ThemeSwitcher />
      </header>
      <main>
        <Search />
        {!data ? (
          <Error />
        ) : (
          <div className="mb-5 flex items-center justify-between"></div>
        )}
      </main>
    </div>
  )
}
