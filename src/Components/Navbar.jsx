import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Blogs', path: '/' },
    { name: 'Create Blog Post', path: 'addnew' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-neutral-200 dark:bg-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link to='/' className="flex-shrink-0 ">
                        <h2 className='text-neutral-900 dark:text-neutral-200 font-medium logo'>BLOGGG</h2>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <div className="ml-auto lg:mr-0 flex items-baseline space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white text-neutral-700 dark:text-neutral-200 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={handleClick}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-200"
                        >
                        Menu
                    </button>
                </div>
            </div>
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`} >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200"
                            onClick={() => setMobileMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;