'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = [{
  topicName: 'Test Topic',
  topicId: 111,
  questions: [{
    questionId: 1,
    question: 'How many birds are there in the world',
    answer: 'unknown'
  }]
}];

var addQuestion = function addQuestion(id) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      qId = _ref.qId,
      question = _ref.question,
      answer = _ref.answer;

  return {
    type: 'ADD_QUESTION',
    question: {
      questionId: qId,
      question: question,
      answer: answer
    },
    id: id
  };
};

var questionsReducer = function questionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_QUESTION':
      return state.map(function (topic) {
        if (topic.topicId === action.id) {
          return _extends({}, topic, {
            questions: [].concat(_toConsumableArray(topic.questions), [action.question])
          });
        }
        return topic;
      });
    default:
      return state;
  }
};

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  questionsReducer: questionsReducer
}));
store.subscribe(function () {
  console.log(store.getState());
});