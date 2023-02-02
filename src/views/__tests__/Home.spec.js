import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import Home from '../Home.vue'
// import testData from './testData'
import { nextTick } from 'vue'

const mockFetch = vi.fn()

describe('App', () => {
  let setup

  beforeEach(async () => {

    global.fetch = mockFetch()
    setup = async () => {
      const router = createRouter({
        history: createWebHistory(),
        routes: [{
          path: '/',
          name: 'Home',
          component: Home
        }]
      })
      await router.isReady
      const wrapper = mount(Home, {global: {
        plugins: [router]
      }})
  
      router.push('/')

      return {
        wrapper
      }
    }
  })


  it('renders feature component properly', async () => {
    const { wrapper } = await setup()

    expect(wrapper.find('.home').exists()).toBeTruthy()
    expect(wrapper.find('.featured-card').exists()).toBeTruthy()
    expect(wrapper.find('.featured-img').exists()).toBeTruthy()
    expect(wrapper.find('.detail').exists()).toBeTruthy()
    expect(wrapper.text()).toContain('Avengers: End Game')
    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('input').exists()).toBeTruthy()
  })

  it('has functional form submit', async () => {
    const { wrapper } = await setup()

    await wrapper.find('input[type="text"]').setValue('superman')
    await wrapper.find('input[type="submit"]').trigger('click')

    expect(mockFetch).toHaveBeenCalled()
  })

  /**
   * 
   *  NOTE this is a bad way to test.
   *  
   *  MUST figure out how to properly mock fetch, and use the testData in the dir to resovle its results
   *  then, assert for texts
   */
  
  it('should display movie list when movie list is populated', async () => {
    const { wrapper } = await setup()

    wrapper.vm.movies = [{'Title': '__TEST_TITLE__'}]
    await nextTick()

    expect(wrapper.html()).toContain('__TEST_TITLE__')
  })

  afterEach(() => {
    setup = null
    vi.restoreAllMocks()
  })
})
