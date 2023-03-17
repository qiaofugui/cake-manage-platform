import { request } from 'umi';

// 获取分类
export const cateGet = () => {
  return request('/classes/cakeCate', {
    method: 'Get',
  });
};

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

// 新增商品
export const goodsAdd = (goodsObj) => {
  return request('/classes/cakeGoods', {
    method: 'POST',
    data: goodsObj,
  });
};

// 商品转存
export const goodsExchange = (cakeList, values) => {
  let batchObj = { requests: [] };
  cakeList.forEach((item) => {
    batchObj.requests.push({
      method: 'POST',
      path: '/1.1/classes/cakeGoods',
      body: { ...item },
    });
  });
  return request('/batch', {
    method: 'POST',
    data: batchObj,
  });
};

// 配送范围
export const areaAdd = (areaObj) => {
  return request('/classes/cakeArea', {
    method: 'POST',
    data: areaObj,
  });
};
export const areaGet = (city) => {
  return request(`/classes/cakeArea?where={"city":"${city}"}`, {
    method: 'GET',
  });
};
export const areaUpdate = (objectId, areaObj) => {
  return request(`/classes/cakeArea/${objectId}`, {
    method: 'PUT',
    data: areaObj,
  });
};
