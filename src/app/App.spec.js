import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import { mount } from '@vue/test-utils'
import App from './App.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

describe('App', () => {
  it('renders properly with routing', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/',
        name: 'home',
        component: HomeView
      }, {
        path: '/about',
        name: 'about',
        component: AboutView
      }]
    })

    router.push('/')

    await router.isReady
    const wrapper = mount(App, {global: {
      plugins: [router]
    }})

    expect(wrapper.text()).toContain('movieBuddy')
  })
})
