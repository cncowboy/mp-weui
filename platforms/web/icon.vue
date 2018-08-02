<template>
  <icon :type="type"></icon>
</template>

<script>
import { Icon } from 'vux'

export default {
  data() {
    return {
    };
  },
  components: {
    Icon
  },
  name: 'MpIcon',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: Number,
      default: 23,
    }
  }
};
</script>
