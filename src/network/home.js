import {request} from "network/request";

//关于 home页面的一切网络请求都封装到这里
//封装为若干个函数导出
//这样方便管理
export function getHomeMultidata() {

  return request({
    url:'/home/multidata'
  })

}
