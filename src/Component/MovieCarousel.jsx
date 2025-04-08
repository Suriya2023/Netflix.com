import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'


function MovieCarousel({ title, movies, showLinks = true }) {


  const [myData, setMyData] = useState([]);

  // const url = 'https://netflix54.p.rapidapi.com/search/?query=bollywood&offset=0&limit_titles=50&limit_suggestions=20&lang=hi';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '7ebb548c04msh1779cf674613af6p190715jsnbb3333b07d3c',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setMyData(result.titles || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


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
            {myData.map((movie) => (
              <MovieCard    Data={movie} />
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
