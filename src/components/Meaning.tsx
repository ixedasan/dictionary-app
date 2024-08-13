import { Meaning as MeaningType } from '@/app/type'

export const Meaning = ({
  partOfSpeech,
  definitions,
  antonyms,
  synonyms,
}: MeaningType) => {
  return (
    <>
      <div className="mb-3 mt-6 flex items-center gap-4">
        <em className="text-2xl font-bold">{partOfSpeech}</em>
        <div className="h-[2px] w-full rounded-full bg-gray-200" />
      </div>
      <section className="flex flex-col gap-3">
        <p className="text-xl">Meaning</p>
        {definitions
          ? definitions.map((definition, index) => (
              <ul
                key={index}
                className="ml-8 mt-3 flex list-disc flex-col gap-1 marker:text-primary"
              >
                <li className="flex gap-2">
                  <p>{definition.definition}</p>
                </li>
              </ul>
            ))
          : null}
      </section>
      {synonyms.length > 0 && (
        <div className="flex gap-4">
          <p className="text-xl text-gray-400">Synonyms</p>
          <p>{synonyms.join(', ')}</p>
        </div>
      )}
    </>
  )
}
