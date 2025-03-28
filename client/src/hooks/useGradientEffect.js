import { useState, useCallback } from 'react';

const useGradientEffect = (initialWidth = 0, increment = 4, intervalTime = 1) => {
  const [gradientWidth, setGradientWidth] = useState(initialWidth);
  const [intervalId, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Function to increase gradient width
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (intervalId) clearInterval(intervalId); // Clear any ongoing interval
    const increaseWidth = setInterval(() => {
      setGradientWidth(prev => {
        if (prev >= 100) {
          clearInterval(increaseWidth); // Stop when it reaches 100%
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime); // Increase by increment every intervalTime ms
    setIntervalId(increaseWidth);
  }, [intervalId, increment, intervalTime]);

  // Function to decrease gradient width
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (intervalId) clearInterval(intervalId); // Clear any ongoing interval
    const decreaseWidth = setInterval(() => {
      setGradientWidth(prev => {
        if (prev <= 0) {
          clearInterval(decreaseWidth); // Stop when it reaches 0%
          return 0;
        }
        return prev - increment;
      });
    }, intervalTime); // Decrease by increment every intervalTime ms
    setIntervalId(decreaseWidth);
  }, [intervalId, increment, intervalTime]);

  return { gradientWidth, isHovered, handleMouseEnter, handleMouseLeave };
};

export default useGradientEffect;
