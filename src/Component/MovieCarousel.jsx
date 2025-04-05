import React from 'react'
import MovieCard from './MovieCard'

function MovieCarousel({ title, movies, showLinks = true }) {
    const scrollCarousel = (direction) => {
        const carousel = document.getElementById(`carousel-${title.replace(/\s+/g, '-').toLowerCase()}`);
        if (carousel) {
            carousel.scrollBy({
                left: direction === 'left' ? -600 : 600,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div>
 <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-white">{title}</h2>
        {showLinks && (
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-white text-sm font-bold">Popular</a>
            <a href="#" className="text-gray-400 text-sm">Trailers</a>
            <a href="#" className="text-gray-400 text-sm">Recently Added</a>
          </div>
        )}
      </div>
      
      <div className="relative">
        <div 
          id={`carousel-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="flex gap-2 overflow-x-auto py-2 scrollbar-hide relative"
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
        
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-full bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={() => scrollCarousel('left')}
        >
          <span className="border-t-2 border-r-2 border-white w-3 h-3 transform rotate-225 ml-1"></span>
        </button>
        
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-full bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={() => scrollCarousel('right')}
        >
          <span className="border-t-2 border-r-2 border-white w-3 h-3 transform rotate-45 mr-1"></span>
        </button>
      </div>
    </div>
        </div>
    )
}

export default MovieCarousel
