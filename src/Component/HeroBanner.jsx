import React from 'react'

function HeroBanner({ title, description, imageUrl }) {
    return (
        <div>
            <section id='Coursel' className="h-screen md:h-4/5 bg-cover bg-center flex items-center px-4 relative">
                {/* <img src={imageUrl} alt="" /> */}
                <div className="max-w-xl z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                    <p className="text-gray-300 text-base mb-6">{description}
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
        </div>
    )
}

export default HeroBanner
