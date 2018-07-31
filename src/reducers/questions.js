// default state for questionsReducer
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

// reducers for questions db
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
    case 'ADD_TOPIC':
      return [
        ...state,
        action.topic,
      ];
    case 'SET_TOPICS':
      return action.topics;
    default:
      return state;
  }
});
export default questionsReducer;
