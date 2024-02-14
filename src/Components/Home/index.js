import Navbar from '../Navbar/index.js'
import Typewriter from './typewriter.js'
import Typewriter2 from './typewriter2.js'

function About () {


    return (
        <>
            <Navbar/>
            <div className='bg-black'> 
                <header className="flex flex-col h-screen relative">
                    <div className="text-white font-cabin text-5xl absolute top-60 left-16">
                        <h1 className="text-left">Hi, my ​name is <b className='text-neon-yellow'>Korey.</b> </h1>
                        <h1> <Typewriter/> </h1>
                        <br></br>
                        <br></br>
                        <h1 className='text-2xl'> Test </h1>
                    </div>
                </header>
                <div className='static'>
                    <img className='h-[28rem] w-[28rem] rounded-full object-scale-down object-center absolute top-32 right-32' src='https://media.licdn.com/dms/image/D4E03AQHJ06_YeSYuOQ/profile-displayphoto-shrink_800_800/0/1687648895478?e=1713398400&v=beta&t=pwtIvuzn5hevpq7Q2iOyrTULtDFKqtNpwBDod-iBGzg'></img>
                </div>
            </div>
        </>
    )
}

export default About