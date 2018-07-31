const questions = require('./questions');

const myQ = questions();
const sample = {
  questionId: 10,
  question: 'This is sample question',
  answer: 'this is answer',
};

const addQ = question => myQ.map((item) => {
  if (item.topicId === 1) {
    return {
      ...item,
      questions: [
        ...item.questions,
        question,
      ],
    };
  }
});
const newQ = addQ(sample);
newQ.map(item => console.log(item));
