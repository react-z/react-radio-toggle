"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  label {\n    border-radius: 0.3rem;\n    border: 1px solid #fff !important;\n    cursor: pointer;\n    float: left;\n    margin: 1rem;\n    overflow: auto;\n    span {\n      display: block;\n      font-size: 18px;\n      font-weight: normal;\n      padding: 12px 20px;\n      text-align: center;\n      background-color: #eee;\n    }\n    input {\n      position: absolute;\n      visibility: hidden;\n    }\n    input:checked + span {\n      background-color: #f8f8ff;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Toggle =
/*#__PURE__*/
function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toggle).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: "clear",
    value: function clear() {
      var elem = _react.default.findDOMNode(this);

      var checkedElem = $(elem).find('input:checked')[0];

      if (checkedElem !== undefined) {
        checkedElem.checked = false;
      }
    }
  }, {
    key: "handleClick",
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
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          items = _this$props.items,
          checked = _this$props.checked,
          name = _this$props.name;
      var radioItems = items.map(function (item, i) {
        if (item === checked) {
          return _react.default.createElement("label", {
            key: i
          }, _react.default.createElement("input", {
            type: "radio",
            defaultChecked: true,
            name: name,
            onClick: _this.handleClick.bind(_this)
          }), _react.default.createElement("span", null, item));
        } else {
          return _react.default.createElement("label", {
            key: i
          }, _react.default.createElement("input", {
            type: "radio",
            name: name,
            onClick: _this.handleClick.bind(_this)
          }), _react.default.createElement("span", null, item));
        }
      });
      return _react.default.createElement(ToggleWrapper, {
        id: name
      }, radioItems);
    }
  }]);

  return Toggle;
}(_react.Component);

exports.default = Toggle;

var ToggleWrapper = _styledComponents.default.div(_templateObject());