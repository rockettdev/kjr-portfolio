import Navbar from '../Navbar/index.js'
import Typewriter from './typewriter.js'

function About () {


    return (
        <>
            <Navbar/>
            <div className='bg-black'> 
                <header className="flex flex-col h-screen justify-center items-center ">
                    <div className="text-white font-cabin text-4xl text-center">
                        <h1 className=''>Hi, my ​name is <b className='text-neon-yellow'>Korey.</b> </h1>
                        <h1> <Typewriter/> </h1>
                    </div>
                </header>
            </div>
        </>
    )
}

export default About