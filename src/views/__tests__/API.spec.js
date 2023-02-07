import { render, screen, fireEvent } from "@testing-library/vue"
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from "vitest"

import Home from '../Home.vue'
import MovieDetail from '../MovieDetail.vue'


describe('E2E/Intergration Test', async () => {


  const router = createRouter({
    history: createWebHistory(),
    routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'Movie ',
      component: MovieDetail
    }]
  })
  await router.isReady
  
  render(Home, { global: {
    plugins: [router]
  }})

  router.push('/')

  it('when form is submitted, movies data populate, and once we click on movie, movie detail populates', async () => {
    const textInput = screen.getByPlaceholderText('Enter any movie name and search!')
    const searchBtn = screen.getByText('Search')

    await fireEvent.update(textInput, 'superman')
    await fireEvent.click(searchBtn)

    expect(await screen.findByText('Batman v Superman: Dawn of Justice'))


  })



})