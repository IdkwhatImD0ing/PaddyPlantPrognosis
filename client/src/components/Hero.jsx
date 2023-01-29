import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';
import {useSpring, animated} from '@react-spring/web';
import useHover from './hook';

const Hero = () => {
  const [hoverRef, isHovered] = useHover();
  const [show, setShow] = useState(false);

  const buttonProps = useSpring({
    opacity: show ? 1 : 0,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: {duration: 200},
  });

  const fadeDown = useSpring({
    from: {opacity: 0, transform: 'translateY(-50px)'},
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: {duration: 500},
  });

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
  return (
    <Parallax bgImage="/statement.webp" strength={400} blur={2}>
      <div ref={triggerRef} />
      <div className="h-screen flex justify-center items-center">
        <div className="max-w[1000px] flex flex-col items-center justify-around w-[100rem] h-[60%] text-center mx-[2rem]">
          <animated.div
            className="flex flex-col justify-center items-center"
            style={fadeDown}
          >
            <h1 className="text-white lg:text-[96px] md:text-[72px] text-[55px] font-extrabold drop-shadow-2xl">
              PADDY PLANT PROGNOSIS
            </h1>
            <p className="text-[#bdd8bf] font-semibold drop-shadow-lg text-center text-[18px] mt-[2rem]">
              Say goodbye to the hassle of manually inspecting your paddy plants
              for diseases
            </p>
          </animated.div>
          <animated.div ref={hoverRef} style={buttonProps}>
            <Link
              to="/diagnose"
              className="transition ease-in-out duration-100 hover:bg-[#b8e4bb] bg-[#9ae19f] w-[14rem] px-6 py-4 text-[18px] rounded-md shadow-md font-semibold text-center"
            >
              Get Started Now!
            </Link>
          </animated.div>
        </div>
      </div>
      <div ref={triggerRef} />
    </Parallax>
  );
};

export default Hero;
