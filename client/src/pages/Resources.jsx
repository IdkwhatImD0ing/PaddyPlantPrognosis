import {useSpring, animated} from '@react-spring/web';

const Resources = () => {
  const zoomLeft = useSpring({
    from: {opacity: 0, transform: 'translateX(-50px)'},
    to: {opacity: 1, transform: 'translateX(0px)'},
    config: {duration: 500},
  });
  const zoomLeft1 = useSpring({
    from: {opacity: 0, transform: 'translateX(-50px)'},
    to: {opacity: 1, transform: 'translateX(0px)'},
    config: {duration: 500},
    delay: 500,
  });

  const zoomLeft2 = useSpring({
    from: {opacity: 0, transform: 'translateX(-50px)'},
    to: {opacity: 1, transform: 'translateX(0px)'},
    config: {duration: 500},
    delay: 1000,
  });

  return (
    <div className="flex justify-center">
      <div className="w-[100rem] px-8 mt-[10rem] mb-[5rem]">
        <animated.p
          className="text-[18px] text-[#43b348] font-medium"
          style={zoomLeft}
        >
          Where can I learn more?
        </animated.p>
        <animated.h1
          className="font-serif text-[32px] font-bold"
          style={zoomLeft1}
        >
          Resources
        </animated.h1>
        <animated.h2 className="pb-6 text-[#666e75]" style={zoomLeft2}>
          Learn more about rice paddy diseases from{' '}
          <a
            className="text-[#43b348] font-bold"
            target="_blank"
            href="http://www.knowledgebank.irri.org/decision-tools/rice-doctor/rice-doctor-fact-sheets"
          >
            Rice Knowledge Bank
          </a>
        </animated.h2>
      </div>
    </div>
  );
};

export default Resources;
