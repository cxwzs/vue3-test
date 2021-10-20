<template>
  <div class="draggable">
      <ul>
          <Draggable :list="draggableList" item-key="id" group="people" :force-fallback="true" animation="300">
              <template #item="{ element }">
                <li>拖拽 {{element.name}}</li>
              </template>
          </Draggable>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Draggable from  'vuedraggable'
const list = [
    { people: 'cn', id: 1, name: 'www.itxst.com' },
    { people: 'cn', id: 2, name: 'www.baidu.com' },
    { people: 'cn', id: 3, name: 'www.taobao.com' },
    { people: 'us', id: 4, name: 'www.google.com' }
]
export default defineComponent({
  name: 'draggable',
  components: {
      Draggable
  },
  setup () {

      const draggableList = ref(list)

      return {
          draggableList
      }
  }  
})
</script>

<style lang="less" scoped>
    .draggable {
        width: 100%;

        > ul {
            width: 100%;
            padding: 0;
            list-style: none;

            li {
                width: 100%;
                padding: 10px;
                border-radius: 8px;
                background: #eee;
                margin: 10px 0;
                cursor: move;
            }
        }
    }
</style>