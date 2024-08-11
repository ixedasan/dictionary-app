'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

type Props = {}

export const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex h-6 w-12 items-center justify-between rounded-full p-1 ${theme === 'dark' ? 'bg-primary' : 'bg-accent'} `}
    >
      <div
        className={`absolute h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'} `}
      />
      <span className="text-xs">☀️</span>
      <span className="text-xs">🌙</span>
    </button>
  )
}
