import './styles/base.less'
import Vue from 'vue'
import {retina} from './utils'
import icon from './icon'
import iconButton from './iconButton'
import * as list from './list'
import overlay from './internal/popup/overlay'
import popover from './popover'
import tooltip from './tooltip'

const components = {
  icon,
  iconButton,
  ...list,
  overlay,
  tooltip,
}

const install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
  retina()
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  config,
  install
}
export {
  config,
  install
}
