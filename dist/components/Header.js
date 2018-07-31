'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'header',
    { className: 'header' },
    _react2.default.createElement(
      'div',
      { className: 'tc' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 'header__title' },
          'Game Alert'
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'header__menu--item', to: '/topics' },
          _react2.default.createElement(
            'span',
            null,
            'Topics'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'header__menu--item', to: '/add' },
          _react2.default.createElement(
            'span',
            null,
            'Add Questions'
          )
        )
      )
    )
  );
};