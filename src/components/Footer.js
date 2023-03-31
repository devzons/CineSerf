import { Link, NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link to="/" className="hover:underline">
            CineSurf
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="https://instagram.com" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">
              Instagram
            </NavLink>
          </li>
          <li>
            <NavLink to="https://linkedin.com" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">
              LinkedIn
            </NavLink>
          </li>
          <li>
            <NavLink to="https://youtube.com" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">
              Youtube
            </NavLink>
          </li>
          <li>
            <NavLink to="https://github.com/devzons" target="_blank" rel="noreferrer" className="hover:underline">
              Github
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}
