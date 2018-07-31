'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Question = require('./Question');

var _Question2 = _interopRequireDefault(_Question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicDetails = function (_Component) {
  _inherits(TopicDetails, _Component);

  function TopicDetails() {
    _classCallCheck(this, TopicDetails);

    return _possibleConstructorReturn(this, (TopicDetails.__proto__ || Object.getPrototypeOf(TopicDetails)).apply(this, arguments));
  }

  _createClass(TopicDetails, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var topicId = this.props.match.params.topicId;
      var topicQuestions = this.props.topicQuestions;

      var prevVal = '';
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        topicQuestions.map(function (topic) {
          return topic.questions.map(function () {
            if (topic.topicId === topicId && topic !== prevVal) {
              prevVal = topic;
              return topic.questions.map(function (question) {
                return _react2.default.createElement(_Question2.default, { question: question });
              });
            }
          });
        })
      );
    }
  }]);

  return TopicDetails;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicQuestions: state.topicQuestions
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TopicDetails);