import React, { useEffect, useState } from 'react';

const HeroBanner = ({ Data }) => {
  const { jawSummary } = Data || {};
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [characterData, setCharacterData] = useState([]);

  // Use jawSummary.relatedVideos or fallback to an array with just jawSummary
  const slides = jawSummary?.relatedVideos?.length
    ? jawSummary.relatedVideos
    : jawSummary ? [jawSummary] : [];

  // Fetch Star Wars character data from API
  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://serpapi.com/search.json?engine=google_play_movies');
        const data = await response.json();

        // Map API data to our character format with lightsaber colors
        const characters = data.results.slice(0, 4).map((char, index) => {
          // Assign lightsaber colors based on character traits
          let saberColor = 'blue';
          if (char.name.includes('Vader') || char.name.includes('Emperor') || char.name.toLowerCase().includes('sith')) {
            saberColor = 'red';
          } else if (char.name.includes('Yoda')) {
            saberColor = 'green';
          }

          return {
            id: `char-${index}`,
            name: char.name,
            description: `${char.name} - Height: ${char.height}cm, Mass: ${char.mass}kg. Born: ${char.birth_year}.`,
            saberColor,
            // Use a placeholder image service or your actual image API
            imageUrl: `/api/placeholder/90/120`
          };
        });

        setCharacterData(characters);
      } catch (error) {
        console.error('Error fetching character data:', error);
        // Fallback data in case API fails
        setCharacterData([
          {
            id: 'obi-wan',
            name: 'Obi Wan Kenobi',
            description: 'A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force.',
            saberColor: 'blue',
            imageUrl: `/api/placeholder/90/120`
          },
          {
            id: 'darth-vader',
            name: 'Darth Vader',
            description: 'Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force.',
            saberColor: 'red',
            imageUrl: `/api/placeholder/90/120`
          }, {
            id: 'obi-wan',
            name: 'Obi Wan Kenobi',
            description: 'A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force.',
            saberColor: 'blue',
            imageUrl: `/api/placeholder/90/120`
          },
          {
            id: 'darth-vader',
            name: 'Darth Vader',
            description: 'Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force.',
            saberColor: 'red',
            imageUrl: `/api/placeholder/90/120`
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (characterData.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % characterData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [characterData]);

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % characterData.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + characterData.length) % characterData.length);
  };

  const selectCharacter = (index) => {
    setCurrentSlide(index);
  };

  // Map lightsaber colors to tailwind classes
  const saberColorMap = {
    blue: 'bg-blue-500 shadow-blue-500',
    red: 'bg-red-600 shadow-red-600',
    green: 'bg-green-500 shadow-green-500'
  };

  if (isLoading) {
    return (
      <div className="w-full h-80 bg-black/80 rounded-lg flex items-center justify-center">
        <div className="text-blue-500 text-xl">Loading character data...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black/80 rounded-lg overflow-hidden shadow-lg shadow-blue-500/30">
      {/* Header with title and counter */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="text-gray-400 uppercase text-sm font-medium">Hero</div>
        <div className="text-gray-400 text-sm font-medium">
          {String(currentSlide + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row min-h-[400px]  ">
        {/* Character information panel */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl text-white uppercase tracking-wider mb-6">
            {characterData[currentSlide]?.name || 'Character Name'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl leading-relaxed">
            {characterData[currentSlide]?.description || 'Character description will appear here.'}
          </p>
          <button className="border border-white text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-white/10 transition-colors w-fit">
            Select
          </button>
        </div>

        {/* Character selection panel */}
        <div className="flex-1 p-6 md:pl-0 md:pr-8 flex flex-col justify-center md:items-end">
          <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center md:justify-end">
            {characterData.map((character, index) => (
              <div
                key={character.id}
                onClick={() => selectCharacter(index)}
                className={`relative cursor-pointer transition-transform hover:-translate-y-1 ${index === currentSlide ? 'opacity-100 shadow-lg shadow-blue-500/50' : 'opacity-70'}`}
              >
                {/* Lightsaber effect */}
                <div className={`absolute left-1/2 -translate-x-1/2 bottom-full w-1 h-24 md:h-36 rounded ${saberColorMap[character.saberColor]} shadow-lg`}></div>

                {/* Character image */}
                <div className="w-20 h-28 rounded bg-gray-800 overflow-hidden">
                  <img
                    src={character.imageUrl}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center gap-6 py-4 mb-2">
        <button
          onClick={goToPrev}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          ◄
        </button>
        <button
          onClick={goToNext}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          ►
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 text-right text-gray-600 text-xs">
        BATTLES OF HEROES
      </div>

      {/* CSS for additional styling */}
      <style jsx>{`
        /* Add any additional custom styles that can't be done with Tailwind here */
        @keyframes lightsaberPulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        .w-1 {
          animation: lightsaberPulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;