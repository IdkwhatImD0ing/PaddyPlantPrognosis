import {useState, useEffect, useRef} from 'react';

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setIsHovered(true);
  }

  function leave() {
    setIsHovered(false);
  }

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseenter', enter);
      node.addEventListener('mouseleave', leave);
      return () => {
        node.removeEventListener('mouseenter', enter);
        node.removeEventListener('mouseleave', leave);
      };
    }
  }, [ref]);

  return [ref, isHovered];
}
