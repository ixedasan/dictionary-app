'use client'

import { ThemeProvider } from 'next-themes'

type Props = {
  children: React.ReactNode
}

export const Provider = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
