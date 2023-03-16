import { request } from 'umi';
import axios from 'axios';

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
