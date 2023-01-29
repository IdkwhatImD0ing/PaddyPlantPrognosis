import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax';

const Hero = () => {
  return (
    <Parallax bgImage='/statement.webp' strength={400} blur={2}>
      <div className="h-screen flex justify-center items-center">
        <div className="max-w[1000px] flex flex-col items-center justify-around w-[100rem] h-[60%] text-center mx-[2rem]">
          <div className='flex flex-col justify-center items-center'>
            <h1 className="text-white lg:text-[96px] md:text-[72px] text-[55px] font-extrabold drop-shadow-2xl">
              PADDY PLANT PROGNOSIS
            </h1>
            <p className="text-[#bdd8bf] font-semibold drop-shadow-lg text-center text-[18px] mt-[2rem]">
              Say goodbye to the hassle of manually inspecting your paddy plants
              for diseases.
            </p>
          </div>
          <Link
            to='/diagnose'
            className="hover:bg-[#b8e4bb] bg-[#9ae19f] w-[14rem] px-6 py-4 text-[18px] rounded-md shadow-md font-semibold text-center"
          >
            Get Started Now!
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;