<template>
<div v-if="notifications.length" class="vc-notifications">
  <div v-for="n in notifications" class="vc-notification">
    <div class="vc-notification-title">{{n.title}}</div>
    <div class="vc-notification-content">{{n.content}}</div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    notifications: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less">
.vc-notifications {
  position: fixed;
  top: 20px;
  right: 20px;
  pointer-events: none;

  .vc-notification {
    width: 335px;
    line-height: 1.5;
    padding: 16px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    background: #fff;
    overflow: hidden;

    &.visible {
      display: block;
    }
  }

  .vc-notification-title {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.75);
    margin-bottom: 4px;
    line-height: 20px;
  }

  .vc-notification-content {
    font-size: 12px;
  }
}
</style>
