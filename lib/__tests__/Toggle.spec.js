"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Toggle renders correctly and matches snapshot', function () {
  var items = ['apple', 'orange', 'lemon', 'peach'];
  var handleToggled = jest.fn();

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Toggle.default, {
    items: items,
    checked: "apple",
    name: "toggleFruits",
    onToggle: handleToggled
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Toggle renders the correct elements and props', function () {
  var items = ['apple', 'orange', 'lemon', 'peach'];
  var handleToggled = jest.fn();
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Toggle.default, {
    items: items,
    checked: "apple",
    name: "toggleFruits",
    onToggle: function onToggle(e) {
      return handleToggled(e);
    }
  }));
  expect(wrapper.instance().props.items).toEqual(items);
  expect(wrapper.instance().props.checked).toEqual('apple');
  expect(wrapper.instance().props.name).toEqual('toggleFruits');
  expect(wrapper.find('label').length).toEqual(items.length);
  expect(wrapper.find('input').length).toEqual(items.length);
  expect(wrapper.find('input').first().prop('defaultChecked')).toEqual(true);
  expect(wrapper.find('input').first().prop('type')).toEqual('radio');
  expect(wrapper.find('span').first().text()).toEqual('apple');
  wrapper.find('input').first().simulate('click', {
    target: {}
  }); // expect(handleToggled).toBeCalled();
});