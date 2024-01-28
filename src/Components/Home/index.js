function Portfolio() {

    return (
        <>
            <div className="grid md:grid-cols-9 p-5 bg-default items-center">
                <h1 className="font-apple text-3xl text-neon-yellow
                ">KJR Dev</h1>
                <h1 className="font-apple text-l mx-auto text-white text-align hover:scale-105
                ">PROJECTS</h1>
                <h1 className="font-apple text-l mx-auto text-white text-align hover:scale-105
                "> ABOUT ME </h1>
                <h1 className="font-apple text-l mx-auto text-white text-align hover:scale-105
                "> CONTACT ME</h1>
            </div>
            <div className="bg-secondary h-auto">
                    <h1 className="font-apple pt-20 pb-20 text-center text-xl"> MY PROJECTS </h1>
                    <div className="grid grid-cols-3 gap-4 place-items-center">
                        <div className="bg-neon-yellow w-72 h-72 ml-32 text-center rounded-xl">
                            <h1> Mini-Golf </h1>
                        </div>
                        <div className="bg-neon-yellow w-72 h-72 text-center rounded-xl">
                            <h1> Mini-Golf</h1>
                        </div>
                        <div className="bg-neon-yellow w-72 h-72 mr-32 text-center rounded-xl">
                            <h1> Mini-Golf </h1>
                        </div>
                        <div className="bg-neon-yellow w-72 h-72 mb-64 mt-10 ml-32 text-center rounded-xl">
                            <h1> Mini-Golf </h1>
                        </div>
                        <div className="bg-neon-yellow w-72 h-72 mb-64 mt-10 text-center rounded-xl mt--20">
                            <h1> Mini-Golf</h1>
                        </div>
 
                    </div>
            </div>
        </>
    )
}

export default Portfolio