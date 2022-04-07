<template>
  <i class="iconfont" :class="`${classFontFamily} ${icon}`" @click="onClick">
    <slot></slot>
  </i>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Iconfont',
  props: {
    icon: {
      type: String,
      default: ''
    },
    fontFamily: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, context) {
    const classFontFamily = computed(() => {
      if (props.fontFamily) {
        return props.fontFamily
      } else {
        if (props.icon.startsWith('icon-common-')) {
          return 'iconfont-common'
        } else {
          return 'iconfont-synergia'
        }
      }
    })

    const onClick = (e: MouseEvent) => {
      context.emit('click', e)
    }

    return {
      classFontFamily,
      onClick
    }
  }
})
</script>
