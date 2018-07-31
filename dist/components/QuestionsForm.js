'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionForm = function (_Component) {
  _inherits(QuestionForm, _Component);

  function QuestionForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QuestionForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QuestionForm.__proto__ || Object.getPrototypeOf(QuestionForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      topicName: '',
      questionInputs: {},
      answerInputs: {},
      error: ''
    }, _this.handleTopicName = function (e) {
      _this.setState({ topicName: e.target.value });
    }, _this.handleQuestionInputs = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(function (prevState) {
        return { questionInputs: _extends({}, prevState.questionInputs, _defineProperty({}, name, value)) };
      });
    }, _this.handleAnswerInputs = function (e) {
      var _e$target2 = e.target,
          name = _e$target2.name,
          value = _e$target2.value;

      _this.setState(function (prevState) {
        return { answerInputs: _extends({}, prevState.answerInputs, _defineProperty({}, name, value)) };
      });
    }, _this.handleSubmitTopic = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          questionInputs = _this$state.questionInputs,
          answerInputs = _this$state.answerInputs;


      var questions = [];

      for (var key in questionInputs) {
        questions.push({
          question: questionInputs[key],
          answer: answerInputs[key],
          questionId: (0, _uuid2.default)()
        });
      }

      // call onSaveTopic()
      if (questions.length !== 5) {
        _this.setState({ error: 'Bütün xanaları doldurmağınız vacibdir.' });
      } else {
        _this.props.onSaveTopic({
          topicName: _this.state.topicName,
          questions: questions
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QuestionForm, [{
    key: 'render',


    /* eslint react/destructuring-assignment: 0 */
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'form',
          { className: 'questionForm', onSubmit: this.handleSubmitTopic },
          this.state.error && _react2.default.createElement(
            'span',
            { className: 'error' },
            '*',
            this.state.error
          ),
          _react2.default.createElement(
            'div',
            { className: 'tc bg-navy f3 lh-title br2 pa4 ma2 bw2 shadow-5' },
            _react2.default.createElement('input', { type: 'text', onChange: this.handleTopicName, placeholder: 'add topic name' }),
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'tc bg-dark-green f3 lh-title br2 pa4 ma2 bw2 shadow-5' },
            _react2.default.createElement('textarea', { name: 'q1', onChange: this.handleQuestionInputs, type: 'text', placeholder: 'add question' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { name: 'q1', onChange: this.handleAnswerInputs, type: 'text', placeholder: 'add answer' }),
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'tc bg-purple f3 lh-title br2 pa4 ma2 bw2 shadow-5' },
            _react2.default.createElement('textarea', { name: 'q2', onChange: this.handleQuestionInputs, type: 'text', placeholder: 'add question' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { name: 'q2', onChange: this.handleAnswerInputs, type: 'text', placeholder: 'add answer' }),
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'tc bg-orange f3 lh-title br2 pa4 ma2 bw2 shadow-5' },
            _react2.default.createElement('textarea', { name: 'q3', onChange: this.handleQuestionInputs, type: 'text', placeholder: 'add question' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { name: 'q3', onChange: this.handleAnswerInputs, type: 'text', placeholder: 'add answer' }),
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'tc bg-dark-red f3 lh-title br2 pa4 ma2 bw2 shadow-5' },
            _react2.default.createElement('textarea', { name: 'q4', onChange: this.handleQuestionInputs, type: 'text', placeholder: 'add question' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { name: 'q4', onChange: this.handleAnswerInputs, type: 'text', placeholder: 'add answer' }),
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'tc bg-blue f3 lh-title br2 pa4 ma2 bw2 shadow-5' },
            _react2.default.createElement('textarea', { name: 'q5', onChange: this.handleQuestionInputs, type: 'text', placeholder: 'add question' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { name: 'q5', onChange: this.handleAnswerInputs, type: 'text', placeholder: 'add answer' }),
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(
            'button',
            { className: 'tc bg-green br2 pa2 ma2 bw2 shadow-5' },
            'Save'
          )
        )
      );
    }
  }]);

  return QuestionForm;
}(_react.Component);

exports.default = QuestionForm;