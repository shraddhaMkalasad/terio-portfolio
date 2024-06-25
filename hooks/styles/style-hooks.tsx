import { useState, useEffect } from "react";

// export const useMediaQuery = (query: string) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);

//   return matches;
// };

export const useIsDarkMode = () => {
  const [matches, setMatches]: any = useState();

  useEffect(() => {
    if(!window) return; 
    setMatches(window.matchMedia('(prefers-color-scheme: dark)').matches)
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    updateMatches();

    const listener = () => {
      updateMatches();
    };

    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);

  return matches;
};

