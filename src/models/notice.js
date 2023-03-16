import { produce } from 'immer';

export default {
  namespace: 'notice', // 命名空间，用于区分不同的模块
  state: {
    // 跨组件共享的数据
    list: [
      {
        picture:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        name: 'name1',
        title: '标题1',
        description: '描述1',
        content: '内容1',
        read: false,
      },
      {
        picture:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        name: 'name2',
        title: '标题2',
        description: '描述2',
        content: '内容2',
        read: true,
      },
      {
        picture:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        name: 'name3',
        title: '标题3',
        description: '描述3',
        content: '内容3',
        read: false,
      },
    ],
  },
  reducers: {
    readOk(state, action) {
      let newState = produce(state, (draft) => {
        // draft 是被处理的模板对象的副本
        draft.list[action.payload].read = true;
      });
      return newState;
    },
  },
  effects: {},
};
