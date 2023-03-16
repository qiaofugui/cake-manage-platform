export default {
  namespace: 'count', // 命名空间，用于区分不同的模块
  state: 0, // 跨组件共享的数据
  reducers: {
    // 处理同步操作
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
    incrementStep(state, action) {
      return state + action.payload;
    },
    decrementStep(state, action) {
      return state - action.payload;
    },
  },
  effects: {
    // 处理异步操作
    *incrementAsync(action, { put, call }) {
      yield call(delay, 2000); // 调用异步方法
      yield put({
        // 触发 reducers
        type: 'increment',
      });
    },
    *decrementAsync(action, { put, call }) {
      yield call(delay, 1000);
      yield put({
        type: 'decrement',
      });
    },
  },
};

const delay = (ms) => {
  // 模拟异步请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('delay');
      resolve();
    }, ms);
  });
};
