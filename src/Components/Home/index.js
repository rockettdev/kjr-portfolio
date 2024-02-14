import Navbar from '../Navbar/index.js'
import Typewriter from './typewriter.js'
import Portrait from '../../Assets/portrait.jpg'

function About () {


    return (
        <>
            <Navbar/>
            <div className='bg-gray-900'> 
                <header className="flex flex-col h-screen relative">
                    <div className="text-white font-cabin text-5xl absolute top-60 left-16">
                        <h1 className="text-left">Hi, my ​name is <b className='text-cream'>Korey.</b> </h1>
                        <h1> <Typewriter/> </h1>
                        <br></br>
                        <br></br>
                        <h1 className='text-2xl'> I am a recent graduate of the Boolean Software Development Course and currently serve as a Junior Software Developer. 
                        <br></br>on the hunt for a way into the tech industry with an extensive skill set that encompasses various specialties in programming
                        <br></br>languages and libraries including:  JavaScript, React.js, HTML, CSS, Node.js, Express.js, TailwindCSS, PostgresSQL and many more! </h1>
                    </div>
                </header>
                <div className='static'>
                    <img className='h-[28rem] w-[28rem] rounded-full object-scale-down object-center absolute top-32 right-32' src={Portrait} alt=""></img>
                </div>
            </div>
        </>
    )
}

export default About