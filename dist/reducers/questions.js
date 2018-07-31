'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// default state for questionsReducer
var defaultState = [{
  topicName: 'Test Topic',
  topicId: 111,
  questions: [{
    questionId: 1,
    question: 'How many birds are there in the world',
    answer: 'unknown'
  }]
}];

// reducers for questions db
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
    case 'ADD_TOPIC':
      return [].concat(_toConsumableArray(state), [action.topic]);
    case 'SET_TOPICS':
      return action.topics;
    default:
      return state;
  }
};
exports.default = questionsReducer;