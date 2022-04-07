<template>
  <div class="error-500">
    <img :src="errImage" />
    <p class="tips">服务器内部错误</p>
    <p>您查找的资源存在问题，因而无法显示</p>
    <p class="btns">
      <a href="javascript:;" @click="handleBackHome"><Iconfont icon="icon-common-home-o"></Iconfont>返回主页</a>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import errImage from '@/assets/images/500-img.png'

const router = useRouter()
const handleBackHome = () => {
  router.push('/')
}
</script>
<style lang="less" scoped>
.error-500 {
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
