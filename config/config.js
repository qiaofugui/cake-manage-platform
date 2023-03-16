import { defineConfig } from 'umi';

import routes from './routes';
import layout from './layout';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由
  routes: routes,
  layout,
  fastRefresh: {},
  // 配置开启 antd 组件库
  antd: {
    dark: false,
  },

  proxy: {
    '/api': {
      target: 'https://api2107.h5project.cn/1.1/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },

  // 启用 dva
  dva: {
    immer: true,
  },
});
