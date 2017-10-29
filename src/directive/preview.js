const getImage = (src, previewItem) => {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.src = src
    img.onload = function () {
      previewItem['naturalHeight'] = img.naturalHeight
      previewItem['naturalWidth'] = img.naturalWidth
      resolve(img)
    }
    img.error = function (e) {
      reject(e)
    }
  })
}
const getPreviewElements = (el, $eventBus) => {
  let images = el.querySelectorAll('.preview-image')
  let length = images.length
  if (!length) {
    return
  }
  for (let i = 0; i < length; i++) {
    let image = images[i]
    let index = i
    let url = image.getAttribute('src')
    let originalUrl = image.getAttribute('data-originalUrl')
    let alt = image.getAttribute('alt')
    let item = {
      title: alt || '',
      index: ++index || 0,
      el: image,
      url: url,
      originalUrl: originalUrl
    }
    getImage(item.originalUrl, item)
    $eventBus.GM_PREVIEW.imagesList.push(item)
    image.addEventListener('click', (function () {
      return function (e) {
        e.stopPropagation()
        $eventBus.GM_PREVIEW.loading = true
        getImage(item.originalUrl, item).then(function () {
          $eventBus.GM_PREVIEW.show = true
          $eventBus.GM_PREVIEW.current = item
          $eventBus.GM_PREVIEW.loading = false
        }).catch(function (err) {
          console.log(err)
        })
      }
    })())
  }
}
const preview = (Vue, $eventBus) => {
  Vue.directive('preview', {
    bind: function (el) {
      Vue.nextTick(function () {
        getPreviewElements(el, $eventBus)
      })
    },
    update: function (el) {
      $eventBus.GM_PREVIEW.imagesList = []
      Vue.nextTick(function () {
        getPreviewElements(el, $eventBus)
      })
    },
    unbind: function () {
      $eventBus.GM_PREVIEW.imagesList.forEach((item, index) => {
        if (item.el) {
          item.el.removeEventListener('click', function (e) {
            e.stopPropagation()
            $eventBus.GM_PREVIEW.show = true
            $eventBus.GM_PREVIEW.current = item
          })
        }
      })
      $eventBus.GM_PREVIEW = {
        show: false,
        current: {},
        imagesList: []
      }
    }
  })
  return Vue
}
export default preview
