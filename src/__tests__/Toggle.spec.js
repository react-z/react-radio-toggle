/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Toggle from '../Toggle'

test('Toggle renders correctly and matches snapshot', () => {
  let items = ['apple', 'orange', 'lemon', 'peach']
  const handleToggled = jest.fn()

  const component = renderer.create(
    <Toggle
      items={items}
      checked='apple'
      name='toggleFruits'
      onToggle={handleToggled}
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Toggle renders the correct elements and props', () => {
  let items = ['apple', 'orange', 'lemon', 'peach']
  const handleToggled = jest.fn()

  const wrapper = shallow(
    <Toggle
      items={items}
      checked='apple'
      name='toggleFruits'
      onToggle={e => handleToggled(e)}
    />
  )

  expect(wrapper.instance().props.items).toEqual(items)
  expect(wrapper.instance().props.checked).toEqual('apple')
  expect(wrapper.instance().props.name).toEqual('toggleFruits')

  expect(wrapper.find('label').length).toEqual(items.length)
  expect(wrapper.find('input').length).toEqual(items.length)
  expect(wrapper.find('input').first().prop('defaultChecked')).toEqual(true)
  expect(wrapper.find('input').first().prop('type')).toEqual('radio')
  expect(wrapper.find('span').first().text()).toEqual('apple')

  wrapper
    .find('input')
    .first()
    .simulate('click', { target: {} })

  // expect(handleToggled).toBeCalled();
})
