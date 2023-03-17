// 动态生成权限数据
export default function (initialState) {
  let {
    userState: { userInfo },
  } = initialState;
  return {
    isRoot: userInfo?.rolecode === 'root', // 只有超级管理员有权访问
    isAdmin: userInfo?.rolecode === 'admin' || userInfo?.rolecode === 'root', // 超级管理员和管理员都有权访问
    isWorker: true,
  };
}
