import { request } from 'umi';
import axios from 'axios';

// 登录
export const userLogin = (userObj) => {
  return axios('https://u5n6txrb.lc-cn-n1-shared.com/1.1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-LC-Id': 'u5N6tXrBpzSDRjzj4pAF7niP-gzGzoHsz',
      'X-LC-Key': 'p9lTQurOvtTqJUpxlyMyNgqE',
    },
    data: userObj,
  });
};

// 角色列表
export const roleGet = () => {
  return request('/classes/cakeRole', {
    method: 'GET',
  });
};

// 账号分配 携带 role 角色
export const userReg = (userObj) => {
  return request('/users', {
    method: 'POST',
    data: userObj,
  });
};
