// 所有的 reducer 模块在此暴露出去
import { combineReducers } from 'redux'
import test from './modules/test'

const reducerData = combineReducers({
  test
})
export default reducerData