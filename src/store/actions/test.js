import {postHandle} from './handle'
import {testApi} from '../../constants/api'
import * as types from '../../constants/ActionType'

export const getTestDataSuccess = (data) => {
  return {
    type: types.GET_TEST_DATA,
    data
  }
}

/**
 * 获取测试数据
 * @param params
 * @param alwaysFn 总是会执行的方法
 * @returns {function(*)}
 */
export function getTestData (params,alwaysFn=()=>{}) {
  return dispatch => {
    postHandle(testApi, params,dispatch, (data)=>{
      dispatch(getTestDataSuccess(data))
    })
    alwaysFn()
  }
}
