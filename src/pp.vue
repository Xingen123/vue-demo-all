<template>
  <div style="width: 100%;text-align: center;">
    <a-divider>Demo合集</a-divider>
    <a-tabs
      v-model="active"
      default-active-key="1"
      tab-position="left"
      @prevClick="callback"
      @nextClick="callback"
      @change="changeTabs"
    >
      <a-tab-pane
        v-for="i in 30"
        :key="`/demo${i}`"
        :tab="`demo-${i}`"
      ></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: '/',
      active: 'demo1'
    };
  },
  methods: {
    changeTabs(val) {
      console.log(val);
      this.$router.push(val);
    },
    callback(val) {
      console.log(val);
    }
  }
};
</script>
