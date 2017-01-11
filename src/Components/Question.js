import React from 'react';
import Answer from './Answer';

export default class Question extends React.Component {
  render() {

    let {title, answers, id} = { ...this.props.data }
    return (
      <article className='question'>
        <h2>{title}</h2>
        {answers.map((answer, index) =>
          <Answer
            increment={(score) => this.props.increment(score)}
            id={id}
            key={index}
            data={answer}/>
        )}
      </article>
    );
  }
}
