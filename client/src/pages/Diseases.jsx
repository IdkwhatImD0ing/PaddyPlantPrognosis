import Disease from "./Disease"
import Data from './data.json'
import { Link } from "react-router-dom"
import DiseaseCard from "../components/DiseaseCard"


const Diseases = () => {
  const pages = [0,1,2,3,4,5,6,7,8,9]

  return (
    <div className="flex justify-center">
      <div className="w-[100rem] px-8 mt-[5rem] mb-[5rem]">
        <h1 className="font-serif text-[32px] font-bold">Diseases</h1>
        <p>Learn more about the diseases we detect</p>
        <div className="flex flex-col gap-4">
          {pages.map(page => (
            <Link to={`/diseases/${page}`}><DiseaseCard photo={`/sample-paddies/${page}.jpg`} name={Data[page].name} description={`${Data[page].cause.slice(0,238).replace(/^\s+|\s+$/gm,'')}...`}/></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Diseases