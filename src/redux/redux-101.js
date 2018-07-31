import { createStore, combineReducers } from 'redux';


const defaultState = [
  {
    topicName: 'Test Topic',
    topicId: 111,
    questions: [
      {
        questionId: 1,
        question: 'How many birds are there in the world',
        answer: 'unknown',
      },
    ],
  },
];

const addQuestion = (id, { qId, question, answer } = {}) => ({
  type: 'ADD_QUESTION',
  question: {
    questionId: qId,
    question,
    answer,
  },
  id,
});

const questionsReducer = ((state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return state.map((topic) => {
        if (topic.topicId === action.id) {
          return {
            ...topic,
            questions: [
              ...topic.questions,
              action.question,
            ],
          };
        }
        return topic;
      });
    default:
      return state;
  }
});

const store = createStore(
  combineReducers({
    questionsReducer,
  }),
);
store.subscribe(() => {
  console.log(store.getState());
});
