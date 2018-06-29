// 查询运营商列表
let pageSize = 20
let startId = 1

function itemFn () {
  let items = []
  const num = Math.floor(Math.random() * 12)
  for (let i = 0; i < 10; i++) {
    let obj = {
      "categoryName": "分类_"+num,
      "id": 1+i,
      "orderNum": 1+i,
      "type": 11
    }
    items.push(obj)
  }
  return items
}

function info () {
  let curPage = Math.floor(Math.random() * 12)
  let count = Math.floor(Math.random() * 2000)
  let pageCount = count % pageSize > 0 ? (count / pageSize + 1) : count / pageSize
  let data = {
    code: '000',
    data: itemFn(),
    msg: 'msg信息_' + Math.floor(Math.random() * 100)
  }
  return data
}

module.exports = info
