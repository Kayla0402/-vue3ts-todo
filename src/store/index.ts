import { createStore } from 'vuex'

import state from './state'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
export default createStore({
  state,
  mutations,
  actions,
})
