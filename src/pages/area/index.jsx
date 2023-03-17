import React, { useRef, useEffect, useState } from 'react';

import styles from './index.less';
import { Button, message } from 'antd';
import { areaAdd, areaGet, areaUpdate } from '@/api/coke.js';

export default function Area() {
  const [drawing, setDrawing] = useState(false);
  const [path, setPath] = useState([]);

  const mapRef = useRef(null);
  var mouseTool;
  function drawPolygon() {
    setDrawing(true);
    mouseTool.polygon({
      strokeColor: '#FF33FF',
      strokeOpacity: 1,
      strokeWeight: 6,
      strokeOpacity: 0.2,
      fillColor: '#1791fc',
      fillOpacity: 0.4,
      // 线样式还支持 'dashed'
      strokeStyle: 'solid',
      // strokeStyle是dashed时有效
      // strokeDasharray: [30,10],
    });
  }

  useEffect(() => {
    var map = new AMap.Map(mapRef.current, {
      center: [112.45, 34.62],
      zoom: 10,
    });

    mouseTool = new AMap.MouseTool(map);

    mouseTool.on('draw', function (event) {
      let path = event.obj.getPath();
      // event.obj 为绘制出来的覆盖物对象
      let arr = path.map((item) => [item.lng, item.lat]);
      areaAdd({
        city: '洛阳市',
        path: arr,
      }).then((res) => {
        message.success('绘制完成');
      });
      setDrawing(false);
    });
  }, []);

  return (
    <div>
      <Button type="primary" onClick={drawPolygon} disabled={drawing}>
        {!drawing ? '绘制配送范围' : '正在绘制，双击地图结束绘制'}
      </Button>
      <div className={styles.map} ref={mapRef}>
        即将渲染地图...
      </div>
    </div>
  );
}
