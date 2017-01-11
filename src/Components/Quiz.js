import React from 'react';
import Question from './Question';

export default class Quiz extends React.Component {
  render() {
    let {title, questions } = { ...this.props.data }
    return (
      <section className='Quiz'>
        <h1> {title} </h1>
        {questions.map(question =>
          <Question
            increment={(score) => this.props.increment(score)}
            className='question'
            key={question.id}
            data={question}
          />
        )}
      </section>
    );
  }
}
