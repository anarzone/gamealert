import React from 'react';


class Question extends React.Component {
  state = {
    isViewOpen: false,
  }

  onViewAnswer = () => {
    this.setState(prevState => ({ isViewOpen: !prevState.isViewOpen }));
  }

  render() {
    const { question } = this.props;
    return (
      <div>
        <div className="tc bg-light-purple f2 lh-copy br4 pa4 ma2 bw2 shadow-5">
          <span className="questionBody">{question.question}</span>
          <div className="answerBlock" onClick={this.onViewAnswer}>
            {
              this.state.isViewOpen ? <span className="answer pa2 br4 bg-yellow">{question.answer}</span>
                : <span className="seeAnswer pa2 br4 bg-light-red">See Answer</span>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
