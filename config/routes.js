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
];
