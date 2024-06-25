import React from "react";
import Script from "next/script";

const ClarityAnalytics = () => {
  return (
    <>
      <Script
        id="clarity-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "m8o1dral1a");
        `,
        }}
      />
    </>
  );
};

export default ClarityAnalytics;
