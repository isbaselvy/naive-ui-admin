<template>
  <div class="error-403">
    <img :src="errImage" />
    <p class="tips">对不起，未经授权，访问被拒绝。</p>
    <p>可能是因为您没有访问的权限</p>
    <p class="btns">
      <a href="javascript:;" @click="handleBackHome">
        <Iconfont icon="icon-common-home-o"></Iconfont>
        返回主页
      </a>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import errImage from '@/assets/images/403-img.png'

const router = useRouter()
const handleBackHome = () => {
  router.push('/')
}
</script>
<style lang="less" scoped>
.error-403 {
  text-align: center;
  color: #7c7e80;
  padding-top: 130px;
  p {
    margin-bottom: 20px;
    font-size: 16px;
    &.tips {
      font-size: 26px;
    }
    &.btns {
      a {
        display: inline-block;
        border-radius: 50px;
        padding: 10px 20px;
        border: 1px solid #ddd;
        font-size: 14px;
        color: #3e3f40;
        margin-right: 15px;
        .iconfont {
          margin-right: 5px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
