<template>
  <icon :type="type" :class="classExt"></icon>
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
    },
    classExt: {
      type: String,
      default: '',
    }
  }
};
</script>
