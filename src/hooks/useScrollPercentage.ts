import { useEffect, useState } from 'react';

const useScrollPercentage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    // Get the total scrollable height
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Get the current scroll position
    const currentScroll = window.scrollY;

    // Calculate the scroll percentage
    const percentage = (currentScroll / totalHeight) * 100;

    // Update the state with the calculated percentage
    setScrollPercentage(Math.min(Math.max(percentage, 0), 100)); // clamp to 0-100
  };

  useEffect(() => {
    // Set initial scroll percentage
    handleScroll();
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPercentage;
};

export default useScrollPercentage;
