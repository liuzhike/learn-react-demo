// 查询运营商列表
let pageSize = 20
let startId = 1

function itemFn () {
  let items = []
  for (let i = 0; i < 50; i++) {
    let obj = {
      id: startId++,
      mobile: 13555555555,
      schoolName: '智慧树幼儿园学校名称_' + Math.floor(Math.random() * startId),
      schoolId: 4388 + i,
      agencyId: 1,
      agencyName: '北京移动',
      agencyGroup: '集团',
      comboId: 2,
      comboCode: 'abcasdf' + i,
      comboAppName: '智慧树app显示名称',
      comboPrice: 10.1 + i,
      comboServiceName: '园所直播,定向流量,学堂精选,联通会员,服务类型',
      comboStatus: 0,
      serviceStartTime: (new Date().getTime() + parseInt(startId + '000')),
      serviceEndTime: (new Date().getTime() + parseInt(startId + 1 + '000')),
      comboName: '北京联通',
      createTime: (new Date().getTime() + parseInt(startId + 2 + '000')),
      updateTime: new Date().getTime(),
      status: 0
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
    data: {
      curPage: curPage,
      pageSize: 20,
      pageCount: pageCount,
      count: 440,
      items: itemFn()
    },
    msg: 'msg信息_' + Math.floor(Math.random() * 100)
  }
  return data
}

module.exports = info
