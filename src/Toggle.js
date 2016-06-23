import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

export default class Toggle extends React.Component {

  clear () {
    let elem = React.findDOMNode(this)
    let checkedElem = $(elem).find('input:checked')[0]
    if(checkedElem !== undefined) {
      checkedElem.checked = false
    }
  }

  handleClick(e) {
    let parentLabel = e.target.parentElement
    if(parentLabel !== undefined){
      let value = parentLabel.querySelector('span').innerText
      if (this.props.onToggle !== undefined) {
        this.props.onToggle(value)
      }
    }
  }

  render() {
    const { items, checked, name } = this.props;

    let radioItems = items.map( (item, i) => {
      if(item === checked){
        return (
          <label key={i}>
            <input type="radio" defaultChecked name={name}
                   onClick={this.handleClick.bind(this)} />
            <span>{item}</span>
          </label>
        )
      } else {
        return (
          <label key={i}>
            <input type="radio" name={name}
                   onClick={this.handleClick.bind(this)} />
            <span>{item}</span>
          </label>
        )
      }
    })

    return (
      <div id={name} className="toggle">
        {radioItems}
      </div>
    );
  }
}

Toggle.propTypes = {
  onToggle: React.PropTypes.func
}
