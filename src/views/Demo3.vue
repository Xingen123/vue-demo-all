<template>
  <div class="box">
    <h1>
      <a href="https://xaksis.github.io/vue-good-table/guide/configuration/table-events.html#on-per-page-change" target="view_window">点击查看</a>
      <!-- 内部子组件 -->
      <h1>内部子组件</h1>
      <New />
    </h1>
  </div>
</template>

<script>
export default {
  components: {
    New: {
      methods: {
        // 获取一个随机布尔值 (true/false)
        randomBoolean () {
          return Math.random() >= 0.5
        },
        // 检查数字是否为偶数
        isEven (num) {
          return num % 2 === 0;
        }
      },
      render (h) {
        return h('h1', `获取一个随机布尔值 (true/false):${this.randomBoolean()}检查数字是否为偶数:${this.isEven(1)}`)
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
  h1 {
    margin-top: 50px;
  }
}
</style>
