'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSetTopics = exports.setTopics = exports.startAddQuestion = exports.addQuestion = exports.startAddTopic = exports.addTopic = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _firebase = require('../firebase/firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint import/prefer-default-export: 0 */
// ADD_TOPIC
var addTopic = exports.addTopic = function addTopic(topic) {
  return {
    type: 'ADD_TOPIC',
    topic: {
      topicName: topic.topicName,
      questions: [].concat(_toConsumableArray(topic.questions))
    }
  };
};

// async-ly add topic then dispatch it
var startAddTopic = exports.startAddTopic = function startAddTopic(topic) {
  return function (dispatch) {
    return _firebase2.default.ref('topics').push(topic).then(function () {
      dispatch(addTopic(topic));
    });
  };
};

// ADD_QUESTION
var addQuestion = exports.addQuestion = function addQuestion(id) {
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
var startAddQuestion = exports.startAddQuestion = function startAddQuestion(id, questionData) {
  return function (dispatch) {
    var question = questionData.question,
        answer = questionData.answer;

    var questionD = { question: question, answer: answer };

    return _firebase2.default.ref('topics/' + id + '/questions').push(questionD).then(function () {
      dispatch(addQuestion(id, question));
    });
  };
};

// SET_TOPICS
var setTopics = exports.setTopics = function setTopics(topics) {
  return {
    type: 'SET_TOPICS',
    topics: topics
  };
};
// adding topics to an array
var startSetTopics = exports.startSetTopics = function startSetTopics() {
  return function (dispatch) {
    return _firebase2.default.ref('topics').once('value').then(function (snapshot) {
      var topics = [];
      snapshot.forEach(function (topic) {
        topics.push(_extends({
          topicId: topic.key
        }, topic.val()));
      });
      dispatch(setTopics(topics));
    });
  };
};

// export const setQuestions = questions => ({
//   type: 'SET_QUESTIONS',
//   questions,
// });

// export const startSetQuestions = topicId =>
// dispatch => db.ref('topics').once('value').then((snapshot) => {
//   const questionsFromTopic = [];
//   snapshot.forEach((topic) => {
//     if (topic.key === topicId) {
//       topic.child('questions').forEach((questionData) => {
//         questionsFromTopic.push({
//           ...questionData.val(),
//         });
//       });
//     }
//   });
//   dispatch(setQuestions(questionsFromTopic));
// });