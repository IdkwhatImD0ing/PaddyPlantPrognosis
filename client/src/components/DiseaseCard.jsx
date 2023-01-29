import React from 'react'

const DiseaseCard = ({ photo, name, description }) => {
  return (
    <div className="md:w-[40rem] w-[100%] h-[10rem] flex bg-slate-100 rounded-xl shadow-md">
        <img className="w-[10rem] rounded-xl object-cover" src={photo} alt="image"/>
        <div className="flex flex-col justify-between px-6 py-3 text-left">
            <figcaption>
                <div className="text-left font-semibold">
                    {name}
                </div>
                <div className="">
                    {description}
                </div>
            </figcaption>
        </div>
    </div>
  )
}

export default DiseaseCard