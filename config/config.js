import { defineConfig } from 'umi';

import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由
  routes: routes,
  fastRefresh: {},
  // 配置开启 antd 组件库
  antd: {
    dark: false,
  },
});