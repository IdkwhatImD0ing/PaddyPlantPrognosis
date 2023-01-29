import Data from './data.json';
import DiseaseCard from '../components/DiseaseCard';
import {useSpring, animated, useTrail} from '@react-spring/web';

const Diseases = () => {
  const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const config = {mass: 2, tension: 2000, friction: 100};

  const trail = useTrail(pages.length, {
    from: {opacity: 0, transform: 'translateY(-50px)'},
    to: {opacity: 1, transform: 'translateY(0px)'},
    delay: 500,
    config,
  });

  const fadeDown = useSpring({
    from: {opacity: 0, transform: 'translateY(-50px)'},
    to: {opacity: 1, transform: 'translateY(0px)'},
    config: {duration: 500},
  });

  return (
    <div className="flex justify-center">
      <div className="w-[100rem] px-8 mt-[10rem] mb-[5rem] text-[#2c302e]">
        <animated.div style={fadeDown}>
          <h1 className="font-serif text-[32px] font-bold">Diseases</h1>
          <p className="text-[#666e75]">
            Learn more about the diseases that we detect.
          </p>
        </animated.div>

        <div className="flex flex-wrap gap-4 mt-[2rem]">
          {pages.map((page, index) => (
            <animated.div style={trail[index]}>
              <DiseaseCard
                page={page}
                photo={`/sample-paddies/${page}.jpg`}
                name={Data[page].name}
                description={`${Data[page].cause
                  .slice(0, 70)
                  .replace(/^\s+|\s+$/gm, '')}...`}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diseases;
