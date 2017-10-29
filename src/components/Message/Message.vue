<template>
<div v-if="messages.length" class="vc-messages">
  <div v-for="m in messages" class="vc-message">
    <i></i>
    <span class="vc-message-content">{{m.content}}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less">
.vc-messages {
  position: fixed;
  top: 20px;
  left: 50%;
  max-width: 50%;
  text-align: center;
  transform: translateX(-50%);
  pointer-events: none;

  .vc-message {
    display: inline-block;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 10px;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 12px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .2);
  }
}
</style>
