'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Dashboard = require('../components/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Topics = require('../components/Topics');

var _Topics2 = _interopRequireDefault(_Topics);

var _TopicDetails = require('../components/TopicDetails');

var _TopicDetails2 = _interopRequireDefault(_TopicDetails);

var _AddQuestions = require('../components/AddQuestions');

var _AddQuestions2 = _interopRequireDefault(_AddQuestions);

var _NotFoundPage = require('../components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRouter = function (_React$Component) {
  _inherits(AppRouter, _React$Component);

  function AppRouter() {
    _classCallCheck(this, AppRouter);

    return _possibleConstructorReturn(this, (AppRouter.__proto__ || Object.getPrototypeOf(AppRouter)).apply(this, arguments));
  }

  _createClass(AppRouter, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Dashboard2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/topics/', component: _Topics2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/add', component: _AddQuestions2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/topics/:topicId', component: _TopicDetails2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { component: _NotFoundPage2.default })
          )
        )
      );
    }
  }]);

  return AppRouter;
}(_react2.default.Component);

exports.default = AppRouter;