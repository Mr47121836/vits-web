import { get, post } from './axiosUtils';
let baseUrl = 'http://8.130.49.170:9012';


export function myfuntion(param){
  let url = baseUrl + "/dataInfo"
  return post(url,param)
}

export function getCountSuccess(param){
  let url = baseUrl + "/indexCount"
  return get(url,param)
}

