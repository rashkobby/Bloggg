import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="h-screen w-full bg-gray-900 flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold text-neutral-700 dark:text-neutral-200 tracking-widest">404</h1>
        <div className="bg-neutral-800 px-2 text-sm text-neutral-200 dark:text-neutral-200 rounded rotate-12 absolute">
            Page Not Found
        </div>
        <button className="mt-5">
            <Link className="relative inline-block text-sm font-medium text-neutral-300 group active:text-orange-500 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-gray-800 border border-current">
                    Go Home
                </span>
            </Link>
        </button>
    </main>
  )
}

export default NotFound