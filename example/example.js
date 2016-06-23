import Toggle from '../lib/Toggle' // 'react-radio-toggle'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  toggled(value) {
    console.log(value)
  }

  render () {
    let items = ['apple', 'orange', 'lemon', 'peach']
    return (
      <div>
        <Toggle items={items} checked='apple' name='toggleFruits'
                onToggle={this.toggled.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
