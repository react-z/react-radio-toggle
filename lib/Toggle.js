'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Toggle).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: 'clear',
    value: function clear() {
      var elem = _react2.default.findDOMNode(this);
      var checkedElem = $(elem).find('input:checked')[0];
      if (checkedElem !== undefined) {
        checkedElem.checked = false;
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var parentLabel = e.target.parentElement;
      if (parentLabel !== undefined) {
        var value = parentLabel.querySelector('span').innerText;
        if (this.props.onToggle !== undefined) {
          this.props.onToggle(value);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var items = _props.items;
      var checked = _props.checked;
      var name = _props.name;


      var radioItems = items.map(function (item, i) {
        if (item === checked) {
          return _react2.default.createElement(
            'label',
            { key: i },
            _react2.default.createElement('input', { type: 'radio', defaultChecked: true, name: name,
              onClick: _this2.handleClick.bind(_this2) }),
            _react2.default.createElement(
              'span',
              null,
              item
            )
          );
        } else {
          return _react2.default.createElement(
            'label',
            { key: i },
            _react2.default.createElement('input', { type: 'radio', name: name,
              onClick: _this2.handleClick.bind(_this2) }),
            _react2.default.createElement(
              'span',
              null,
              item
            )
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { id: name, className: 'toggle' },
        radioItems
      );
    }
  }]);

  return Toggle;
}(_react2.default.Component);

exports.default = Toggle;


Toggle.propTypes = {
  onToggle: _react2.default.PropTypes.func
};