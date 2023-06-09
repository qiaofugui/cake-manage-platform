import Mock from 'mockjs';

let stuList = Mock.mock({
  code: 200,
  msg: '学员列表数据获取成功',
  'results|100': [
    {
      objectId: '@guid',
      name: '@cname',
      score: '@integer(50, 100)',
      city: '@city(true)',
      time: '@date',
    },
  ],
});
// 学员相关接口
export default {
  'GET /classes/stu': stuList,
  'DELETE /classes/stu': (req, res) => {
    const { id } = req.query;
    for (let i = 0; i < stuList.results.length; i++) {
      if (stuList.results[i].id === id) {
        stuList.results.splice(i, 1);
        res.send({
          code: 200,
          msg: '删除成功',
          results: stuList.results,
        });
        return;
      }
    }

    res.send({
      code: 201,
      msg: '删除失败',
    });
  },
};
