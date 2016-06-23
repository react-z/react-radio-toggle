import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Toggle from '../src/Toggle'

test('Toggle component', (t) => {
  setupJsdom()

  const toggled = () => {
    console.log('just testing...')
  }

  let items = ['apple', 'orange', 'lemon', 'peach']

  const component = shallow(
    <Toggle items={items} checked='apple' name='toggleFruits'
            onToggle={toggled.bind(this)} />
  )

  const wrapper = mount(
    <Toggle items={items} checked='apple' name='toggleFruits'
            onToggle={toggled.bind(this)} />
  )

  t.equal(
    wrapper.props().checked, 'apple', 'apple is the first radio toggle'
  )

  t.equal(
    wrapper.props().items, items, 'items are set as props for radio toggle'
  )

  t.end()
});
