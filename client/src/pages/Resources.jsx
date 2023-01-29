const Resources = () => {
  return (

    <div className='flex justify-center mb-6'>
      <div className='w-[100rem]'>
        <h1 className="py-6 text-center text-[32px] font-medium">Resources</h1>
        <div className='px-24'>
          <h2 className="pb-6">Learn more about rice paddy diseases from <a className="text-cyan-600" href="http://www.knowledgebank.irri.org/decision-tools/rice-doctor/rice-doctor-fact-sheets">Rice Knowledge Bank</a></h2>
          <iframe src="http://www.knowledgebank.irri.org/decision-tools/rice-doctor/rice-doctor-fact-sheets" width="800" height="600"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Resources

