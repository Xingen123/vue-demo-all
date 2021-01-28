<template>
  <div>
    <h1>封装双向绑定弹窗</h1>
    <a-button @click="visible = !visible">open</a-button>
    <Model :visible.sync="visible"></Model>
  </div>
</template>

<script>
import Model from './components/model';
export default {
  components: {
    Model
  },
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
