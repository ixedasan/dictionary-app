import Image from 'next/image'

type Props = {}

export const Error = (props: Props) => {
  return (
    <div className="mt-12 flex h-full flex-col items-center">
      <Image src="./404-illustrations.svg" alt="404" width={320} height={320} />

      <p className="mt-6 text-center text-fs-sub-title">
        We're unable to retrieve information for this word at this time. We're
        sorry for the inconvenience, please try again later.
      </p>
    </div>
  )
}
