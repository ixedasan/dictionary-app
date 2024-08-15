import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IoIosPause, IoIosPlay } from 'react-icons/io'

import WordData from '@/app/type'

import { Meaning } from './Meaning'

type Props = {
  data: WordData
  isPlaying: boolean
  speechHandler: () => void
}

export const Main = ({ data, isPlaying, speechHandler }: Props) => {
  return (
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
  )
}
