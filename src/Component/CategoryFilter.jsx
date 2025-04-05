import React, { useState } from 'react'

function CategoryFilter() {
    const categories = ["All", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Documentary", "Horror"];
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div>
            <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${activeCategory === category ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

        </div>
    )
}

export default CategoryFilter
