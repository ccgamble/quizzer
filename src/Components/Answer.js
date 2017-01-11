import React from 'react';

export default class Answer extends React.Component {
  render() {
    let {title, score } = {...this.props.data};
    return (
      <label >
        <input
          onClick={() => this.props.increment( score )}
          name={this.props.id}
          className='answer'
          type='radio'
          value={score}
        />
        {title}
        <br/>
      </label>
    );
  }
}
