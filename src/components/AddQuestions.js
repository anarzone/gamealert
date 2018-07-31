import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddTopic } from '../actions/questions';
import QuestionForm from './QuestionsForm';

/* eslint-disable react/prefer-stateless-function */
class AddQuestions extends Component {
  onSaveTopic = (topic) => {
    this.props.dispatch(startAddTopic(topic));
    this.props.history.push('/');
  }

  render() {
    return (
      <QuestionForm onSaveTopic={this.onSaveTopic} />
    );
  }
}

export default connect()(AddQuestions);
