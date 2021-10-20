<template>
    <div class="index">
        <Layout>
            <Header class="header">demo header</Header>
            <Layout class="center">
                <!-- 左侧菜单 -->
                <Sider class="left-menu">
                    <LeftMenu :options-data="menuList"></LeftMenu>
                </Sider>
                <!-- 右侧内容 -->
                <Content class="right-content">
                    <div class="right-content-box">
                        <router-view></router-view>
                    </div>
                </Content>
            </Layout>
            <Footer class="footer">demo footer</Footer>
        </Layout>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Layout } from 'ant-design-vue'

import LeftMenu from '/@/components/LeftMenu.vue'

const menuList = [
    {
        text: '拖拽模块',
        id: '1',
        path: '/draggable'
    },
    {
       text: 'Echarts模块',
        id: '2' ,
        path: '/echarts'
    }
]

const { Header, Sider, Content, Footer } = Layout

export default defineComponent ({
    name: 'index',
    components: {
        Layout,
        Header,
        Sider,
        Content,
        Footer,
        LeftMenu
    },
    setup () {

        return {
            menuList
        }
    }
})
</script>

<style lang="less" scoped>
    .index {
        width: 100%;

        .center {
            height: 100vh;
            padding: 60px 0;
        }

        .left-menu {
            position: fixed;
            top: 60px;
            left: 0;
            z-index: 998;
            height: 100vh;
            background: #fff;
        }

        .right-content {
            flex: 1;
            padding-left: 200px;

            .right-content-box {
                padding: 10px;
            }
        }

        .header, .footer {
            height: 60px;
            background: #2F2F2F;
            color: #fff;
            line-height: 60px;
            font-size: 24px;
            position: fixed;
            z-index: 999;
            left: 0;
            right: 0;
        }

        .header {
            top: 0;
        }
        
        .footer {
            bottom: 0;
        }
    }
</style>