<template>
<div>
<h1>Popup</h1>

<div class="demo">
  <popup position="top left">
    <popup-trigger>
      <p class="abbr">top left</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="top center">
    <popup-trigger>
      <p class="abbr">top center</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="top right">
    <popup-trigger>
      <p class="abbr">top right</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="bottom left">
    <popup-trigger>
      <p class="abbr">bottom left</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="bottom center">
    <popup-trigger>
      <p class="abbr">bottom center</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="bottom right">
    <popup-trigger>
      <p class="abbr">bottom right</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <br>

  <popup position="left top">
    <popup-trigger>
      <p class="abbr">left top</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="left center">
    <popup-trigger>
      <p class="abbr">left center</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="left bottom">
    <popup-trigger>
      <p class="abbr">left bottom</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="right top">
    <popup-trigger>
      <p class="abbr">right top</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="right center">
    <popup-trigger>
      <p class="abbr">right center</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>

  <popup position="right bottom">
    <popup-trigger>
      <p class="abbr">right bottom</p>
    </popup-trigger>
    <popup-content>
      <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
    </popup-content>
  </popup>
</div>

<doc-md>
<script type="text/html">
``` html
<popup position="top left">
  <popup-trigger>
    <p class="abbr">top left</p>
  </popup-trigger>
  <popup-content>
    <p class="tip">The Document Object Model (DOM) <br>is a programming interface for HTML</p>
  </popup-content>
</popup>

...
```
``` css
.abbr {
  display: inline-block;
}
.tip {
  margin: 10px 15px;
  font-size: 14px;
}
```
</script>
</doc-md>

</div>
</template>

<script>
import DocMd from './DocMd'
import Popup from 'components/Popup/Popup'
import PopupTrigger from 'components/Popup/PopupTrigger'
import PopupContent from 'components/Popup/PopupContent'

export default {
  components: {
    DocMd,
    Popup,
    PopupTrigger,
    PopupContent
  }
}
</script>

<style lang="less" scoped>
.vc-popup-trigger {
  border: 1px solid #eee;
  padding: 6px 8px;
  margin: 8px;
  border-radius: 4px;
  color: #108ee9;
}
.abbr {
  display: inline-block;
}
.tip {
  margin: 10px 15px;
  font-size: 14px;
}
</style>
