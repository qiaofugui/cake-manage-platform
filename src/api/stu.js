import { request } from 'umi';

export const stuGet = () => {
  return request('/classes/stu', {
    method: 'GET',
  });
};

// 删除
export const stuDel = (id) => {
  return request(`/classes/stu/${id}`, {
    method: 'DELETE',
  });
};

// 增加
export const stuAdd = (data) => {
  return request('/classes/stu', {
    method: 'POST',
    data,
  });
};

// 更新
export const stuUpdate = (objectId, data) => {
  return request(`/classes/stu/${objectId}`, {
    method: 'PUT',
    data,
  });
};
