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
        <em className="text-fs-sub-title capitalize">{partOfSpeech}</em>
        <div className="h-[2px] w-full rounded-full bg-gray-200" />
      </div>
      <section className="flex flex-col gap-3">
        <p className="text-fs-sub-heading text-gray-400">Meaning</p>
        {definitions ? (
          <ul className="ml-8 flex flex-col gap-1">
            {definitions.map((definition, index) => (
              <li key={index} className="relative flex gap-2">
                <span className="absolute -left-4 top-0 text-primary">•</span>
                <p>{definition.definition}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
      {synonyms.length > 0 && (
        <div className="mt-8 flex gap-4 text-fs-sub-heading">
          <p className="text-gray-400">Synonyms</p>
          <span className="text-primary">{synonyms.join(', ')}</span>
        </div>
      )}
    </>
  )
}
