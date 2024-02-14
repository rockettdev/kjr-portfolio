import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">                    
                    <span className="text-3xl font-bold text-black">KJR DEV</span>
                </div>
                <div className="lg:flex md:flex lg:  flex-1 items-center justify-end font-apple hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px] text-black">
                            <Link>
                                <li>About</li>
                            </Link>
                            <Link>
                                <li>Projects</li>
                            </Link>
                            <Link>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar