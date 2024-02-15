import { Link } from "react-router-dom"
import logo from "../../Assets/logo.png"

function Navbar() {

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 bg-cream">
                <div className="flex items-center flex-1">     
                    <Link to='/'>                 
                    <img className="w-48" src={logo} alt=""></img>
                    </Link>               
                </div>
                <div className="lg:flex md:flex lg:  flex-1 items-center justify-end font-apple hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px] text-black">
                            <Link to=''>
                                <li>About</li>
                            </Link>
                            <Link to='portfolio'>
                                <li>Projects</li>
                            </Link>
                            <Link>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black h-0.5">

            </div>
        </nav>
    )
}

export default Navbar