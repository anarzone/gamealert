"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Question);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Question.__proto__ || Object.getPrototypeOf(Question)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isViewOpen: false
    }, _this.onViewAnswer = function () {
      _this.setState(function (prevState) {
        return { isViewOpen: !prevState.isViewOpen };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Question, [{
    key: "render",
    value: function render() {
      var question = this.props.question;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "tc bg-light-purple f2 lh-copy br4 pa4 ma2 bw2 shadow-5" },
          _react2.default.createElement(
            "span",
            { className: "questionBody" },
            question.question
          ),
          _react2.default.createElement(
            "div",
            { className: "answerBlock", onClick: this.onViewAnswer },
            this.state.isViewOpen ? _react2.default.createElement(
              "span",
              { className: "answer pa2 br4 bg-yellow" },
              question.answer
            ) : _react2.default.createElement(
              "span",
              { className: "seeAnswer pa2 br4 bg-light-red" },
              "See Answer"
            )
          )
        )
      );
    }
  }]);

  return Question;
}(_react2.default.Component);

exports.default = Question;