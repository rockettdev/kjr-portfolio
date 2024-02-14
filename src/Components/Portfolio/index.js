import Navbar from "../Navbar"

function Portfolio() {

    return (
        <>
        <Navbar/>
            <div className="bg-gray-900 h-auto">
                    <h1 className="font-apple text-white pt-20 pb-20 text-center text-2xl"> MY PROJECTS </h1>
                    <div className="grid grid-cols-3 gap-4 place-items-center">
                        <div className="bg-cream w-72 h-72 ml-32 text-center rounded-xl hover:scale-105">
                            <h1 className="text-lg pt-2"> Mini-Golf Tracker </h1>
                        </div>
                        <div className="bg-cream w-72 h-72 text-center rounded-xl hover:scale-105">
                            <h1 className="text-lg pt-2"> Personal Portfolio </h1>
                        </div>
                        <div className="bg-cream w-72 h-72 mr-32 text-center rounded-xl hover:scale-105">
                            <h1 className="text-lg pt-2"> FIFA Career Mode Stat Tracker </h1>
                        </div>
                        <div className="bg-cream w-72 h-72 mb-64 mt-10 ml-32 text-center rounded-xl hover:scale-105">
                            <h1 className="text-lg pt-2"> Spotify Frontend Clone </h1>
                        </div>
                        <div className="bg-cream w-72 h-72 mb-64 mt-10 text-center rounded-xl hover:scale-105">
                            <h1 className="text-lg pt-2"> Interactive Grocery Basket Calculator </h1>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Portfolio