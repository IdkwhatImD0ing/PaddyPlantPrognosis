import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSpring, animated} from '@react-spring/web';
import hamburgerMenu from '../assets/menu.png';
import logo from '../assets/logo-3.svg';
const Navbar = () => {
  // STATES
  const [hamburger, setHamburger] = useState(false); // State for toggling hamburger menu
  const props = useSpring({
    opacity: hamburger ? 1 : 0,
    visibility: hamburger ? 'visible' : 'hidden',
    config: {duration: 500},
  });

  const fadeIn = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 500},
  });

  return (
    <nav className="">
      <div className="h-[5rem] shadow-sm bg-white font-medium flex items-center justify-center px-6 lg:px-10 text-[#2c302e] fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center h-full w-[100rem]">
          <animated.div
            className="w-[18rem] hidden lg:flex justify-between"
            style={fadeIn}
          >
            <Link
              to="/diseases"
              className="transition ease-in-out duration-100 hover:text-[#537a5a]"
            >
              Diseases
            </Link>
            <Link
              to="/resources"
              className="transition ease-in-out duration-100 hover:text-[#537a5a]"
            >
              Resources
            </Link>
            <Link
              to="/about"
              className="transition ease-in-out duration-100 hover:text-[#537a5a]"
            >
              About
            </Link>
          </animated.div>

          <animated.div
            onClick={() => setHamburger(!hamburger)}
            className="lg:hidden cursor-pointer"
            style={fadeIn}
          >
            <img src={hamburgerMenu} alt="hamburgerMenu" className="w-8" />
          </animated.div>
          <animated.div style={fadeIn}>
            <Link to="/">
              <img
                className="lg:absolute lg:left-0 lg:right-0 lg:top-2 lg:text-center lg:m-auto object-cover w-[8rem] h-[4rem]"
                src={logo}
              />
            </Link>
          </animated.div>
          <animated.div style={fadeIn}>
            <button className="transition ease-in-out duration-100 hover:bg-[#b8e4bb] bg-[#9ae19f] px-4 py-2 rounded-md">
              <Link to="/diagnose">Diagnose</Link>
            </button>
          </animated.div>
        </div>
      </div>
      <animated.div
        className={`fixed lg:hidden bg-white w-full mt-[5rem] shadow-lg z-10 rounded-b-lg`}
        style={props}
      >
        <Link
          to="/diseases"
          onClick={() => setHamburger(false)}
          className="w-full"
        >
          <div className="transition ease-in-out duration-100 hover:bg-[#2c302e] hover:text-white border h-[5rem] flex justify-center items-center text-[16px] font-semibold text-[#2c302e]">
            Diseases
          </div>
        </Link>
        <Link
          to="/resources"
          onClick={() => setHamburger(false)}
          className="w-full"
        >
          <div className="transition ease-in-out duration-100 hover:bg-[#2c302e] hover:text-white border-b h-[5rem] flex justify-center items-center text-[16px] font-semibold text-[#2c302e]">
            Resources
          </div>
        </Link>
        <Link
          to="/about"
          onClick={() => setHamburger(false)}
          className="w-full"
        >
          <div className="transition ease-in-out duration-100 hover:bg-[#2c302e] hover:text-white border-b h-[5rem] flex justify-center items-center text-[16px] font-semibold text-[#2c302e] ">
            About
          </div>
        </Link>
      </animated.div>
    </nav>
  );
};

export default Navbar;
