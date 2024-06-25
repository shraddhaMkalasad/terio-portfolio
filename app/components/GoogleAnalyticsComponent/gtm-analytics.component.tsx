import React from "react";
import Script from "next/script";

const GoogleAnalyticsManager = () => {
  return (
    <>
      <Script
        id="google-analytics-gtm-1"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16558106545%22>"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16558106545');
                    `,
        }}
      />
    </>
  );
};

export default GoogleAnalyticsManager;
