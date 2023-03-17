import React, { useRef, useEffect } from 'react';

import styles from './index.less';
export default function Area() {
  const mapRef = useRef(null);
  useEffect(() => {
    var map = new AMap.Map(mapRef.current);
  }, []);

  return (
    <div className={styles.map} ref={mapRef}>
      即将渲染地图...
    </div>
  );
}
