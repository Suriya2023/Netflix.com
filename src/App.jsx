// import React from 'react'
// import Header from './Component/Header'
// import HeroBanner from './Component/HeroBanner'
// import CategoryFilter from './Component/CategoryFilter'
// import MovieCard from './Component/MovieCard'
// import MovieCarousel from './Component/MovieCarousel'
// import VideoPlayer from './Component/VideoPlayer'
// import NetflixApp from './Component/Taiwind'

// function App() {
//   return (
//     <div>
//       <Header />
//       <HeroBanner />
//       <CategoryFilter />
//       <MovieCard />
//       <MovieCarousel />
//       <VideoPlayer />
//       <NetflixApp />
//     </div>
//   )
// }

// export default App
// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './Component/Header';
import HeroBanner from './Component/HeroBanner';
import CategoryFilter from './Component/CategoryFilter';
import MovieCarousel from './Component/MovieCarousel';
import VideoPlayer from './Component/VideoPlayer';
import Crousel from './Component/Crousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {

  const [myData, setMyData] = useState([]);

  // const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=800&limit_suggestions=20&lang=en';
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
      // console.log(result);
      setMyData(result.titles || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  // Sample movie data
  const trendingMovies = [
    { title: "Pacific Rim 2: Uprising", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Star Wars: Solo", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Red Sparrow", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Tomb Raider", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Black Panther", year: "2018", rating: "★★★★★", imageUrl: "/api/placeholder/165/230" },
    { title: "Jurassic World: Fallen Kingdom", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" }
  ];

  const popularMovies = [
    { title: "Deadpool 2", year: "2018", rating: "★★★★★", imageUrl: "/api/placeholder/165/230" },
    { title: "The Meg", year: "2018", rating: "★★★☆☆", imageUrl: "/api/placeholder/165/230" },
    { title: "October", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Incredibles 2", year: "2018", rating: "★★★★★", imageUrl: "/api/placeholder/165/230" },
    { title: "Den 12 til 12 Part 1", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Fantastic Beasts", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" }
  ];

  const recommendedMovies = [
    { title: "Mute", year: "2018", rating: "★★★☆☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Life of the Party", year: "2018", rating: "★★★☆☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Ant-Man and the Wasp", year: "2018", rating: "★★★★☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Slender Man", year: "2018", rating: "★★☆☆☆", imageUrl: "/api/placeholder/165/230" },
    { title: "The Darkest Minds", year: "2018", rating: "★★★☆☆", imageUrl: "/api/placeholder/165/230" },
    { title: "Mission Impossible 6", year: "2018", rating: "★★★★★", imageUrl: "/api/placeholder/165/230" }
  ];


  const categories = ["All", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Documentary", "Horror"];

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <HeroBanner />
      
      {/* {
        myData.map((Crous) => {
          return <HeroBanner key={Crous.summary.id} Data={Crous}
            title="Pushpa"
            description="2025⁨U/A 16+⁩MovieActionDramas
As his smuggling empire grows, a brazen Pushpa longs for power and respect on his vengeful journey, while facing old rivals and new."
            imageUrl="https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbUpXX_AneCYQKg-rKutX49ITZ3AGZatEzDZMe7iMjq088am3i1axeDt7ha-6X7xuIjuEX_WjADRSFPyfuocf2coiqpHchEB-1qh.jpg?r=fa8"
          />

        })
      } */}

      <div className="px-4 py-6">
        <h2 className="text-xl font-medium text-white mb-4">Trends Top List</h2>

        <Carousel responsive={responsive}>


          {myData.map((movie) => {

            return <Crousel key={movie.summary.id} Data={movie} />
          })}
        </Carousel>
      </div>

      <div className="px-4 py-6">
        <section>
          <h2 className="text-xl font-medium text-white mb-4">Trends Now</h2>
          <CategoryFilter
            categories={categories}
            defaultCategory="All"
          />
          <MovieCarousel
            title="Trending"
            movies={trendingMovies}
            showLinks={true}
          />
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">Movies</h2>
          <CategoryFilter
            categories={categories}
            defaultCategory="All"
          />
          <MovieCarousel
            title="Popular"
            movies={popularMovies}
            showLinks={true}
          />
        </section>

        <VideoPlayer
          title="Jurassic World: Fallen Kingdom (2018)"
          imageUrl="/api/placeholder/1920/1080"
          currentTime="0:23"
          totalTime="2:10"
          progress={30}
        />

        <MovieCarousel
          title="Recommended"
          movies={recommendedMovies}
          showLinks={false}
        />
      </div>
    </div>
  );
}

export default App;