import api from './api/index.js'

export default {
  async getUserInfo(context, params) {
    const userInfo = await api.getUserInfo(params)
    context.commit('CHANGE_USER_INFO', userInfo)
  }
}