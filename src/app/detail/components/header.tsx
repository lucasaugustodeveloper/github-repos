export default function Header({ title }: {title: string}) {
  return (
    <header className="flex justify-center w-full p-5 bg-gray-100">
      <h1 className="font-bold text-3xl uppercase">
        {title}
      </h1>
    </header>
  )
}
