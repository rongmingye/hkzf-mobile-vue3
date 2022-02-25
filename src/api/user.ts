import http from '../config/http'
import {baseHeader} from '../config/header'

export default {
  getUserInfo(userId: string | number) {
    return http.get(`/user/${userId}`, baseHeader)
  },
} 