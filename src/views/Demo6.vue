<template>
  <div>
    <div ref="buttoncopy">
      <a-button type="primary">
        Primary
      </a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">
        Dashed
      </a-button>
      <a-button type="danger">
        Danger
      </a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary">
          按钮
        </a-button>
      </a-config-provider>
      <a-button type="primary">
        按钮
      </a-button>
      <a-button type="link">
        Link
      </a-button>
    </div>
    <copy-code :code="code"></copy-code>
  </div>
</template>

<script>
import CopyCode from './components/CopyCode'
export default {
  components: {
    CopyCode,
  },
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    this.code = this.$refs.buttoncopy.outerHTML
  },
}
</script>

<style lang="scss" scoped>
</style>
