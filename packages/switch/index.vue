<template>
  <div
    class="weui-cell weui-cell_switch"
    v-if="isInCell"
  >
    <div class="weui-cell__bd">{{title}}</div>
    <div class="weui-cell__ft">
      <switch
        @change="onChange"
        :color="disabledColor"
        :disabled="disabled"
        :checked="value"
      />
    </div>
  </div>

  <switch
    @change="onChange"
    :color="disabledColor"
    :disabled="disabled"
    :checked="value"
    v-else
  />
</template>

<script>

export default {
  components: {
  },
  name: 'MpSwitch',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    isInCell: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChange (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  computed: {
    disabledColor() {
      return this.disabled ? 'rgba(0, 0, 0, 0.1)' : '';
    }
  },
};
</script>
