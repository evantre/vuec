<template>
<div
  class="vc-slider"
  ref="el"
  @mousedown="onMouseDown"
  @mousemove="onMouseMove"
  @mouseup="onMouseUp"
  @click="onClick">
  <div
    class="vc-slider-progress"
    :style="{width: left}"></div>
  <div
    class="vc-slider-handle"
    :style="{left: left}"></div>
</div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      moving: false,
      client: {}
    }
  },

  computed: {
    left () {
      return (this.value - this.min) / (this.max - this.min) * 100 + '%'
    }
  },

  mounted () {
    this.client = this.$refs.el.getBoundingClientRect()
  },

  methods: {
    calcValue (e) {
      let cursorLeft = e.clientX
      let client = this.client
      let left = client.left
      let width = client.width
      let value = Math.round((this.max - this.min) * (cursorLeft - left) / width) + this.min

      if (value >= this.min && value <= this.max) {
        this.$emit('input', Math.round(value / this.step) * this.step)
      }
    },

    onClick (e) {
      this.calcValue(e)
    },

    onMouseDown (e) {
      this.moving = true
      document.addEventListener('mousemove', this.onMouseMove, false)
      document.addEventListener('mouseup', this.onMouseUp, false)
    },

    onMouseMove (e) {
      if (this.moving) {
        this.calcValue(e)
      }
    },

    onMouseUp (e) {
      document.removeEventListener('mousemove', this.onMouseMove, false)
      document.removeEventListener('mouseup', this.onMouseUp, false)
      this.moving = false
    }
  }
}
</script>

<style lang="less">
.vc-slider {
  position: relative;
  margin: 10px 6px;
  height: 12px;
  border-radius: 5px;
  background-color: #e9e9e9;
  cursor: pointer;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;
  transition: background-color 0.3s ease;

  .vc-slider-progress {
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 4px;
    background-color: #9fd2f6;
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  .vc-slider-handle {
    position: absolute;
    margin-left: -7px;
    margin-top: -5px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-radius: 50%;
    border: solid 2px #88c7f4;
    background-color: #fff;
    z-index: 2;
    transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);

    &:hover {
      border-color: #49a9ee;
      transform: scale(1.2);
      transform-origin: center center;
    }
  }
}
</style>
