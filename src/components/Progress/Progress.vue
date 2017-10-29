<template>
<div
  class="vc-progress"
  :class="{'vc-progress-inside': textInside, 'vc-progress-text': showText}">
  <div class="vc-progress-bar">
    <div
      class="vc-progress-progress"
      :style="{width: value + '%'}">
      <div
        v-if="showText && textInside"
        class="vc-progress-text">{{value}}%</div>
    </div>
  </div>
  <div
    v-if="showText && !textInside"
    class="vc-progress-text">{{value}}%</div>
</div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    status: {
      type: String
    },
    showText: {
      type: Boolean,
      default: false
    },
    textInside: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    value () {
      let percent = this.percent
      if (percent < 0) return 0
      if (percent > 100) return 100
      return percent
    }
  }
}
</script>

<style lang="less">
.vc-progress {
  position: relative;
  width: 100%;
  height: 18px;
  padding: 4px 0;

  .vc-progress-bar {
    position: relative;
    border-radius: 100px;
    vertical-align: middle;
    background-color: #f3f3f3;
  }
  &.vc-progress-text .vc-progress-bar {
    margin-right: 35px;
  }
  &.vc-progress-text.vc-progress-inside .vc-progress-bar {
    margin-right: 0;
    color: #fff;
  }

  .vc-progress-text {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    line-height: 18px;
  }
  &.vc-progress-text.vc-progress-inside .vc-progress-text {
    margin-right: 10px;
  }

  .vc-progress-progress {
    position: relative;
    height: 10px;
    border-radius: 100px;
    background-color: #108ee9;
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
  }
  &.vc-progress-text.vc-progress-inside .vc-progress-progress {
    height: 18px;
  }
}
</style>
