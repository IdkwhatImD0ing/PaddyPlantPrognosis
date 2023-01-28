import LinkedIn from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import Gmail from "../assets/gmail-logo.png"

const Contributor = ({ photo, name, info, linkedin, github, gmail }) => {
  return (
    <div className="w-[40rem] flex bg-slate-100 rounded-xl shadow-md">
        <img className="w-[10rem] rounded-xl" src={photo} alt="image"/>
        <div className="flex flex-col justify-between px-6 py-3 text-left">
            <figcaption>
                <div className="text-left font-semibold">
                    {name}
                </div>
                <div className="">
                    {info}
                </div>
            </figcaption>
            <div className="flex gap-2 items-center">
                Contact me
                <a href={linkedin}>
                    <img className="w-[20px] hover:ring-grey" src={LinkedIn} />
                </a> 
                <a href={github}>
                    <img className="w-[20px]" src={GitHub} />
                </a> 
                <a href={gmail}>
                    <img className="w-[20px]" src={Gmail} />
                </a> 
            </div>
        </div>
    </div>
  )
}

export default Contributor