import Vue from 'vue'
import VueRouter from 'vue-router'

import BackTop from './components/BackTop'
import Pagination from './components/Pagination'
import Modal from './components/Modal'
import DatePicker from './components/DatePicker'
import Tabs from './components/Tabs'
import Collapse from './components/Collapse'
import Popup from './components/Popup'
import Dropdown from './components/Dropdown'
import Notification from './components/Notification'
import Message from './components/Message'
import Breadcrumb from './components/Breadcrumb'
import Switch from './components/Switch'
import Slider from './components/Slider'
import Progress from './components/Progress'
import Loader from './components/Loader'
import Select from './components/Select'
import Menu from './components/Menu'
import Tree from './components/Tree'
import Carousel from './components/Carousel'

// import Scrollbar from './components/scrollbar'
// import Preview from './components/preview'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: BackTop, redirect: '/switch' },
    { path: '/backtop', component: BackTop },
    { path: '/pagination', component: Pagination },
    { path: '/modal', component: Modal },
    { path: '/datepicker', component: DatePicker },
    { path: '/tabs', component: Tabs },
    { path: '/collapse', component: Collapse },
    { path: '/popup', component: Popup },
    { path: '/dropdown', component: Dropdown },
    { path: '/notification', component: Notification },
    { path: '/message', component: Message },
    { path: '/breadcrumb', component: Breadcrumb },
    { path: '/switch', component: Switch },
    { path: '/slider', component: Slider },
    { path: '/progress', component: Progress },
    { path: '/loader', component: Loader },
    { path: '/select', component: Select },
    { path: '/menu', component: Menu },
    { path: '/tree', component: Tree },
    { path: '/carousel', component: Carousel }

    // { path: '/scrollbar', component: Scrollbar },
    // { path: '/preview', component: Preview }
  ]
})
