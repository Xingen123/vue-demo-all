<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['demo3']" @click="onChangeMenu">
        <a-menu-item v-for="i in routers" :key="i.name">
          <a-icon type="smile" theme="outlined" />
          <span>{{ i.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;display:flex;" class="header">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
        <a-divider>常用demo</a-divider>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import routers from '../src/router/routers';
export default {
  data () {
    return {
      routers,
      collapsed: false,
      activeRouter: []
    };
  },
  mounted () {
    this.activeRouter = ['demo3']
  },
  methods: {
    onChangeMenu ({ key }) {
      this.$router.push(key);
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.ant-layout-sider {
  min-height: 100vh;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  text-align: center;
  margin: 16px;
}
#components-layout-demo-custom-trigger .logo img {
  width: 20%;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.content {
  background: #fff;
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.video-player {
  width: 800px;
  height: 500px;
}
</style>
