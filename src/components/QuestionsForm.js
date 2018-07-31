import React, { Component } from 'react';
import uuid from 'uuid';


export default class QuestionForm extends Component {
  state = {
    topicName: '',
    questionInputs: {},
    answerInputs: {},
    error: '',
  }

  handleTopicName = (e) => {
    this.setState({ topicName: e.target.value });
  }

  handleQuestionInputs = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({ questionInputs: { ...prevState.questionInputs, [name]: value } }));
  }

  handleAnswerInputs = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({ answerInputs: { ...prevState.answerInputs, [name]: value } }));
  }

  handleSubmitTopic = (e) => {
    e.preventDefault();
    const { questionInputs, answerInputs } = this.state;

    const questions = [];

    for (const key in questionInputs) {
      questions.push({
        question: questionInputs[key],
        answer: answerInputs[key],
        questionId: uuid(),
      });
    }

    // call onSaveTopic()
    if (questions.length !== 5) {
      this.setState({ error: 'Bütün xanaları doldurmağınız vacibdir.' });
    } else {
      this.props.onSaveTopic({
        topicName: this.state.topicName,
        questions,
      });
    }
  }

  /* eslint react/destructuring-assignment: 0 */
  render() {
    return (
      <div className="container">
        <form className="questionForm" onSubmit={this.handleSubmitTopic}>
          {
            this.state.error && <span className="error">*{this.state.error}</span>
          }
          <div className="tc bg-navy f3 lh-title br2 pa4 ma2 bw2 shadow-5">
            {/* add topic name */ }
            <input type="text" onChange={this.handleTopicName} placeholder="add topic name" /><br />
          </div>
          <div className="tc bg-dark-green f3 lh-title br2 pa4 ma2 bw2 shadow-5">
            {/* add question 1 */ }
            <textarea name="q1" onChange={this.handleQuestionInputs} type="text" placeholder="add question" /><br />
            {/* add answer 1 */ }
            <input name="q1" onChange={this.handleAnswerInputs} type="text" placeholder="add answer" /><br />
          </div>
          <div className="tc bg-purple f3 lh-title br2 pa4 ma2 bw2 shadow-5">
            {/* add question 2 */ }
            <textarea name="q2" onChange={this.handleQuestionInputs} type="text" placeholder="add question" /><br />
            {/* add answer 2 */ }
            <input name="q2" onChange={this.handleAnswerInputs} type="text" placeholder="add answer" /><br />
          </div>
          <div className="tc bg-orange f3 lh-title br2 pa4 ma2 bw2 shadow-5">
            {/* add question 3 */ }
            <textarea name="q3" onChange={this.handleQuestionInputs} type="text" placeholder="add question" /><br />
            {/* add answer 3 */ }
            <input name="q3" onChange={this.handleAnswerInputs} type="text" placeholder="add answer" /><br />
          </div>
          <div className="tc bg-dark-red f3 lh-title br2 pa4 ma2 bw2 shadow-5">
            {/* add question 4 */ }
            <textarea name="q4" onChange={this.handleQuestionInputs} type="text" placeholder="add question" /><br />
            {/* add answer 4 */ }
            <input name="q4" onChange={this.handleAnswerInputs} type="text" placeholder="add answer" /><br />
          </div>
          <div className="tc bg-blue f3 lh-title br2 pa4 ma2 bw2 shadow-5">
            {/* add question 5 */ }
            <textarea name="q5" onChange={this.handleQuestionInputs} type="text" placeholder="add question" /><br />
            {/* add answer 5 */ }
            <input name="q5" onChange={this.handleAnswerInputs} type="text" placeholder="add answer" /><br />
          </div>
          {/* eslint-disable react/button-has-type */}
          <button className="tc bg-green br2 pa2 ma2 bw2 shadow-5">Save</button>
        </form>
      </div>
    );
  }
}
