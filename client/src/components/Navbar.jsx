import { Link } from 'react-router-dom'
import hamburgerMenu from "../assets/menu.png";
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className="bg-white h-[5rem] font-medium flex items-center justify-center px-6 lg:px-10 border-b-[1px] shadow-sm text-[#2c302e]">
      <div className="flex justify-between items-center h-full w-[100rem]">
        <div className="w-[18rem] hidden lg:flex justify-between">
          <Link to="/diseases" className="hover:text-[#537a5a]">Diseases</Link>
          <Link to="/resources" className="hover:text-[#537a5a]">Resources</Link>
          <Link to="/about" className="hover:text-[#537a5a]">About</Link>
        </div>

        <div className="lg:hidden cursor-pointer">
          <img src={hamburgerMenu} alt="hamburgerMenu" className="w-8" />
        </div>

        <Link to="/">
          <img className="lg:absolute lg:left-0 lg:right-0 lg:top-2 lg:text-center lg:m-auto object-cover w-[8rem] h-[4rem]" src={logo}/>
        </Link>

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