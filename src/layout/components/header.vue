<template>
  <a-layout-header>
    <div class="header-wrapper">
      <span class="greetting">hi～欢迎来到微链协同平台</span>
      <span class="userinfo">
        您好 {{ userStore.nickName }}，
        <a class="header-button" @click="handleLogout"> 退出</a>
      </span>
    </div>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
import { logOut } from '@/utils/login'

const userStore = useUserStore()

const handleLogout = (): void => {
  logOut()
}
</script>

<style lang="less">
.header-wrapper {
  display: flex;
  .greetting {
    flex: auto;
  }
  .userinfo {
    flex: auto;
    text-align: right;
  }
  .header-button {
    color: #fff;
    &:hover {
      color: #ddd;
    }
  }
}
</style>
