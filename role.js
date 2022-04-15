module.exports = function (app) {
  // role
  app.get('/role/list', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: [
        {
          id: '1',
          title: '超级管理员',
          describe: '唯一账号，可以操作系统所有功能'
        },
        {
          id: '2',
          title: '管理员',
          describe: '由超管指定，可以为多个，协助超管管理系统'
        },
        {
          id: '3',
          title: '人事经理',
          describe: '主管人事相关业务'
        },
        {
          id: '4',
          title: '销售经理',
          describe: '主管销售相关业务'
        },
        {
          id: '5',
          title: '保安队长',
          describe: '主管安保相关业务'
        },
        {
          id: '6',
          title: '员工',
          describe: '普通员工'
        }
      ],
      message: '获取资料成功'
    })
  })
  app.get('/role/permission/:roleId', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: ['1', '1-1', '1-2', '1-3', '2', '2-1', '3', '4', '5'],
      message: '获取资料成功'
    })
  })
  app.post('/role/distribute-permission', (req, res) => {
    res.send({ success: true, code: 200, data: null, message: '更新成功' })
  })
}
