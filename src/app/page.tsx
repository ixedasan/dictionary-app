'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { GrHelpBook } from 'react-icons/gr'
import { IoIosPause, IoIosPlay } from 'react-icons/io'

import { Error } from '@/components/Error'
import { Instructions } from '@/components/Instructions'
import { Meaning } from '@/components/Meaning'
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
    queryKey: ['wordData', searchValue],
    queryFn: () => fetch(api).then(res => res.json()),
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
        {!searchValue ? (
          <Instructions />
        ) : !data ? (
          <Error />
        ) : (
          <>
            <section className="mb-5 flex items-center justify-between">
              <div>
                <h1 className="text-fs-title capitalize">{data.word}</h1>
                <p className="text-fs-sub-title tracking-widest text-primary">
                  {data.phonetic}
                </p>
              </div>
              <button
                onClick={speechHandler}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent md:h-16 md:w-16"
              >
                {isPlaying ? (
                  <IoIosPause
                    className="text-3xl text-primary md:text-5xl"
                    id="play-icon"
                  />
                ) : (
                  <IoIosPlay
                    className="ml-1 text-3xl text-primary md:text-5xl"
                    id="play-icon"
                  />
                )}
              </button>
            </section>
            {data?.meanings.map((meaning, index) => (
              <Meaning
                key={index}
                antonyms={meaning.antonyms}
                definitions={meaning.definitions}
                partOfSpeech={meaning.partOfSpeech}
                synonyms={meaning.synonyms}
              />
            ))}
            {data?.sourceUrls && data?.sourceUrls.length > 0 && (
              <div className="mt-6 border-t border-gray-200 py-5">
                <div className="flex flex-wrap items-center">
                  <p className="text-xl">Source</p>
                  <Link
                    target="_blank"
                    href={data.sourceUrls[0]}
                    className="flex flex-wrap items-center text-fs-link text-gray-400 underline"
                  >
                    <span> {data.sourceUrls}</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
