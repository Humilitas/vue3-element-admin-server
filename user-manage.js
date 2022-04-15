module.exports = function (app) {
  // user manage
  app.get('/user-manage/list', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: {
        list: [
          {
            role: [
              {
                id: '1',
                title: '超级管理员'
              }
            ],
            _id: '612710a0ec87aa543c9c341d',
            id: '0',
            openTime: '1433088000000',
            username: 'super-admin',
            mobile: '188xxxx0001',
            avatar:
              'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png'
          },
          {
            role: [
              {
                id: '2',
                title: '管理员'
              }
            ],
            _id: '612710a0ec87aa543c9c341e',
            id: '1',
            username: 'admin',
            openTime: '1559318400000',
            mobile: '188xxxx0002',
            avatar:
              'https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg'
          }
        ],
        total: 7,
        page: '1',
        size: '2'
      },
      message: 'success'
    })
  })
  app.get('/user-manage/all-list', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: {
        list: [
          {
            role: [
              {
                id: '1',
                title: '超级管理员'
              }
            ],
            _id: '612710a0ec87aa543c9c341d',
            id: '0',
            openTime: '1433088000000',
            username: 'super-admin',
            mobile: '188xxxx0001',
            avatar:
              'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png'
          },
          {
            role: [
              {
                id: '2',
                title: '管理员'
              }
            ],
            _id: '612710a0ec87aa543c9c341e',
            id: '1',
            username: 'admin',
            openTime: '1559318400000',
            mobile: '188xxxx0002',
            avatar:
              'https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg'
          }
        ],
        total: 7,
        page: '1',
        size: '2'
      },
      message: 'success'
    })
  })
  app.get('/user-manage/detail/:id', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: {
        role: [
          {
            id: '1',
            title: '超级管理员'
          }
        ],
        remark: ['超级管理员', 'BOSS'],
        experience: [
          {
            startTime: '1538323200000',
            endTime: '1551369600000',
            title: '慕课网',
            desc: '混合开发京东商城'
          },
          {
            startTime: '1614528000000',
            endTime: '1625068800000',
            title: '慕课网',
            desc: 'uni-app 开发企业级小程序'
          }
        ],
        _id: '612710a0ec87aa543c9c341d',
        id: '0',
        openTime: '1433088000000',
        username: 'super-admin',
        title: '超级管理员',
        mobile: '188xxxx0001',
        avatar:
          'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
        gender: '男',
        nationality: '汉',
        address: '北京市朝阳区xx大道 11xx0 号 3 层',
        major: '在线职业教育平台',
        glory: '国内领先的线上 IT 教育品牌'
      },
      message: 'success'
    })
  })
  app.post('/user-manage/batch/import', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: null,
      message: '批量导入员工成功'
    })
  })
  app.get('/user-manage/role/:userId', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: {
        role: [
          {
            id: '2',
            title: '管理员'
          }
        ],
        _id: '6124eacc0dafe231304546be'
      },
      message: 'success'
    })
  })
  app.get('/user-manage/update-role/:userId', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: null,
      message: '更新成功'
    })
  })
  app.get('/user-manage/detele/:id', (req, res) => {
    res.send({
      success: true,
      code: 200,
      data: null,
      message: '删除成功！'
    })
  })
}
