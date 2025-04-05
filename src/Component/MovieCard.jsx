import React from 'react'

function MovieCard({ title, year, rating, imageUrl }) {
    return (
        <div>
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
        </div>
    )
}

export default MovieCard
