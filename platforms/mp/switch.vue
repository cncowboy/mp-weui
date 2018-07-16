<template>
  <switch :type="type" @change="onChange" :disabled="disabled" v-model="checked" />
</template>

<script>
  export default {
    name: 'MySwitch',
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
