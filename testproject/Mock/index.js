// 引入mockjs
var Mock = require('mockjs');
 
module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'list|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        //随机生成5-10个字符的标题
        title: '@ctitle(5,10)',
        //随机名字
        autor: '@cname'
      }
    ]
  });
  // 返回的data会作为json-server的数据
  return data;
};