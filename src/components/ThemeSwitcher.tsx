'use client'

import { useTheme } from 'next-themes'

type Props = {}

export const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  )
}
