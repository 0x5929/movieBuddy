import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import { mount } from '@vue/test-utils'
import App from './App.vue'
import HomeView from '../views/Home.vue'

describe('App', () => {
  let setup

  beforeEach(async () => {

    setup = async () => {
      const router = createRouter({
        history: createWebHistory(),
        routes: [{
          path: '/',
          name: 'Home',
          component: HomeView
        }]
      })
      await router.isReady
      const wrapper = mount(App, {global: {
        plugins: [router]
      }})
  
      router.push('/')

      return {
        wrapper
      }
    }
  })


  it('renders header components properly', async () => {
    const { wrapper } = await setup()

    expect(wrapper.text()).toContain('MovieBuddy')
  })

  afterEach(() => {
    setup = null
  })
})
