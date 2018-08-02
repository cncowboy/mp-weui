<template>
  <icon :type="type" :size="size"></icon>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  components: {
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
