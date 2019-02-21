import React, { Component } from 'react'
import styled from 'styled-components'

export default class Toggle extends Component {
  clear() {
    let elem = React.findDOMNode(this)
    let checkedElem = $(elem).find('input:checked')[0]
    if (checkedElem !== undefined) {
      checkedElem.checked = false
    }
  }

  handleClick(e) {
    let parentLabel = e.target.parentElement
    if (parentLabel !== undefined) {
      let value = parentLabel.querySelector('span').innerText
      if (this.props.onToggle !== undefined) {
        this.props.onToggle(value)
      }
    }
  }

  render() {
    const { items, checked, name } = this.props

    let radioItems = items.map((item, i) => {
      if (item === checked) {
        return (
          <label key={i}>
            <input
              type="radio"
              defaultChecked
              name={name}
              onClick={this.handleClick.bind(this)}
            />
            <span>{item}</span>
          </label>
        )
      } else {
        return (
          <label key={i}>
            <input
              type="radio"
              name={name}
              onClick={this.handleClick.bind(this)}
            />
            <span>{item}</span>
          </label>
        )
      }
    })

    return <ToggleWrapper id={name}>{radioItems}</ToggleWrapper>
  }
}

const ToggleWrapper = styled.div`
  overflow: hidden;
  label {
    border-radius: 0.3rem;
    border: 1px solid #fff !important;
    cursor: pointer;
    float: left;
    margin: 1rem;
    overflow: auto;
    span {
      display: block;
      font-size: 18px;
      font-weight: normal;
      padding: 12px 20px;
      text-align: center;
      background-color: #eee;
    }
    input {
      position: absolute;
      visibility: hidden;
    }
    input:checked + span {
      background-color: #f8f8ff;
    }
  }
`
