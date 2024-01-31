import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className="grid md:grid-cols-9 p-5 bg-default items-center">
            <h1 className="font-apple text-3xl text-neon-yellow
            "> <Link to="/home"> KJR Dev </Link></h1>
            <h1 className="font-apple text-l mx-auto text-white text-align hover:scale-105
            "> <Link to="/portfolio">PROJECTS</Link></h1>
            <h1 className="font-apple text-l mx-auto text-white text-align hover:scale-105
            "> ABOUT ME </h1>
            <h1 className="font-apple text-l mx-auto text-white text-align hover:scale-105
            "> CONTACT ME</h1>
        </div>
    )
}

export default Navbar