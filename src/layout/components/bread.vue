<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item v-for="item in breads" :key="item">{{ item }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const breads = route.matched.map(_ => _.meta.title)
</script>
