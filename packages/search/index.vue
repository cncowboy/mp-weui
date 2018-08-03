<template>
  <div class="weui-search-bar">
    <div class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <icon
          class="weui-icon-search_in-box"
          type="search"
          size="14"
        />
        <input
          @confirm="$emit('on-submit', currentValue); focus = false"
          class="weui-search-bar__input"
          :confirm-type="confirmType"
          :placeholder="placeholder"
          v-model="currentValue"
          :focus="focus"
          type="text"
        />
        <div
          @click="onClear"
          class="weui-icon-clear"
          v-if="!!currentValue"
        >
          <icon
            type="clear"
            size="14"
          />
        </div>
      </div>
      <label
        class="weui-search-bar__label"
        @click="visible = true; focus = true"
        v-if="!visible"
      >
        <icon
          class="weui-icon-search"
          type="search"
          size="14"
        />
        <div
          class="weui-search-bar__text"
          v-text="placeholder"
        />
      </label>
    </div>
    <div
      @click="onCancel"
      class="weui-search-bar__cancel-btn"
      v-text="cancelLabel"
      v-if="visible"
    />
  </div>
</template>

<script>
export default {
  name: 'MpSearch',
  props: {
    confirmType: {
      type: String,
      default: 'done',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    cancelLabel: {
      type: String,
      default: '取消',
    },
    defaultValue: String,
  },
  data() {
    return {
      currentValue: this.defaultValue,
      visible: false,
      focus: false,
    };
  },
  methods: {
    onCancel() {
      this.currentValue = '';
      this.visible = false;
      this.$emit('on-cancel');
    },
    onClear() {
      this.currentValue = '';
      this.$emit('on-clear');
    },
  },
  watch: {
    currentValue(value) {
      this.$emit('on-input', value);
      this.$emit('on-change', value);
    },
    value(value) {
      this.currentValue = value;
    },
  },
};
</script>
