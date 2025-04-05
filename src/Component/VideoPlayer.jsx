import React from 'react'

function VideoPlayer({ title, imageUrl }) {
    return (
        <div>
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
        </div>
    )
}

export default VideoPlayer
