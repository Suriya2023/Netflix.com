import React, { useState, useEffect } from 'react';


function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <header className={`flex items-center justify-between px-4 py-4 fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
                <a href="#" className="text-red-600 font-bold text-2xl">NETFLIX</a>

                <nav className="hidden md:block">
                    <ul className="flex">
                        <li className="mx-3"><a href="#" className="text-white hover:text-gray-300 text-sm">Home</a></li>
                        <li className="mx-3"><a href="#" className="text-white hover:text-gray-300 text-sm">Series</a></li>
                        <li className="mx-3"><a href="#" className="text-white hover:text-gray-300 text-sm">Movies</a></li>
                        <li className="mx-3"><a href="#" className="text-white hover:text-gray-300 text-sm">My List</a></li>
                    </ul>
                </nav>

                <div className="flex items-center">
                    <a href="#" className="text-white mx-4">🔍</a>
                    <a href="#" className="text-white mx-4">🔔</a>
                    <a href="#" className="bg-gray-400 w-8 h-8 rounded flex items-center justify-center text-white">👤</a>
                </div>
            </header>
        </div>
    )
}

export default Header
