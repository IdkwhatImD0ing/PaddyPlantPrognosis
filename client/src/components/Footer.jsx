const Footer = () => {
  return (
    <div className="w-full text-[#9ae19f] bg-[#2c302e] h-[5rem] flex items-center justify-center space-x-2">
        <p className="">
          &copy; {new Date().getFullYear()} PaddyPlantPrognosis
        </p>
        <p>
          |
        </p>
        <a 
          href="https://github.com/IdkwhatImD0ing/PaddyPlantPrognosis"
          className="text-white hover:text-[#56c75c] font-semibold"
        >
          Source Code
        </a>
    </div>
  )
}

export default Footer