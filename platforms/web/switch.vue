<template>
  <x-switch @on-change="onChange" :disabled="disabled" v-model="checked" />
</template>

<script>
  import { XSwitch } from 'vux'
  export default {
    components: {
      XSwitch
    },
    name: 'switch',
    props: {
      'type': {
        type: String,
        default: 'switch' // checkbox
      },
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: String
    },
    computed: {
    },
    methods: {
      onChange (val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  }
</script>
