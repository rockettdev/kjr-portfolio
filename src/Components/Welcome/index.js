import { Link } from 'react-router-dom';
import '../../App.css';
import Typewriter from '../Typewriter/index.js'

function Home() {

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div className="text-neon-yellow font-saira text-4xl">
                        <Typewriter/>
                    </div>
                    <br></br>
                    <button className="text-white hover:text-white border border-neon-yellow hover:scale-105 transform transition duration-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> <Link to="home"> Continue </Link> </button>
                </header>
                <video src={process.env.PUBLIC_URL + "/assets/video/nyc.mp4"}
                loop autoPlay muted> </video>
            </div>
        </>
    )

}

export default Home