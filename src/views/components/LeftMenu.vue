<template>
  <div class="left-menu">
    <Menu v-model:selectedKeys="selectedKeys">
        <Item v-for="item in optionsData" :key="item.id">
            <router-link :to="item.path">
                {{item.text}}
            </router-link>
        </Item>
    </Menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu } from 'ant-design-vue'

const { Item } = Menu

export default defineComponent({
    name: 'LeftMenu',
    components: {
        Menu,
        Item
    },
    props: {
        optionsData: {
            type: Array,
            default: []
        }
    },
    setup () {

        const selectedKeys = ref(['1'])

        return {
            selectedKeys
        }
    }  
})
</script>

<style lang="less" scoped>
    .left-menu {
        width: 200px;
        padding: 20px 0;

        :deep(.ant-menu) {
            background: #fbfbfb;
            border-right: none;
        }

        :deep(.ant-menu-item) {
            height: 60px;
            line-height: 60px;

            > a {
                border-radius: 8px;
            }
        }

        :deep(.ant-menu-item-selected) {
            background: none;
            > a {
                background: rgba(36, 178, 118, 0.1);
                border-radius: 8px;
                color: #24B276;
            }
        }
        
        :deep(.ant-menu-item-active) {
            > a {
                color: #24B276;
            }
        }
    }
</style>