import axios from 'axios'

const Diagnose = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  
  return (
    <div className="flex justify-center text-[#2c302e]">
      <form onSubmit={(e) => handleSubmit(e)} action="POST"  className="flex flex-col justify-center mt-[5rem] w-[100rem] p-8">
        <h1 className="text-[32px]">Diagnose</h1>
        <p className="text-[16px] text-[#666e75]">Upload an image or choose one of our demo images below!</p>
        <select className="mt-6 bg-white border px-4 py-2 w-[4rem] rounded-lg" ame="paddies" id="paddies">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button type="submit" className="mt-6 hover:bg-[#b8e4bb] bg-[#9ae19f] w-[6rem] px-4 py-2 rounded-md">Upload</button>
      </form>
    </div>
  )
}

export default Diagnose