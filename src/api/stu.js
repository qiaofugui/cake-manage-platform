import { request } from 'umi';

export const getStuList = (params) => {
  return request('/classes/stu', {
    method: 'GET',
    params,
  });
};
