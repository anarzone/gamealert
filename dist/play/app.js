'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var questions = require('./questions');

var myQ = questions();
var sample = {
  questionId: 10,
  question: 'This is sample question',
  answer: 'this is answer'
};

var addQ = function addQ(question) {
  return myQ.map(function (item) {
    if (item.topicId === 1) {
      return _extends({}, item, {
        questions: [].concat(_toConsumableArray(item.questions), [question])
      });
    }
  });
};
var newQ = addQ(sample);
newQ.map(function (item) {
  return console.log(item);
});