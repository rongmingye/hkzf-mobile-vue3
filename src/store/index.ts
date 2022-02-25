import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import { createStore } from 'vuex'

export default createStore({
  state,
  getters,
  mutations,
  actions,
})