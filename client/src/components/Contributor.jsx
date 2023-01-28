import LinkedIn from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import Gmail from "../assets/gmail-logo.png"

const Contributor = ({ photo, name, info, linkedin, github, gmail }) => {
  return (
    <div>
        <figure class="flex bg-slate-100 rounded-xl shadow-md">
            <img class="w-36 rounded-xl" src={photo}/>
            <div class="flex flex-col justify-between px-6 py-4 text-center text-left">
                <figcaption class="">
                    <div class="text-left">
                        {name}
                    </div>
                    <div class="">
                        {info}
                    </div>
                </figcaption>
                <div className="flex gap-2 items-center">
                    Contact me
                    <a href={linkedin}><img className="w-[20px]" src={LinkedIn} /></a> 
                    <a href={github}><img className="w-[20px]" src={GitHub} /></a> 
                    <a href={gmail}><img className="w-[20px]" src={Gmail} /></a> 
                </div>
            </div>
        </figure>
    </div>
  )
}

export default Contributor