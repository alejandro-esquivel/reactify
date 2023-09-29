import { useEffect, useState } from "react"

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsSmallScreen(true);
    }
  }, []);

  return isSmallScreen
}

export default useIsSmallScreen