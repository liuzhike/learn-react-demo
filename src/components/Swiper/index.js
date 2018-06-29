/** 2018/6/28
*说明: 轮播图组件 使用 swiper 中文官网 http://www.swiper.com.cn/
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import './index.scss' // 自定义样式
window.Swiper = Swiper

class SimpleSlider extends Component {
  componentDidMount () {
    // 初始化轮播图配置
    new window.Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      observer: true,
      lazy: {
        loadPrevNext: true,
      },
      loop : true,
      resistanceRatio: 0
    })
  }

  render () {
    let {slider} = this.props
    return (
      <div className="slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/*图片*/}
            {slider.map(item =>
              <div key={item.id} className="swiper-slide" style={{backgroundImage: 'url(' + item.imgUrl + ')'}}>
                <Link to={`/detail/${item.id}`} key={`slider-${item.id}`}>
                  <div className="swiper-mask"></div>
                  <h1 className="slider-title">{item.title}</h1>
                </Link>
              </div>
            )}
          </div>
          {/* 页码 */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default SimpleSlider