import React from 'react';
import './App.css';
import axios from 'axios';
import Quiz from './Quiz';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quizzes: null,
      score: null
    };
  }

  componentDidMount() {
    axios
      .get('/quizzes')
      .then((response) => {
        this.setState({quizzes: response.data.quizzes});
      })
      .catch(() => {
        console.log('error');
      });
  }

  handleIncrementScore(score){
    const newScore = this.state.score + score;
    this.setState({score:  newScore });
  }

  handleSubmit(){
		
    let currentScore = this.state.score;
    axios.post(`/scores/${currentScore}`)
    .then((response) => {
      console.log(response);
    });
  }

  render() {
    let quizzes = this.state.quizzes;
    return (
      <main>
        {quizzes
          ? quizzes.map(quiz => <Quiz
            increment={(score) => this.handleIncrementScore(score) }
            className='quiz'
            data={quiz}
            key={quiz.id}/>)
          : <p>Loading Quizzes...</p>
        }
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </main>
    );
  }
}
