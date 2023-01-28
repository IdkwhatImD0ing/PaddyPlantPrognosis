import { Link } from 'react-router-dom'
import hamburgerMenu from "../assets/menu.png";

const Navbar = () => {
  return (
    <nav className="bg-white text-[#2c302e] text-[15px] font-semibold h-[5rem] flex items-center justify-center px-10 shadow-sm">
      <div className="flex justify-between items-center h-full w-[100rem]">
        <div className="w-[18rem] md:flex hidden justify-between">
          <Link to="/diseases" className="transition duration-100 ease-in-out hover:text-[#727c77]">Diseases</Link>
          <Link to="/resources" className="transition duration-100 ease-in-out hover:text-[#727c77]">Resources</Link>
          <Link to="/about" className="transition duration-100 ease-in-out hover:text-[#727c77]">About</Link>
        </div>
        <div className="md:hidden cursor-pointer">
          <img src={hamburgerMenu} alt="hamburgerMenu" className="w-8" />
        </div>
        <div className="absolute left-[50%]">
          <Link to="/">logo</Link>
        </div>
        <div>
          <button className="transition duration-100 ease-in-out bg-[#9ae19f] px-4 py-2 rounded-lg hover:bg-[#cbf1cd]">
            <Link to="/diagnose" className="">Diagnose</Link>  
          </button>
        </div>
      </div>
    </nav>
      
  )
}

export default Navbar