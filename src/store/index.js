import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer/index'

const middleware = [ thunk ];
// createStore 用来生成 store，接收新的函数做参数返回新的store对象
// applyMiddleware 将所有中间件组成一个数组，依次执行， middleware 中间件
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store