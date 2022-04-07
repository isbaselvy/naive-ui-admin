<template>
  <div class="authcallck-page">
    <PageLoading class="page-loading"></PageLoading>
  </div>
</template>
<script lang="ts" setup>
import { initOIDC } from '@/utils/login'
import PageLoading from '@/components/PageLoading/index.vue'
import storageFactory from '@/utils/storage/storageFactory'
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { onMounted } from 'vue'
const router = useRouter()

onMounted(() => {
  try {
    new window.Oidc.UserManager({
      authority: import.meta.env.VUE_APP_OIDC_AUTHORITY,
      response_mode: 'query',
      userStore: new window.Oidc.WebStorageStateStore({
        store: window.localStorage
      }),
      stateStore: new window.Oidc.WebStorageStateStore({
        store: storageFactory.getStorage()
      }),
      metadata: {
        metadataUrl: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/well-known/openid-configuration`,
        issuer: import.meta.env.VUE_APP_OIDC_AUTHORITY,
        jwks_uri: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/.well-known/openid-configuration/jwks`,
        authorization_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/authorize`,
        token_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/token`,
        userinfo_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/userinfo`,
        end_session_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/endsession`,
        check_session_iframe: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/checksession`,
        revocation_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/revocation`,
        introspection_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/introspect`,
        device_authorization_endpoint: `${import.meta.env.VUE_APP_OIDC_AUTHORITY}/connect/deviceauthorization`
      },
      clockSkew: 60 * 60 * 24 * 30 // 客户端时间与服务器时间偏差
    })
      .signinRedirectCallback()
      .then(() => {
        initOIDC()
        router.push(Cookies.get('redirectUrl') || '/')
      })
      .catch((e: Error) => {
        console.log(e)
        if (e.message.includes('iat is in the future:') || e.message.includes('nbf is in the future:') || e.message.includes('exp is in the past:')) {
          message.error('您的电脑日期设置不正确，请调整后关闭浏览器重新访问')
        } else {
          window.location.href = import.meta.env.VUE_APP_CUSTOMER_URL as string
        }
      })
  } catch (e: any) {
    if (e.message.includes('iat is in the future:') || e.message.includes('nbf is in the future:') || e.message.includes('exp is in the past:')) {
      message.error('您的电脑日期设置不正确，请调整后关闭浏览器重新访问')
    } else {
      window.location.href = import.meta.env.VUE_APP_CUSTOMER_URL as string
    }
  }
})
</script>
<style lang="less">
.authcallck-page {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  .page-loading {
    margin: 0 auto;
    display: block;
    width: 180px;
  }
  .info {
    margin-top: 20px;
    color: #666;
  }
}
</style>
