import Navbar from '../Navbar/index.js'

function About () {


    return (
        <>
            <Navbar/>
            <div>
                <header className="flex flex-col h-screen justify-center items-center ">
                    <div className="text-neon-yellow font-saira text-4xl text-center">
                        <h1 className='font-apple'>Hi, my ​name is <b>Korey.</b> </h1>
                        <h1>I'm an independent Junior Software Developer from Bath, UK.</h1>
                    </div>
                </header>
                <video src={process.env.PUBLIC_URL + "/assets/video/night.mp4"}
                loop autoPlay muted className="object-cover absolute h-screen w-screen -z-10 top-0 left-0"> </video>
            </div>
        </>
    )
}

export default About