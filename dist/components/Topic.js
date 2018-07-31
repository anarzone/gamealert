'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topic = function Topic(_ref) {
  var topicId = _ref.topicId,
      topicName = _ref.topicName;
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: 'topic__title', to: 'topics/' + topicId },
    _react2.default.createElement(
      'div',
      { className: 'tc bg-hot-pink f1 lh-title dib br-pill pa4 ma2 grow bw2 shadow-5' },
      topicName
    )
  );
}; // eslint-disable-line 


Topic.propTypes = {
  topicId: _propTypes2.default.string.isRequired,
  topicName: _propTypes2.default.string.isRequired
};

exports.default = Topic;