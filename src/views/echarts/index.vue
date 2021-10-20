<template>
  <div class="box">
      <div class="list">
        <div class="list-item" v-for="item in echartsData" :key="item.id">
          <EchartsItem :data="item"></EchartsItem>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EchartsItem from './components/EchartsIem.vue'

import { echartsData } from './data'

export default defineComponent({
  name: 'echarts',
  components: {
    EchartsItem
  },
  setup () {

      return {
        echartsData
      }
  }  
})
</script>

<style lang="less" scoped>
    .box {
        width: 100%;

        .list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .list-item {
            width: 553px;
            height: 262px;
            padding: 15px;
            background: #FFFFFF;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
            border-radius: 8px;
            margin: 20px;
          }
        }
    }
</style>