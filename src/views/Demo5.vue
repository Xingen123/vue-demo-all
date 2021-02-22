<template>
  <div class="demo5">
    <div class="color-header">
      <Icon :color="selected" style="width: 200px;margin:0 auto;">
        当前选中
      </Icon>
    </div>
    <grid :center="false" :draggable="true" class="grid-box" :sortable="true" :items="colors" :height="80" :width="80" @change="change" @remove="remove" @click="click" @sort="sort">
      <template slot="cell" slot-scope="props">
        <Icon :color="props.item" :index="props.index" :with-button="true" @remove="props.remove()" />
      </template>
    </grid>
  </div>
</template>

<script>
import Icon from './components/Icon.vue'
import { generateRGBColors } from '../utils/index'
export default {
  name: 'Demo5',
  components: {
    Icon
  },
  data () {
    const colors = generateRGBColors(20)
    return {
      colors,
      selected: null
    }
  },
  methods: {
    click ({ items, index }) {
      const value = items.find(v => v.index === index)
      this.selected = value.item
      console.log(this.selected)
    },
    change (event) {
      console.log('change', event)
    },
    remove (event) {
      console.log('remove', event)
    },
    sort (event) {
      console.log('sort', event)
    }
  }
}
</script>

<style >
.demo5 {
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.grid-box {
  display: flex;
  flex-wrap: wrap;
}
.color-header {
  position: relative;
  padding: 10px 0;
  box-sizing: border-box;
}
</style>
