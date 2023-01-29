import Data from './data.json'
import DiseaseCard from "../components/DiseaseCard"


const Diseases = () => {
  const pages = [0,1,2,3,4,5,6,7,8,9]

  return (
    <div className="flex justify-center">
      <div className="w-[100rem] px-8 mt-[10rem] mb-[5rem] text-[#2c302e]">
        <h1 className="font-serif text-[32px] font-bold">Diseases</h1>
        <p className="text-[#666e75]">Learn more about the diseases that we detect.</p>

        <div className="flex flex-wrap gap-4 mt-[2rem]">
          {pages.map(page => (
            <DiseaseCard page={page} photo={`/sample-paddies/${page}.jpg`} name={Data[page].name} description={`${Data[page].cause.slice(0,70).replace(/^\s+|\s+$/gm,'')}...`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Diseases