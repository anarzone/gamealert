'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _AppRouter = require('./router/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _firebase = require('./firebase/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _configStore = require('./store/configStore');

var _configStore2 = _interopRequireDefault(_configStore);

var _questions = require('./actions/questions');

require('normalize.css/normalize.css');

require('tachyons');

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configStore2.default)();

var jsx = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_AppRouter2.default, null)
);

store.dispatch((0, _questions.startSetTopics)()).then(function () {
  _reactDom2.default.render(jsx, document.getElementById('app'));
}).catch(function (err) {
  console.log(err);
});