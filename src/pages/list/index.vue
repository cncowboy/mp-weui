<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">List</div>
      <div class="page__desc">列表</div>
    </div>
    <div class="page__bd">
      <!-- <mp-cell-group title="带说明的列表项">
        <mp-cell
          label="标题文字"
          title="说明文字"
        />
      </mp-cell-group> -->

      <div class="weui-cells__title">带说明的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-cell
          label="标题文字"
          title="说明文字"
        />
      </div>

      <div class="weui-cells__title">带图标、说明的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-cell
          :icon="icon"
          label="标题文字"
          title="说明文字"
        />
        <mp-cell
          :icon="icon"
          label="标题文字"
          title="说明文字"
        />
      </div>

      <div class="weui-cells__title">带跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-cell
          label="标题文字"
          link="/aaa"
        />
        <mp-cell
          label="标题文字"
          link="/aaa"
        />
      </div>

      <div class="weui-cells__title">带说明、跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-cell
          label="标题文字"
          title="说明文字"
          link="/aaa"
        />
        <mp-cell
          label="标题文字"
          title="说明文字"
          link="/aaa"
        />
      </div>

      <div class="weui-cells__title">带图标、说明、跳转的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-cell
          :icon="icon"
          label="标题文字"
          title="说明文字"
          link="/aaa"
        />
        <mp-cell
          :icon="icon"
          label="标题文字"
          title="说明文字"
          link="/aaa"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mpCellGroup from '../../../packages/cell-group';
import mpCell from '../../../packages/cell';
import base64 from '../../base64';

export default {
  data() {
    return {
      icon: base64.icon20,
    };
  },
  components: { mpCell, mpCellGroup },
};
</script>


