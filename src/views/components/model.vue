<template>
  <div>
    <a-modal :visible="show" title="Basic Modal" @ok="handle" @cancel="handle">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    visible(newValue) {
      this.show = newValue;
    }
  },
  methods: {
    handle() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss" scoped></style>
