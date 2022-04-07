<template>
  <a-layout style="min-height: 100vh">
    <layout-header />
    <a-layout>
      <layout-side />
      <a-layout>
        <a-layout-content style="margin: 0 16px">
          <layout-bread />
          <div class="layout-content">
            <router-view></router-view>
          </div>
        </a-layout-content>
        <layout-footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import layoutHeader from './components/header.vue'
import layoutSide from './components/sidebar.vue'
import layoutFooter from './components/footer.vue'
import layoutBread from './components/bread.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppLayout',
  components: {
    layoutHeader,
    layoutSide,
    layoutFooter,
    layoutBread
  }
})
</script>
<style lang="less" scoped>
.layout-content {
  padding: 24px;
  min-height: 360px;
  background: #fff;
}
</style>
