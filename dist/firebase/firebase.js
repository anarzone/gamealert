'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.firebase = undefined;

var _firebase = require('firebase');

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var config = {
  apiKey: 'AIzaSyCwj2szoNWMBYxODz3zJNnrKguonWZPOHQ',
  authDomain: 'gamealert-2616.firebaseapp.com',
  databaseURL: 'https://gamealert-2616.firebaseio.com',
  projectId: 'gamealert-2616',
  storageBucket: '',
  messagingSenderId: '677225606323'
};

firebase.initializeApp(config);
var db = firebase.database();

exports.firebase = firebase;
exports.default = db;

// db.ref('topics').push({
//   topicName: 'Yaponiya',
//   questions: [
//     {
//       questionId: 1,
//       question: "Yaponiya konstitusiyasına görə 'dövlətin və xalq birliyinin simvolu' hesab edilir.",
//       answer: 'İmperator',
//     },
//     {
//       questionId: 2,
//       question: "Yaponca deyin : 'Yumuşaq yol'",
//       answer: 'Cüdo',
//     },
//   ],
// });

// db.ref('topics/-LIBdgGoS5ZnXjHz2jWM/questions').push({
//   questionId: 2,
//   question: "Yaponca deyin : 'Yumuşaq yol'",
//   answer: 'Cüdo',
// });

// db.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   db.ref('topicName').set('Japan');
// }, 1500);
// setTimeout(() => {
//   db.ref('topicName').set('Austria');
// }, 1500);
// setTimeout(() => {
//   db.ref('topicName').set('Yaponiya');
// }, 1000);

// db.ref().once('value').then((snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// })
//   .catch(e => console.log('Error fetching data', e));