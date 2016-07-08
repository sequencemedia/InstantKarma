/* eslint-env mocha */

// import { should as Should, expect } from 'chai'
import { expect } from 'chai'
import React from 'react'
// import ReactDOM from 'react-dom'
import TestUtils from 'react/lib/ReactTestUtils'
import App from './app'

// const should = Should()

describe('App component', () => {
  let app
  beforeEach(() => {
    app = TestUtils.renderIntoDocument(<App />)
  })

  describe('Always', () => {
    it('Should be a component constructor', () => {
      App.should.be.a('function')
    })
    it('Creates an instance of <App />', () => {
      expect(app).instanceOf(App)
    })
  })
})
