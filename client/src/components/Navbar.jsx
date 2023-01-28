import { Link } from 'react-router-dom'
import hamburgerMenu from "../assets/menu.png";

const Navbar = () => {
  return (
    <nav className="bg-white h-[5rem] font-medium flex items-center justify-center px-10 border-b-[1px] shadow-sm text-[#2c302e]">
      <div className="flex justify-between items-center h-full w-[100rem]">
        <div className="w-[18rem] hidden lg:flex justify-between">
          <Link to="/diseases" className="hover:text-[#537a5a]">Diseases</Link>
          <Link to="/resources" className="hover:text-[#537a5a]">Resources</Link>
          <Link to="/about" className="hover:text-[#537a5a]">About</Link>
        </div>
        <div className="absolute left-[50%]">
          <Link to="/">logo</Link>
        </div>
        <div className="lg:hidden cursor-pointer">
          <img src={hamburgerMenu} alt="hamburgerMenu" className="w-8" />
        </div>
        <div>
          <button className="hover:bg-[#b8e4bb] bg-[#9ae19f] px-4 py-2 rounded-md">
            <Link to="/diagnose">Diagnose</Link>  
          </button>
        </div>
      </div>
      
  </nav>
  )
}

export default Navbar