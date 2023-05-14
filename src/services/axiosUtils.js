import axios from 'axios';

import { message } from 'antd';

const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});


function handleResponse(url, response) {
  if (response.status < 500) {
    return response.json();
  } else {
    console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
    return { error: { message: 'Request failed due to server error ' } };
  }
}

function responseStatus(data) {
  switch (data) {
    case 400:
      message.error('错误: 请求参数错误');
      break;
    case 401:
      message.error('错误: 用户无权限');
      break;
    case 403:
      message.error('错误: 请求被禁止');
      break;
    case 404:
      message.error('错误: 请求不存在');
      break;
    case 406:
      message.error('错误: 请求的格式不可得');
      break;
    case 410:
      message.error('错误: 请求的资源被永久删除');
      break;
    case 422:
      message.error('错误: 当创建一个对象时，发生一个验证错误');
      break;
    case 500:
      message.error('错误: 后端发生错误');
      break;
    case 502:
      message.error('错误: 网关错误');
      break;
    case 503:
      message.error('错误: 服务不可用，服务器暂时过载或维护');
      break;
    case 504:
      message.error('错误: 网关超时');
      break;
    default:
      break;
  }
}

export async function get(url, param) {

  return axios({
    method: 'get',
    url: url,
    params: param,
    headers: { 'Access-Control-Allow-Origin':'*','Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8'}
  }).then(response => {
    return response;
  }).catch(error => { 
    error.response !== undefined ? responseStatus(error.response.status) : console.log(`${error}`) 
  });
}

export async function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
    responseType: 'arraybuffer',

  }).then(response => {

   
    return handleResponse(url, response);
    
  }).catch(err => {
    console.error(`Request failed. Url = ${url} . Message = ${err}`);
    return false;
  })
}

