<template>
  <div>
    <H1>Node连接mysql</H1>
    <a-button @click="send">send</a-button>
    <div style="margin:20px" v-for="item in list" :key="item.id">
      <div>
        <a :href="item.url">{{ item.name }}</a>
        <label>来自{{ item.country }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    send() {
      this.$http.get("/api/getValue").then(res => {
        console.log("res", res);
        if (res.data.code === 0) {
          this.list = res.data.data;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
