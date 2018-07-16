<template>
  <div
    class="weui-cell weui-cell_switch"
    v-if="isInCell"
  >
    <div class="weui-cell__bd">{{title}}</div>
    <div class="weui-cell__ft">
      <my-switch
        @change="$emit('input', Boolean($event.target.value))"
        :color="disabledColor"
        :disabled="disabled"
        :checked="value"
      />
    </div>
  </div>

  <my-switch
    @change="$emit('input', Boolean($event.target.value))"
    :color="disabledColor"
    :disabled="disabled"
    :checked="value"
    v-else
  />
</template>

<script>
import MySwitch from 'mp-weui-platform/switch'

export default {
  components: {
      MySwitch
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
  computed: {
    disabledColor() {
      return this.disabled ? 'rgba(0, 0, 0, 0.1)' : '';
    },
  },
};
</script>
