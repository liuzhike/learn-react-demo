import React, { Component } from 'react'
import {connect} from 'react-redux'
import PartButton from '../../components/PartButton/index'
import Tick from '../../components/Tick/index'
import Swiper from '../../components/Swiper/index'
import {getTestData} from '../../store/actions/test'

class App extends Component {
  constructor(props) {
    super(props);
    this.addNum = this.addNum.bind(this)
    this.reduceNum = this.reduceNum.bind(this)
    this.state = {
      num: 0
    };
  }
  addNum () {
    console.log('父组件addNum_' + this.state.num)
    this.setState((prevState, props) => ({
      num: prevState.num + 1
    }))
    console.log('props_' + this.props)
    const {dispatch} = this.props
    dispatch(getTestData({},()=>{
      console.log('ddddd____')
    }))
    console.log('testData_' + this.props.testData)
  }
  reduceNum () {
    console.log('父组件reduceNum' + this.state.num)
    this.setState((prevState, props) => ({
      num: prevState.num - 1
    }))
  }
  render (){
    const fontStyle = {
      backgroundColor: '#35b78f',
      fontSize: '16px',
      color: '#fff'
    }
    const swiperData = [
      {
        id:1,
        title:'测试标题111111',
        imgUrl: 'https://78.media.tumblr.com/4b8f018686d4d9dea4a5ed73dc0e3e3a/tumblr_p9kh8z678t1sfie3io1_1280.jpg'
      },
      {
        id:2,
        title:'测试标题222222',
        imgUrl: 'https://78.media.tumblr.com/0d4efb40bf27e93b143c3641183874a3/tumblr_p9kh8dsxTS1sfie3io1_1280.jpg'
      },
      {
        id:3,
        title:'测试标题333333',
        imgUrl: 'https://78.media.tumblr.com/7923a01832045d16d37993c9766f3589/tumblr_p9kh7woZ4O1sfie3io1_1280.jpg'
      },
      {
        id:4,
        title:'测试标题44444444',
        imgUrl: 'https://78.media.tumblr.com/58b0b5ba2ba92df43c76a846ef31678b/tumblr_p9kh83QQ9I1sfie3io1_1280.jpg'
      }
    ]
    return (
      <div>
        <Swiper slider={swiperData}></Swiper>
        <Tick></Tick>
        <p>{this.state.num}</p>
        <p>{JSON.stringify(this.props.testData)}</p>
        <PartButton  fontStyle={fontStyle} clickBtn={this.addNum} text="点我++"></PartButton>
        <PartButton  fontStyle={fontStyle} clickBtn={this.reduceNum} text="点我--"></PartButton>
      </div>
    )
  }
}

/**
 * 关于mapStateToProps
 * mapStateToProps是一个函数 这个函数允许我们将 store 中的数据作为 props 绑定到组件上
 * 作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射
 * mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
 * mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象
 * 使用ownProps作为第二个参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染
 * connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新
 * @param state
 * @param ownProps
 * @returns {{getTestData: getTestData}}
 */
const mapStateToProps = (state, ownProps) => ({
  testData:state.test.addAndReduce  // 在index中combineReducers对象对应模块中的方法，也就是reducer中对应的模块
})

/**
 * 关于mapDispatchToProps
 * mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射
 * 也就是说，它定义了哪* 些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
 * 如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数
 * 如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出
 * @param dispatch
 * @param ownProps
 * @returns {{dispatch: *}}
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
})

export default connect (mapStateToProps,mapDispatchToProps)(App)
