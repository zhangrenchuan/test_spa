// 在这里定义所有和user相关的路由配置
const USER = [{
  path: '/list',
  name: 'list',
  component(resolve) {
    // TODO 路由懒加载
    require(['../../pages/user/list/list.vue'], resolve);
  },
  meta: { scrollToTop: true },
}, {
  path: '/modify',
  name: 'modify',
  component(resolve) {
    require(['../../pages/user/modify/modify.vue'], resolve);
  },
  meta: { scrollToTop: true },
},
];

module.exports = USER;
