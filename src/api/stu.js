import { request } from 'umi';

export const stuGet = () => {
  return request('/classes/stu', {
    method: 'GET',
  });
};

// 删除
export const stuDel = (id) => {
  return request('/classes/stu', {
    method: 'DELETE',
    params: {
      id,
    },
  });
};
