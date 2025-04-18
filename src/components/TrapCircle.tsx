
import { useState } from 'react';
import * as anime from 'animejs';

interface TrapCircleProps {
  number: number;
}

const TrapCircle = ({ number }: TrapCircleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    anime.default({
      targets: `.trap-circle-${number}`,
      scale: 1.1,
      duration: 400,
      easing: 'easeOutElastic(1, .5)'
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    anime.default({
      targets: `.trap-circle-${number}`,
      scale: 1,
      duration: 400,
      easing: 'easeOutElastic(1, .5)'
    });
  };

  return (
    <div 
      className={`trap-circle-small trap-circle-${number} cursor-pointer`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      style={{
        transform: 'scale(0.5)',
        opacity: 0
      }}
    >
      {number}
    </div>
  );
};

export default TrapCircle;
