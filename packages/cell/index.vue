<template>
  <a
    :class="['weui-cell', {'weui-cell_access': !!link, 'weui-cell_link': isLink}]"
    :hover-class="(!isLink && !!link) ? 'weui-cell_active' : 'none'"
    @click="$emit('click', $event)"
    :link="link"
  >
    <div class="weui-cell_hd">
      <!-- <slot name="icon"> -->
      <img
        class="weui-cell_icon"
        :src="icon"
        v-if="icon"
      />
      <!-- </slot> -->
    </div>
    <div class="weui-cell__bd">
      <!-- <slot> -->
      <span v-text="label" />
      <!-- </slot> -->
    </div>
    <div :class="['weui-cell__ft', {'weui-cell__ft_in-access': !!link}]">
      <!-- <slot name="title"> -->
      <span v-text="title" />
      <!-- </slot> -->
    </div>
  </a>
</template>

<script>
export default {
  name: 'MpCell',
  props: {
    label: String,
    icon: String,
    'has-arrow': Boolean,
    title: String,
    link: String,
    isLink: Boolean,
  },
};
</script>

<style>
.weui-cell_icon {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>


