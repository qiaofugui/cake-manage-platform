import Mock from 'mockjs';

// 学员相关接口
export default {
  'GET /classes/stu': Mock.mock({
    code: 200,
    msg: 'ok',
    'data|100': [
      {
        id: '@guid',
        name: '@cname',
        score: '@integer(50, 100)',
        city: '@city(true)',
        time: '@date',
      },
    ],
  }),
};
