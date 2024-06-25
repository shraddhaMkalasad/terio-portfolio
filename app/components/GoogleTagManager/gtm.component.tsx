import React from "react";
import Script from "next/script";

const GoogleTagManager = () => {
  return (
    <>
      <Script
        id="google-analytics-gtm-2"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-VV9EPSX6HY"
      />

      <Script
        id="google-gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VV9EPSX6HY');
                    `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
