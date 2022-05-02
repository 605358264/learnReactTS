/* 慕课网首页 */
import React, { Component } from "react";
import Account from './components/account'
import HeaderNav from './components/headerNav'
import Chart from './components/chart'
import IndexBanner from './components/indexBanner'
import PromotionCard from './components/promotionCard'
import ProductionCard from './components/productionCard'
import ProductNews from './components/productNews'
import './index.less'
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1 className="header"> 慕课营销平台首页的布局与组件设计</h1>
          <div className="wrapperContent">
            <div className="headerNav"><HeaderNav></HeaderNav></div>
            <div className="wrapper">
              <div className="chart"><Chart></Chart></div>
              <div className="account"><Account></Account></div>
              <div className="indexBanner"><IndexBanner></IndexBanner></div>
              <div className="promotionCard"><PromotionCard></PromotionCard></div>
              <div className="productionCard"><ProductionCard></ProductionCard></div>
              <div className="productNews"><ProductNews></ProductNews></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}