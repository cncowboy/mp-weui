<template>
  <x-switch :title="title" @on-change="onChange" :disabled="disabled" :value="checked" />
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
      title: {
        type: String,
        default: ''
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
