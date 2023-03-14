import { request } from 'umi';

// 新值分类
export const cateAdd = (cateObj) => {
  return request('/classes/cakeCate', {
    method: 'POST',
    data: cateObj,
  });
};

// 新增轮播
export const bannerAdd = (bannerObj) => {
  return request('/classes/cakeBanner', {
    method: 'POST',
    data: bannerObj,
  });
};

// 获取轮播
export const bannerGet = () => {
  return request('/classes/cakeBanner', {
    method: 'GET',
  });
};

// 更新轮播
export const bannerUpdate = (objectId, bannerObj) => {
  return request(`/classes/cakeBanner/${objectId}`, {
    method: 'PUT',
    data: bannerObj,
  });
};
