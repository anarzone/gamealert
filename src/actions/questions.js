import db from '../firebase/firebase';

/* eslint import/prefer-default-export: 0 */
// ADD_TOPIC
export const addTopic = topic => ({
  type: 'ADD_TOPIC',
  topic: {
    topicName: topic.topicName,
    questions: [
      ...topic.questions,
    ],
  },
});

// async-ly add topic then dispatch it
export const startAddTopic = topic => dispatch => db.ref('topics').push(topic).then(() => {
  dispatch(addTopic(topic));
});

// ADD_QUESTION
export const addQuestion = (id, { qId, question, answer } = {}) => ({
  type: 'ADD_QUESTION',
  question: {
    questionId: qId,
    question,
    answer,
  },
  id,
});
export const startAddQuestion = (id, questionData) => (dispatch) => {
  const {
    question,
    answer,
  } = questionData;
  const questionD = { question, answer };

  return db.ref(`topics/${id}/questions`).push(questionD).then(() => {
    dispatch(addQuestion(id, question));
  });
};

// SET_TOPICS
export const setTopics = topics => ({
  type: 'SET_TOPICS',
  topics,
});
// adding topics to an array
export const startSetTopics = () => dispatch => db.ref('topics').once('value').then((snapshot) => {
  const topics = [];
  snapshot.forEach((topic) => {
    topics.push({
      topicId: topic.key,
      ...topic.val(),
    });
  });
  dispatch(setTopics(topics));
});

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
