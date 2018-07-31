import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './Topic';
import getQuestions from './questionsDb';


const Topics = props => (
  <div className="container tc">

    {
      /* eslint react/destructuring-assignment: 0 */
      props.topicQuestions.map(topic => (
        <Topic
          key={topic.topicId}
          {...topic}
        />
      ))}
  </div>
);


const mapStateToProps = state => ({
  topicQuestions: state.topicQuestions,
});

export default connect(mapStateToProps)(Topics);
