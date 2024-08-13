type Phonetic = {
  text: string
  audio: string
  sourceUrl: string
  license: {
    name: string
    url: string
  }
}

type Definition = {
  definition: string
  synonyms: string[]
  antonyms: string[]
}

export type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

type WordData = {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: {
    name: string
    url: string
  }
  sourceUrls: string[]
}

export type ErrorResponse = {
  title: string
  message: string
  resolution: string
}

export default WordData
