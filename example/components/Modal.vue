<template>
<div>
<h1>Modal</h1>

<div class="demo">
  <button @click="onShow">show</button>
  <vc-mask
    :visible="visible"
    @click="visible = false"></vc-mask>

  <button @click="onShowModal">show modal</button>
  <modal
    title="Delete Your Account"
    :visible="modalVisible"
    @ok="onOk"
    @cancel="onCancel">
    <p>Are you sure you want to delete your account</p>
  </modal>
</div>

<doc-md>
<script type="text/html">
``` html
<button @click="onShow">show</button>
<vc-mask
  :visible="visible"
  @click="visible = false"></vc-mask>

<button @click="onShowModal">show modal</button>
<modal
  title="Delete Your Account"
  :visible="modalVisible"
  @ok="onOk"
  @cancel="onCancel">
  <p>Are you sure you want to delete your account</p>
</modal>
```
``` js
import VcMask from 'components/Modal/Mask'
import Modal from 'components/Modal/Modal'
```
</script>
</doc-md>

</div>
</template>

<script>
import VcMask from 'components/Modal/Mask'
import Modal from 'components/Modal/Modal'
import DocMd from './DocMd'

export default {
  components: {
    VcMask,
    Modal,
    DocMd
  },

  data () {
    return {
      visible: false,
      tipsVisible: false,
      modalVisible: false
    }
  },

  methods: {
    onShow () {
      this.visible = true
    },

    onShowTips () {
      this.tipsVisible = true
    },

    onShowModal () {
      this.modalVisible = true
    },

    onOk () {
      this.modalVisible = false
      console.log('ok')
    },

    onCancel () {
      this.modalVisible = false
      console.log('cancel')
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  p {
    padding: 30px 0;
  }
}
</style>
