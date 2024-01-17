import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div className="text-neon-yellow font-saira tracking-widest text-4xl relative w-[max-content] before:absolute before:inset-0 before:bg-default before:animate-typewriter">KJR Dev Portfolio</div>
                    <br></br>
                    <button className="text-white hover:text-white border border-neon-yellow hover:scale-105 transform transition duration-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> <Link to="home"> Continue </Link> </button>
                </header>
            </div>
        </>
    )

}

export default Home