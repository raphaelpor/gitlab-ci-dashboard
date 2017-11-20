import Vue from 'vue'
import User from '@/components/User'

const mockedResponse = {
  data: {
    name: 'Emiliano E. S. Barbosa',
    login: 'emilianoeloi'
  }
}

jest.mock('axios', () => ({
  get: () => Promise.resolve(mockedResponse)
}))

describe('User.vue', () => {
  it('should render correct contents', (done) => {
    const Constructor = Vue.extend(User)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.message').textContent)
    .toEqual('')
    vm.$watch('username', function () {
      expect(vm.$el.querySelector('.user h2').textContent)
        .toEqual('emilianoeloi')
      expect(vm.$el.querySelector('.user h3').textContent)
        .toEqual('Emiliano E. S. Barbosa')
      done()
    })
  })
})
