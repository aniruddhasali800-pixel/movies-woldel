<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5719665546463228"
     crossorigin="anonymous"></script>
     import React, { useEffect } from 'react';

const AdSense = ({ adSlot, style = { display: 'block' }, adFormat = 'auto', fullWidthResponsive = 'true' }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="adsense-container" style={{ margin: '2rem 0', textAlign: 'center', overflow: 'hidden' }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5719665546463228"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      ></ins>
    </div>
  );
};

export default AdSense;
