import {Parallax} from 'react-parallax';
import {useIntersectionObserver} from './hook';
import {animated, useSpring} from '@react-spring/web';
import React, {useRef} from 'react';

const Problem = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const fadeIn = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
  });
  return (
    <Parallax bgImage="/bg.webp" strength={400} blur={2}>
      <div ref={triggerRef} />
      <animated.div
        className="flex justify-center items-center my-[10rem]"
        style={fadeIn}
      >
        <div className="transition ease-in-out duration-200 hover:shadow-xl shadow-md flex flex-col justify-center w-[70rem] bg-white px-[2rem] py-[2rem] mx-[2rem] rounded-xl text-[#2c302e]">
          <div className="font-bold font-serif text-[32px]">
            Problem Statement:
          </div>
          <div className="text-[16px] mt-4">
            Rice (Oryza sativa) is a staple food for a large portion of the
            world's population, and paddy, the raw grain before removal of husk,
            is the primary form in which it is cultivated. Paddy cultivation is
            predominantly done in tropical climates, specifically in Asian
            countries, where the ideal temperature and humidity conditions
            support its growth. However, paddy cultivation requires consistent
            supervision because several diseases and pests can affect the crop,
            leading to significant yield loss. These diseases can manifest in
            various ways, such as discoloration, wilting, and stunted growth.
          </div>
          <br />
          <div className="text-[16px]">
            Expert supervision is typically necessary to mitigate these diseases
            and prevent crop loss. However, the availability of crop protection
            experts is limited, and manual disease diagnosis is often tedious
            and expensive. This is especially true in remote areas where access
            to experts is limited. Additionally, manual diagnosis can be
            time-consuming, which can delay treatment and lead to further crop
            loss.
          </div>
          <br />
          <div className="text-[16px]">
            Given the challenges of manual disease identification in paddy
            cultivation, our app, Paddy Plant Prognosis, has been developed to
            automate this process. By utilizing computer vision-based
            techniques, our app has the potential to significantly improve the
            accuracy and speed of disease identification in paddy crops. With
            our app, farmers can simply take a picture of their plant and upload
            it to our system, which will quickly analyze the photo and identify
            any potential diseases. This way, farmers can take timely action to
            protect their crops and avoid potential loss. By catching diseases
            early, farmers can save both time and money that would have been
            spent on costly treatments and labor.
          </div>
        </div>
        <div ref={triggerRef} />
      </animated.div>
    </Parallax>
  );
};

export default Problem;
