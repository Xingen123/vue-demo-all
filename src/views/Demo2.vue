<template>
  <div>
    <H1>Node连接mysql</H1>
    <a-divider>查</a-divider>
    <a-button @click="send">查</a-button>
    <a-divider>增</a-divider>
    <a-button @click="setValue">增</a-button>
    <a-divider>改</a-divider>
    <a-input-search v-model="name" placeholder="name" @search="updateValue">
      <a-button slot="enterButton">
        更新name
      </a-button>
    </a-input-search>
    <a-divider dashed />
    <VueGoodTable :columns="columns" :rows="rows" theme="black-rhino">
      <template slot="table-row" slot-scope="props">
        <a-dropdown v-if="props.column.label == 'action'">
          <a-button v-if="props.column.label == 'action'" @click="e => e.preventDefault()">操作</a-button>
          <a-menu slot="overlay">
            <a-menu-item>
              <a-button v-if="props.column.label == 'action'" type="danger" @click="deleteRow(props.row)">删除</a-button>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>
    </VueGoodTable>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
export default {
  components: {
    VueGoodTable,
  },
  data () {
    return {
      name: '',
      columns: [
        {
          label: 'name',
          field: 'name',
        },
        {
          label: 'country',
          field: 'country',
        },
        {
          label: 'url',
          field: 'url',
        },
        {
          label: 'action',
          field: 'action'
        },
      ],
      rows: [],
    };
  },
  methods: {
    send () {
      this.$http.get('/api/getValue').then(res => {
        console.log('res', res);
        if (res.data.code === 0) {
          this.rows = res.data.data;
        }
      });
    },
    setValue () {
      this.$http.post(`/api/setValue`).then(res => {
        if (res.data.code === 0) {
          this.send()
        }
      });
    },
    deleteRow ({ id }) {
      this.$http.post(`/api/deleteValue`, { id }).then(res => {
        if (res.data.code === 0) {
          this.send()
        }
      });
    },
    updateValue () {
      this.$http.post(`/api/updateValue`, { name: this.name }).then(res => {
        if (res.data.code === 0) {
          this.send()
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
