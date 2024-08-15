'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GrHelpBook } from 'react-icons/gr'

import { Error } from '@/components/Error'
import { Instructions } from '@/components/Instructions'
import { Loading } from '@/components/Loading'
import { Main } from '@/components/Main'
import { Search } from '@/components/Search'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

import WordData, { ErrorResponse } from './type'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`

  const {
    isLoading,
    error,
    refetch,
    data: wordData,
  } = useQuery<WordData[], ErrorResponse>({
    queryKey: ['wordData'],
    queryFn: () =>
      fetch(api).then(res => {
        if (!res.ok) {
          throw new Error('Error fetching data')
        }
        return res.json()
      }),
    enabled: false,
  })

  const data: WordData | null = wordData ? wordData[0] : null

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (searchValue.trim()) {
      refetch()
    }
  }

  const fallbackToSpeechSynthesis = () => {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(data?.word ?? '')
      window.speechSynthesis.speak(msg)
    } else {
      console.error('Speech synthesis not supported in this browser.')
    }
  }

  const speechHandler = () => {
    if (data?.phonetics && data.phonetics.length > 0) {
      const audioSrc = data.phonetics.find(p => p.audio)?.audio
      if (audioSrc) {
        const audio = new Audio(audioSrc)
        if (!isPlaying) {
          audio
            .play()
            .then(() => {
              setIsPlaying(true)
            })
            .catch(error => {
              console.error('Failed to play audio:', error)
              fallbackToSpeechSynthesis()
            })
        } else {
          audio.pause()
          setIsPlaying(false)
        }
        audio.onended = () => {
          setIsPlaying(false)
        }
      } else {
        fallbackToSpeechSynthesis()
      }
    } else {
      fallbackToSpeechSynthesis()
    }
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 p-6">
      <header className="flex w-full justify-between">
        <GrHelpBook size={32} className="text-primary" />
        <ThemeSwitcher />
      </header>
      <main>
        <Search
          value={searchValue}
          onSubmit={handleSubmit}
          onChange={e => setSearchValue(e.target.value)}
        />
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : data ? (
          <Main
            data={data}
            isPlaying={isPlaying}
            speechHandler={speechHandler}
          />
        ) : (
          <Instructions />
        )}
      </main>
    </div>
  )
}
