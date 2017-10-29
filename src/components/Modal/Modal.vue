<template>
<vc-mask
  :visible="visible"
  @click="onMaskClick">
  <div
    class="vc-modal"
    :class="{visible: visible}"
    @click.stop>
    <div class="vc-title">{{title}}</div>
    <div
      v-if="closable"
      @click="onClose" class="vc-close">&times;</div>
    <div class="vc-body"><slot></slot></div>
    <div class="vc-footer">
      <button @click="onCancel" class="vc-cancel">{{cancelText}}</button>
      <button @click="onOk" class="vc-ok">{{okText}}</button>
    </div>
  </div>
</vc-mask>
</template>

<script>
import VcMask from './Mask.vue'

export default {
  components: {
    VcMask
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },

  methods: {
    onCancel () {
      this.$emit('cancel')
    },

    onOk () {
      this.$emit('ok')
    },

    onClose () {
      this.$emit('cancel')
    },

    onMaskClick () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less">
.vc-modal {
  display: none;
  position: absolute;
  top: 100px;
  left: 50%;
  min-width: 320px;
  transform: translateX(-50%);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);

  &.visible {
    display: block;
  }

  .vc-close {
    position: absolute;
    top: 10px;
    right: 16px;
    cursor: pointer;
  }

  .vc-title {
    padding: 14px 16px;
    border-bottom: 1px solid #e9e9e9;
    border-radius: 4px 4px 0 0;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    background: #fff;
  }

  .vc-body {
    padding: 16px;
    line-height: 1.5;
    font-size: 12px;
  }

  .vc-footer {
    text-align: right;
    padding: 10px 16px 10px 10px;
    border-top: 1px solid #e9e9e9;
    border-radius: 0 0 4px 4px;

    button {
      border: 0;
      font-size: 12px;
      color: #333;
      background-color: transparent;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
