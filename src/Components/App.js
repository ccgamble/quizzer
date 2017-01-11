import React, { Component } from 'react';
import axios from 'axios';
import Quiz from './Quiz'
import './App.css';


export default class App extends Component {
	constructor() {
		super()
		this.state = {
			quizzes: null,
		}
	}


	componentDidMount() {
		this.fetchQuiz();
	}

	fetchQuiz() {
		axios.get('/quizzes')
			.then((result) => {
				this.setState({
					quizzes: result.data.quizzes,
				});
			})
			.catch((error) => {
				console.log(error);
		});
	}



  render() {
    return (
      <div className="App">
				{this.state.quizzes ?
					<Quiz quizzes={this.state.quizzes} /> :
					<p>Loading...</p>
				}
		
			</div>
    );
  }
}
