import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="mt-16 lg:mt-64 bg-pink-900 text-pink-200 md:p-16 sm:p-8 p-4 leading-7">
      <p className="text-2xl mb-4">
        <Link href="/">
          <a className="text-white">Next.js course template</a>
        </Link>
      </p>
      <p>A template to create courses with React</p>
      <p>Made in Montréal, Québec 🇨🇦</p>
      <p>
        Built by{' '}
        <a
          className="text-white"
          href="https://devops6080.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hichem Elamine
        </a>{' '}
        (
        <a
          className="text-white"
          href="https://twitter.com/hichemlamine"
          target="_blank"
          rel="noopener noreferrer"
        >
          @hichemlamine
        </a>
        )
      </p>
    </footer>
  )
}
