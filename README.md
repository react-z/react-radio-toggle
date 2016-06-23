## react-radio-toggle

[![npm version](https://badge.fury.io/js/react-radio-toggle.svg)](https://badge.fury.io/js/react-radio-toggle)

a simple radio button toggle component

## Install

``` js
npm install react-radio-toggle --save
```

## Versions

#### `1.0.0` uses React `^0.15.1`

## Use

``` js
import Toggle from 'react-radio-toggle'
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

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Styles

react-radio-toggle can be used with your own custom styles. A minimal [toggle.css](https://github.com/StevenIseki/react-radio-toggle/blob/master/example/public/toggle.css) style sheet is included as a guide.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
