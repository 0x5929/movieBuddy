import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import MovieDetail from '../MovieDetail.vue'
import HomePage from '../HomePage.vue'
import { getResp } from './testData'
import { nextTick } from 'vue'

describe('MovieDetail',  () => {
  let setup

  beforeEach(async () => {

      setup = async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [
              {
                path: '/',
                name: 'Home',
                component: HomePage
              },
              {
                path: '/movie/:id',
                name: 'Movie ',
                component: MovieDetail
              }
            ]
          })
          await router.isReady

        const wrapper = mount(MovieDetail, { global: { plugins: [router]}})
  
        return {
          wrapper
        }
    }
  })

  /**
   *  Needs further testing E2E testing
   *  simulate user search, and click onto a title
   *  then expect to see all movie details
   * 
   *  OR, if we can understand vue-router and how to mock its routes, 
   *  we might be able to test this better without E2E
   * 
   */

  it('should render movie details', async () => {
    const { wrapper } = await setup()
    wrapper.vm.movie = getResp
    await nextTick()

    expect(wrapper.html()).toContain('Batman v Superman: Dawn of Justice')
    expect(wrapper.html()).toContain('2016')
    expect(wrapper.html()).toContain('IMDB : 6.4')
    expect(wrapper.html()).toContain('The general public is concerned')
  })

  afterEach(() => {
    setup = null
    vi.restoreAllMocks()
  })
})
