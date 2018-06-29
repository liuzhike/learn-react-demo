import {ADD_NUM, REDUCE_NUM, RESET_NUM, GET_TEST_DATA} from '../../../constants/ActionType'

// 初始化
const initialState = {
  num: 0
}
/**
 *
 * @param state 当前的state
 * @param action dispatch触发action返回的对象
 * @returns {number}
 */
const addAndReduce = (state = initialState.num, action) => {
  console.log('action__' + action.type)
  console.log('action__' + JSON.stringify(action))
  console.log('state__' + state)
  switch (action.type) {
    case ADD_NUM:
     return state + 1
    case REDUCE_NUM:
     return state - 1
    case GET_TEST_DATA:
     return action.data
    default:
      return state
  }
}

const count = (state = initialState, action) => {
  console.log('action_2_' + action.type)
  switch (action.type) {
    case RESET_NUM:
      return initialState
    default:
      return {
        addAndReduce: addAndReduce(state.num, action),
      }
  }
}

export default count