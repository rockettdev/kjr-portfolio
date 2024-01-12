// import '../../index.css'

function Navbar() {

    return (
        <div className="grid md:grid-cols-7 p-4 bg-secondary items-center">
            <h1 className="text-3xl text-black bg-secondary
            "> Piston Towing <br></br><span className="text-lg text-align">New York</span></h1>
            <h1 className="text-xl mx-auto text-white bg-secondary text-align hover:scale-105
            "> Our Work </h1>
            <h1 className="text-xl mx-auto text-white bg-secondary text-align hover:scale-105
            "> About Us </h1>
            <h1 className="text-xl mx-auto text-white bg-secondary text-align hover:scale-105
            "> Contact Us </h1>
        </div>
    )
}

export default Navbar