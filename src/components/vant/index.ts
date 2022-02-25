import { 
  Button, 
  Icon,
  Toast,
  Tabbar, 
  TabbarItem,
} from 'vant';

const List = [
  Button,
  Icon,
  Toast,
  Tabbar,
  TabbarItem,
]

function install(Vue) {
  List.forEach(item => {
    Vue.use(item)
  })
}

const VantInitComponent = {
  install,
  ...List,
}

export default VantInitComponent