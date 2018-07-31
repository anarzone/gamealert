'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _questions = require('../reducers/questions');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose; // eslint-disable-line

exports.default = function () {
  var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    topicQuestions: _questions2.default
  }), composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));

  return store;
};