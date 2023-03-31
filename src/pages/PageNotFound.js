import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageNotFoundImage from '../assets/images/pagenotfound.png'

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / CineSurf`
  })

  return (
    <main>
      <section className="flex felx-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-6xl text-gray-700 my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="page not found image" />
          </div>
          <div className="flex justify-center my-4">
            <Link to="/">
              <button className="w-64 text-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center mt-3">Back to Home</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
