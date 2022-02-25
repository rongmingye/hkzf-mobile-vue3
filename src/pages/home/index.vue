<template>
  <div>
    <router-view></router-view>
    <div>
      <van-tabbar v-model="tabActive" active-color="#1989fa">
        <van-tabbar-item v-for="tab in tabs" :key="tab.path" :name="tab.id" :icon="tab.icon" :to="tab.path">{{tab.title}}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const tabActive = ref(1)

const tabs = [
  {
    id: 1,
    path: '/home',
    title: '首页',
    icon: 'coupon-o',
  },
  {
    id: 2,
    path: '/home/findhouse',
    title: '找房',
    icon: 'coupon-o',
  },
  {
    id: 3,
    path: '/home/news',
    title: '咨询',
    icon: 'coupon-o',
  },
  {
    id: 4,
    path: '/home/mine',
    title: '我的',
    icon: 'coupon-o',
  },
]

</script>

<style scoped>

</style>