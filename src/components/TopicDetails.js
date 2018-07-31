import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class TopicDetails extends Component {// eslint-disable-line react/prefer-stateless-function
  render() {
    const { topicId } = this.props.match.params;
    const { topicQuestions } = this.props;
    let prevVal = '';
    return (
      <div className="container">
        {
          topicQuestions.map(
            topic => topic.questions.map(() => {
              if (topic.topicId === topicId && topic !== prevVal) {
                prevVal = topic;
                return topic.questions.map(
                  question => <Question question={question} />,
                );
              }
            }),
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topicQuestions: state.topicQuestions,
});

export default connect(mapStateToProps)(TopicDetails);
