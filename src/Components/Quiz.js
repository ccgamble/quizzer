import React, { Component } from 'react';
import Question from './Question';

export default class Quiz extends Component {

  render() {
    return (
      <div>
        <h1 className="pageTitle">{this.props.quizzes[0].title}</h1>
        <section>
          {this.props.quizzes[0].questions.map((question, index) =>
            <Question
              className="questionContainer"
              key={question.id}
              id={index}
              title={question.title}
              answers={question.answers}
            />
					)}
					</section>
      </div>
    )
  }
}
