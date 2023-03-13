// 初始化 leancloud 的 SDK
import './utils/init-leancloud-sdk';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '⼀个请求已经进⼊后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进⾏新建或修改数据的操作。',
  401: '⽤户没有权限（令牌、⽤户名、密码错误）。',
  403: '⽤户得到授权，但是访问是被禁⽌的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进⾏操作。',
  405: '请求⽅法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建⼀个对象时，发⽣⼀个验证错误。',
  500: '服务器发⽣错误，请检查服务器。',
  502: '⽹关错误。',
  503: '服务不可⽤，服务器暂时过载或维护。',
  504: '⽹关超时。',
};

// 全局请求拦截
const requestInterceptor = (url, options) => {
  return {
    url: 'https://u5n6txrb.lc-cn-n1-shared.com/1.1' + url, // 此处可以添加域名前缀
    options: {
      ...options,
      // 使用 leancloud
      headers: {
        'X-LC-Id': 'u5N6tXrBpzSDRjzj4pAF7niP-gzGzoHsz',
        'X-LC-Key': 'p9lTQurOvtTqJUpxlyMyNgqE',
        'Content-Type': 'application/json',
      },
    },
  };
};
// 全局响应拦截
const responseInterceptor = async (response, options) => {
  let res = await response.json();
  return { data: res.results };
};
// 异常处理
const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    console.log(`请求错误 ${status}: ${url}`);
    // notification.error({
    //   message: `请求错误 ${status}: ${url}`,
    //   description: errorText,
    // });
  }
  if (!response) {
    // notification.error({
    //   description: '您的⽹络发⽣异常，⽆法连接服务器',
    //   message: '⽹络异常',
    // });
  }
  throw error;
};

export const request = {
  timeout: 1000,
  errorConfig: {},
  middlewares: [],
  // 异常处理
  errorHandler,
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
};
