export default [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/login',
    layout: false,
    hideInMenu: true,
  },

  { name: '首页', path: '/', component: '@/pages/index', icon: 'home' },
  {
    name: '数据统计',
    path: '/data',
    component: '@/pages/data',
    icon: 'AreaChartOutlined',
    access: 'isRoot',
  },
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
    access: 'isAdmin',
    routes: [
      { name: '分类列表', path: '/cate/list', component: '@/pages/cate/list' },
      {
        name: '分类录入',
        path: '/cate/pub',
        component: '@/pages/cate/pub',
        access: 'isRoot',
      },
    ],
  },
  {
    name: '轮播管理',
    path: '/banner',
    icon: 'fileImage',
    access: 'isAdmin',
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
    access: 'isAdmin',
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
  {
    name: '状态管理',
    path: '/dva',
    icon: 'ThunderboltOutlined',
    routes: [
      {
        name: 'ComponentA',
        path: '/dva/componentA',
        component: '@/pages/testdva/ComponentA',
      },
      {
        name: 'ComponentB',
        path: '/dva/componentB',
        component: '@/pages/testdva/ComponentB',
      },
      {
        name: 'Notice',
        path: '/dva/notice',
        component: '@/pages/testdva/Notice',
      },
    ],
  },
  {
    name: '系统设置',
    path: '/sys',
    icon: 'SettingOutlined',
    access: 'isRoot',
    routes: [
      {
        name: '角色管理',
        path: '/sys/role',
        component: '@/pages/system/RoleManager',
      },
      {
        name: '账号管理',
        path: '/sys/user',
        component: '@/pages/system/UserManager',
      },
    ],
  },
  {
    name: '配送区域',
    path: '/area',
    icon: 'HeatMapOutlined',
    component: '@/pages/area/index',
  },
  {
    name: '404',
    path: '*',
    component: '@/pages/404',
    menuRender: true,
    menuHeaderRender: true,
    hideInMenu: true,
    hideInBreadcrumb: true,
  },
];
