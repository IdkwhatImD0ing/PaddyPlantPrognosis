import Disease from "./Disease"
import Data from './data.json';
import { useParams, Link } from "react-router-dom";

const Diseases = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[100rem] px-8 mt-[5rem] mb-[5rem]">
        <h1 className="font-serif text-[32px] font-bold">Diseases</h1>
        <p>Learn more about the diseases we detect</p>
        <div className="flex flex-col gap-4">
          <Link to={`/Diseases/${0}`} className="hover:text-[#537a5a]">Bacterial Leaf Blight</Link>
          <Link to={`/Diseases/${1}`} className="hover:text-[#537a5a]">Bacterial Leaf Streak</Link>
          <Link to={`/Diseases/${2}`} className="hover:text-[#537a5a]">Bacterial Panicle Blight</Link>
          <Link to={`/Diseases/${3}`} className="hover:text-[#537a5a]">Blast</Link>
          <Link to={`/Diseases/${4}`} className="hover:text-[#537a5a]">Brown Spot</Link>
          <Link to={`/Diseases/${5}`} className="hover:text-[#537a5a]">Dead Heart</Link>
          <Link to={`/Diseases/${6}`} className="hover:text-[#537a5a]">Downy Mildew</Link>
          <Link to={`/Diseases/${7}`} className="hover:text-[#537a5a]">Hispa</Link>
          <Link to={`/Diseases/${8}`} className="hover:text-[#537a5a]">Tungro</Link>
          <Link to={`/Diseases/${9}`} className="hover:text-[#537a5a]">Normal</Link>
        </div>
      </div>
    </div>
  )
}

export default Diseases