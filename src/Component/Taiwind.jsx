import React, { useState, useEffect } from 'react';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
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
  );
};

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section className="h-screen md:h-4/5 bg-cover bg-center flex items-center px-4 relative" 
             style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url('/api/placeholder/1920/1080')" }}>
      <div className="max-w-xl z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rampage</h1>
        <p className="text-gray-300 text-base mb-6">
          Primatologist Davis Okoye shares an unshakable bond with George, an extraordinarily intelligent gorilla. 
          But a rogue genetic experiment transforms this gentle ape into a raging monster.
        </p>
        <div className="flex gap-4">
          <button className="bg-red-600 text-white font-bold py-2 px-6 rounded flex items-center gap-2">
            ▶ Play
          </button>
          <button className="bg-gray-500/70 text-white font-bold py-2 px-6 rounded flex items-center gap-2">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </section>
  );
};

// Category Filter Component
const CategoryFilter = () => {
  const categories = ["All", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Documentary", "Horror"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
      {categories.map((category) => (
        <button 
          key={category}
          className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
            activeCategory === category ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Movie Card Component
const MovieCard = ({ title, year, rating, imageUrl }) => {
  return (
    <div className="flex-none w-40 relative overflow-hidden rounded cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10">
      <img 
        src={imageUrl || "/api/placeholder/165/230"} 
        alt={title} 
        className="w-full h-56 object-cover rounded"
      />
      <div className="p-2 bg-gray-900">
        <h3 className="text-white text-sm font-medium truncate">{title}</h3>
        <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
          <span>{year}</span>
          <span className="text-yellow-400">{rating}</span>
        </div>
      </div>
    </div>
  );
};

// Movie Carousel Component
const MovieCarousel = ({ title, movies, showLinks = true }) => {
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
  );
};

// Video Player Component
const VideoPlayer = ({ title, imageUrl }) => {
  return (
    <div className="my-10">
      <h2 className="text-xl font-medium text-white mb-4">{title}</h2>
      
      <div className="relative pt-0 pb-0 h-0" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col justify-between">
          <img 
            src={imageUrl || "/api/placeholder/1920/1080"} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <button className="text-white">⏯️</button>
              <button className="text-white">🔊</button>
              <span className="text-white text-sm">0:23 / 2:10</span>
              <div className="flex-grow"></div>
              <button className="text-white">⚙️</button>
              <button className="text-white">⛶</button>
            </div>
            
            <div className="w-full h-1 bg-white/30 rounded relative">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-red-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const NetflixApp = () => {
  // Sample movie data
  const trendingMovies = [
    { title: "Pacific Rim 2: Uprising", year: "2018", rating: "★★★★☆" },
    { title: "Star Wars: Solo", year: "2018", rating: "★★★★☆" },
    { title: "Red Sparrow", year: "2018", rating: "★★★★☆" },
    { title: "Tomb Raider", year: "2018", rating: "★★★★☆" },
    { title: "Black Panther", year: "2018", rating: "★★★★★" },
    { title: "Jurassic World: Fallen Kingdom", year: "2018", rating: "★★★★☆" }
  ];
  
  const popularMovies = [
    { title: "Deadpool 2", year: "2018", rating: "★★★★★" },
    { title: "The Meg", year: "2018", rating: "★★★☆☆" },
    { title: "October", year: "2018", rating: "★★★★☆" },
    { title: "Incredibles 2", year: "2018", rating: "★★★★★" },
    { title: "Den 12 til 12 Part 1", year: "2018", rating: "★★★★☆" },
    { title: "Fantastic Beasts", year: "2018", rating: "★★★★☆" }
  ];
  
  const recommendedMovies = [
    { title: "Mute", year: "2018", rating: "★★★☆☆" },
    { title: "Life of the Party", year: "2018", rating: "★★★☆☆" },
    { title: "Ant-Man and the Wasp", year: "2018", rating: "★★★★☆" },
    { title: "Slender Man", year: "2018", rating: "★★☆☆☆" },
    { title: "The Darkest Minds", year: "2018", rating: "★★★☆☆" },
    { title: "Mission Impossible 6", year: "2018", rating: "★★★★★" }
  ];
  
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <HeroBanner />
      
      <div className="px-4 py-6">
        <section>
          <h2 className="text-xl font-medium text-white mb-4">Trends Now</h2>
          <CategoryFilter />
          <MovieCarousel title="Trending" movies={trendingMovies} />
        </section>
        
        <section>
          <h2 className="text-xl font-medium text-white mb-4">Movies</h2>
          <CategoryFilter />
          <MovieCarousel title="Popular" movies={popularMovies} />
        </section>
        
        <VideoPlayer title="Jurassic World: Fallen Kingdom (2018)" />
        
        <MovieCarousel title="Recommended" movies={recommendedMovies} showLinks={false} />
      </div>
    </div>
  );
};

export default NetflixApp;