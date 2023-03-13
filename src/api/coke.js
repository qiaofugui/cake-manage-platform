import { request } from 'umi';

// 新值分类
export const cateAdd = (cateObj) => {
  return request('/classes/cakeCate', {
    method: 'POST',
    data: cateObj,
  });
};

// 新值轮播
export const bannerAdd = (bannerObj) => {
  return request('/classes/cakeBanner', {
    method: 'POST',
    data: bannerObj,
  });
};
