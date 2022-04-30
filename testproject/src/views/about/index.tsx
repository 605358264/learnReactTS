import React, { Component } from "react";
import './index.less'
import { getCarList } from "../../api/index";
export default class About extends Component {
  getList() {
    getCarList({ page: "1" }).then((res) => console.log(res));
  }
  render() {
    return (
      <div className="about">
        <div className="container">
          <h3 className="center"> About页面</h3>
          <p>欢迎来到关于我们页面！</p>
          {/* 点击事件调用 */}
          <button onClick={this.getList}>获取数据</button>
        </div>
      </div>
    );
  }
}