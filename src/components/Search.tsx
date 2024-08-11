import { IoSearch } from 'react-icons/io5'

type Props = {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}

export const Search = ({ value, onChange, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <label className="relative flex h-12 w-full items-center justify-between rounded bg-gray-100 px-4 dark:bg-gray-800">
        <input
          className="flex-grow bg-gray-100 text-gray-900 placeholder-gray-500 placeholder:font-normal focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          type="text"
          id="search"
          placeholder="Search for a word"
          value={value}
          onChange={onChange}
        />
        <IoSearch className="text-primary" size={24} />
      </label>
    </form>
  )
}
