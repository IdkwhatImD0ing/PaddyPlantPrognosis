import { Link } from 'react-router-dom'
import hamburgerMenu from "../assets/menu.png";
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="bg-white h-[5rem] flex items-center justify-center px-10 shadow-lg">
      <div className="flex justify-between items-center h-full w-[100rem]">
        <div className="w-[18rem] hidden md:flex justify-between">
          <Link to="/diseases" className="">Diseases</Link>
          <Link to="/resources" className="">Resources</Link>
          <Link to="/about" className="">About</Link>
        </div>
        <div className="absolute left-[50%]">
          <Link to="/"><img className="w-[10rem]" src={logo}/></Link>
        </div>
        <div className="md:hidden cursor-pointer">
          <img src={hamburgerMenu} alt="hamburgerMenu" className="w-8" />
        </div>
        <div>
          <button className="bg-[#9ae19f] px-4 py-2 rounded-lg">
            <Link to="/diagnose">Diagnose</Link>  
          </button>
        </div>
      </div>
      
  </nav>
  )
}

export default Navbar