<template>
  <div class="box" :id="data.id"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from 'vue'
import drawEcharts from '../config'

export default defineComponent({
  name: 'EchartsItem',
  props: {
      data: {
          type: Object,
          default: {}
      }
  },
  setup (props) {

      const { data } = toRefs(props)

      onMounted(() => {
          drawEcharts(data.value.id, data.value.data)
      })

      return {
          data
      }
  }  
})
</script>

<style lang="less" scoped>
    .box {
        width: 100%;
        height: 100%;
    }
</style>