'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Topic = require('./Topic');

var _Topic2 = _interopRequireDefault(_Topic);

var _questionsDb = require('./questionsDb');

var _questionsDb2 = _interopRequireDefault(_questionsDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topics = function Topics(props) {
  return _react2.default.createElement(
    'div',
    { className: 'container tc' },

    /* eslint react/destructuring-assignment: 0 */
    props.topicQuestions.map(function (topic) {
      return _react2.default.createElement(_Topic2.default, _extends({
        key: topic.topicId
      }, topic));
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicQuestions: state.topicQuestions
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Topics);