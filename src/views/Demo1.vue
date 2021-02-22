<template>
  <div>
    <h1>封装双向绑定弹窗</h1>
    <a-button @click="visible = !visible">open</a-button>
    <a-divider>更多弹窗功能（拖拽，放大。。。）相关</a-divider>
    <a href="https://euvl.github.io/vue-js-modal/Installation.html" target="view_window">点击查看</a>
    <Model :visible.sync="visible"></Model>
  </div>
</template>

<script>
import Model from './components/model';
export default {
  components: {
    Model
  },
  data () {
    return {
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
