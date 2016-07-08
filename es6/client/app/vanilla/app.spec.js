/* eslint-env mocha */
/* global expect */

import App from './app'

describe('App', () => {
  let app
  beforeEach(() => {
    app = new App()
  })

  describe('Always', () => {
    it('Creates an instance of App', () => {
      expect(app).instanceOf(App)
    })
  })
})
