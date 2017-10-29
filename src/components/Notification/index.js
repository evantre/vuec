import Vue from 'vue'
import Notification from './Notification'

const NotificationContructor = Vue.extend(Notification)
const notifications = []
let vm = new NotificationContructor({
  propsData: {
    notifications
  }
})

vm.$mount()
let $el = vm.$el
document.body.appendChild($el)

export default function notify (options) {
  let notification = {
    ...options
  }
  notifications.push(notification)

  if (options.during !== 0) {
    setTimeout(() => {
      notifications.splice(notifications.indexOf(notification), 1)
    }, options.during || 4500)
  }
}
