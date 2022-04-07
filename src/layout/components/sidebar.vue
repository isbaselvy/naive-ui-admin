<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo">
      <IconFont icon="icon-synergia-haichuan" />
      <span v-show="!collapsed">微链协同平台</span>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" class="layout-menu">
      <template v-for="item in menus" :key="item.name">
        <a-sub-menu v-if="item.children?.length && item.meta?.isMenu" :key="item.name">
          <template #title>
            <span class="anticon">
              <IconFont :icon="item.meta.icon || 'icon-synergia-dot'" />
            </span>
            <span>
              <span>{{ item.meta?.title }}</span>
            </span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.name">
            <a-menu-item v-if="subItem.meta?.isMenu" :key="subItem.name" @click="handleLink(subItem)">
              <span class="anticon">
                <IconFont :icon="item.meta.icon || 'icon-synergia-dot'" />
              </span>
              {{ subItem.meta?.title }}
            </a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item v-if="!item.children?.length && item.meta?.isMenu" :key="item.name" @click="handleLink(item)">
          <span class="anticon">
            <IconFont :icon="item.meta.icon || 'icon-synergia-dot'" />
          </span>
          <span>{{ item.meta?.title }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouteRecordRaw, useRouter, useRoute } from 'vue-router'
import { routes } from '@/routers/index'

const router = useRouter()
const route = useRoute()
const menus = ref({ ...routes })
const collapsed = ref(false)
const selectedKeys = ref([route.name])
const openKeys = ref(route.matched.length > 1 ? [route.matched[route.matched.length - 2].name] : [])

const handleLink = (item: RouteRecordRaw) => {
  router.push({
    name: item.name
  })
}
</script>

<style lang="less">
.logo {
  padding: 0 20px;
  height: 46px;
  font-size: 16px;
  color: @primary-color;
  line-height: 46px;
  background: #fff;
  border-bottom: 1px solid #eee;

  .iconfont {
    margin-right: 8px;
    font-size: 20px;
  }
}
.ant-layout-sider-collapsed {
  .logo {
    .iconfont {
      display: block;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>
