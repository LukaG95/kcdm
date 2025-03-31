import { useState, useCallback } from 'react';

const useGradientEffect = (initialWidth = 0, increment = 4, intervalTime = 1) => {
  const [gradientWidth, setGradientWidth] = useState(initialWidth);
  const [intervalId, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (intervalId) clearInterval(intervalId); 
    const increaseWidth = setInterval(() => {
      setGradientWidth(prev => {
        if (prev >= 100) {
          clearInterval(increaseWidth);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime); 
    setIntervalId(increaseWidth);
  }, [intervalId, increment, intervalTime]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (intervalId) clearInterval(intervalId); 
    const decreaseWidth = setInterval(() => {
      setGradientWidth(prev => {
        if (prev <= 0) {
          clearInterval(decreaseWidth); 
          return 0;
        }
        return prev - increment;
      });
    }, intervalTime);
    setIntervalId(decreaseWidth);
  }, [intervalId, increment, intervalTime]);

  return { gradientWidth, isHovered, handleMouseEnter, handleMouseLeave };
};

export default useGradientEffect;
