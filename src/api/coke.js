import { request } from 'umi';

// 新值分类
export const cateAdd = (cateObj) => {
  return request('/classes/cakeCate', {
    method: 'POST',
    data: cateObj,
  });
};
