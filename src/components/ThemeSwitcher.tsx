'use client'

import { useTheme } from 'next-themes'
import { LuMoon, LuSun } from 'react-icons/lu'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative my-auto flex h-6 w-12 items-center justify-between rounded-full p-1 ${theme === 'dark' ? 'bg-accent' : 'bg-primary'}`}
    >
      {theme && (
        <>
          <div
            className={`absolute h-4 w-4 transform rounded-full bg-white text-xs shadow-md transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
          />
          <LuSun />
          <LuMoon />
        </>
      )}
    </button>
  )
}
