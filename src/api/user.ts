import http from '../config/http.ts'
import {baseHeader} from '../config/header'

export function getUserInfo(userId: string | number) {
  return http.get(`/user/${userId}`, baseHeader)
}