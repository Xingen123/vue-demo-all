export default [
  {
    path: '/demo1',
    name: 'demo1',
    title: '多功能弹窗',
    component: () => import('../views/Demo1.vue'),
  },
  {
    path: '/demo2',
    name: 'demo2',
    title: 'node连接mysql',
    component: () => import('../views/Demo2.vue'),
  },
  {
    path: '/demo3',
    name: 'demo3',
    title: '强大数据表插件',
    component: () => import('../views/Demo3.vue'),
  },
  {
    path: '/demo4',
    name: 'demo4',
    title: '六位验证码',
    component: () => import('../views/Demo4.vue'),
  },
  {
    path: '/demo5',
    name: 'demo5',
    title: '平滑拖拽排序',
    component: () => import('../views/Demo5.vue'),
  },
  {
    path: '/demo6',
    name: 'demo6',
    title: '代码显示复制',
    component: () => import('../views/Demo6.vue'),
  },
  {
    path: '/demo7',
    name: 'demo7',
    title: '裁剪头像',
    component: () => import('../views/Demo7.vue'),
  },
  {
    path: '/demo8',
    name: 'demo8',
    title: '切片视频播放',
    component: () => import('../views/Demo8.vue'),
  },
];
