import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Toggle from '../src/Toggle'

test('Toggle component', (t) => {
  const toggled = () => {
    console.log('just testing...')
  }

  let items = ['apple', 'orange', 'lemon', 'peach']

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
