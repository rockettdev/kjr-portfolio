import { Link } from 'react-router-dom';
import '../../App.css';
import Typewriter from '../Typewriter/index.js'

function Home() {

    return (
        <>
            <div>
                <header className="flex flex-col h-screen justify-center items-center">
                    <div className="text-neon-yellow font-saira text-4xl text-center">
                        <Typewriter/>
                    </div>
                    <button className="text-white hover:text-white border border-neon-yellow hover:scale-105 transform transition duration-80 font-medium rounded-lg text-sm p-2 mt-5" > <Link to="home"> Continue </Link> </button>
                </header>
                <video src={process.env.PUBLIC_URL + "/assets/video/nyc.mp4"}
                loop autoPlay muted className="object-cover absolute h-screen w-screen -z-10 top-0 left-0"> </video>
            </div>
        </>
    )

}

export default Home