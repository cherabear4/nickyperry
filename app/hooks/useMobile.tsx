import { useEffect, useState } from 'react';

const useIsUsingMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkIsMobile(); // initial check
    window.addEventListener('resize', checkIsMobile);
    console.log('isMobile', isMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};

export default useIsUsingMobile;
