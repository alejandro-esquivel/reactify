import { useEffect, useState } from "react"

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const UA = navigator.userAgent;

    if (UA.indexOf('Android') !== -1) {
      setIsMobile(true);
    }

    if (UA.indexOf('iPhone') !== -1 ) {
      setIsMobile(true)
    }

    if ( UA.indexOf('iPad') !== -1) {
      setIsMobile(true)
    }
  }, []);

  return isMobile
}

export default useIsMobile