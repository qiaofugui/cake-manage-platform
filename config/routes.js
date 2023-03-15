export default [
  { name: '首页', path: '/', component: '@/pages/index', icon: 'home' },
  {
    name: '学员管理',
    path: '/stu',
    icon: 'team',
    routes: [
      { name: '学员列表', path: '/stu/list', component: '@/pages/stu/list' },
      { name: '学员录入', path: '/stu/pub', component: '@/pages/stu/pub' },
    ],
  },
  {
    name: '分类管理',
    path: '/cate',
    icon: 'bars',
    routes: [
      { name: '分类列表', path: '/cate/list', component: '@/pages/cate/list' },
      { name: '分类录入', path: '/cate/pub', component: '@/pages/cate/pub' },
    ],
  },
  {
    name: '轮播管理',
    path: '/banner',
    icon: 'fileImage',
    routes: [
      {
        name: '轮播列表',
        path: '/banner/list',
        component: '@/pages/banner/list',
      },
      {
        name: '轮播录入',
        path: '/banner/pub',
        component: '@/pages/banner/pub',
      },
    ],
  },
  {
    name: '商品管理',
    path: '/goods',
    icon: 'shopping',
    routes: [
      {
        name: '商品列表',
        path: '/goods/list',
        component: '@/pages/goods/list',
      },
      {
        name: '商品录入',
        path: '/goods/pub',
        component: '@/pages/goods/pub',
      },
    ],
  },
];
