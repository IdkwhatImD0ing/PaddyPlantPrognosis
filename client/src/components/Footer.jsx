import { Link } from "react-router-dom"
import GitHub from "../assets/github.png"
import logo from "../assets/logo-2.svg"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full text-[#9ae19f] bg-[#474A48] h-[5rem] flex items-center justify-center gap-28 px-10">
        <Link to="/"><img className="w-[7rem]" src={logo}/></Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about" className="">About</Link>
        <a href="https://github.com/IdkwhatImD0ing/PaddyPlantPrognosis">
            GitHub
        </a> 
    </footer>
  )
}

export default Footer