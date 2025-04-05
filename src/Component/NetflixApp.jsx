import React from 'react'

function NetflixApp() {
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
        <div>
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
        </div>
    )
}

export default NetflixApp
