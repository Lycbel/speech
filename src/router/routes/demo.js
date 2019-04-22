
export default [{
  path: '/',
  component: resolve => require(['@views/MainPage'], resolve),
  // isHideInMenu: true,
  meta: {
    title: '主页面',
    ignoreAuth: true
  },
  children: [
    {
      path: 'speechList',
      isHideInMenu: false,
      meta: {
        title: '演讲管理',
        ignoreAuth: true
      },
      component: resolve => require(['@views/Speech/speechList'], resolve)
    },
    {
      path: 'tutorList',
      meta: {
        title: '导师管理',
        ignoreAuth: true
      },
      component: resolve => require(['@views/Tutor/tutorList'], resolve)
    },
    {
      path: 'notification',
      meta: {
        title: '消息管理',
        ignoreAuth: true
      },
      component: resolve => require(['@views/Message/message'], resolve)
    }
  ]
}]
