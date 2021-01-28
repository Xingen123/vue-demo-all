<template>
  <div>
    <InputNumbeYzm @complete="complete" />
  </div>
</template>

<script>
import InputNumbeYzm from './components/InputNumbeYzm'
export default {
  components: {
    InputNumbeYzm,
  },
  methods: {
    complete (val) {
      this.$message.success(`发送成功${val.join('')}!`);
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
