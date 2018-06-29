import { postAxios } from '../../util/util'

/**
 * 统一处理状态码错误，和请求失败
 * @param url api地址
 * @param params 传参
 * @param dispatch 触发action
 * @param sucFn 状态码正确的回调
 */
export function postHandle (url, params, dispatch, sucFn) {
  return postAxios(url, params, (res) => {
      const {code, data, msg} = res.data
      if ('000' === code) {
        // 处理状态码正确
        sucFn(data)
      } else {
        // 处理状态码错误
        console.log(msg)
        // dispatch({type: 'code_error', msg: '错误'})
      }
    },
    (fail) => {
      // 处理失败
      console.log(fail)
    })
}
