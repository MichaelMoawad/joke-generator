import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
 
  constructor(props) {
      super(props)

      this.state = {
        joke: "",
        badJokes: [],
        goodJokes: [],

      }
      this.getJoke = this.getJoke.bind(this);
      this.notFunny = this.notFunny.bind(this);
      this.prettyFunny = this.prettyFunny.bind(this);
  }

  getJoke(){
    const baseURL = `https://geek-jokes.sameerkumar.website/api?format=json`
      axios.get(baseURL).then((res) => {
        this.setState({joke: res.data.joke})
        console.log("hi")
      })
  }

  notFunny(){
    if((this.state.joke != this.state.badJokes[this.state.badJokes.length -1]) && (this.state.joke != this.state.goodJokes[this.state.goodJokes.length -1])){
      this.state.badJokes.push(this.state.joke)
      console.log(this.state.badJokes)
      this.forceUpdate()
    }
  }

  prettyFunny(){
    if((this.state.joke != this.state.goodJokes[this.state.goodJokes.length -1]) && (this.state.joke != this.state.badJokes[this.state.badJokes.length -1])){
      this.state.goodJokes.push(this.state.joke)
      console.log(this.state.goodJokes)
      this.forceUpdate()
    }
  }

  
  componentDidMount(){
    this._Mounted = true;
    if (this._Mounted){
      this.getJoke()
    }
  }

  componentDidUpdate(){
    
  }

  componentWillUnmount(){

  }

  render() {

    let goodJokesList = <div className='good-jokes'>
      {this.state.goodJokes.slice(0).reverse().map(item => <div className='text-padding'><p>{item}</p></div>
      )}
    </div>;

    let badJokesList = <div className='bad-jokes'>
      {this.state.badJokes.slice(0).reverse().map(item => <div className='text-padding'><p>{item}</p></div>
      )}
    </div>;

      return (
        <div className='main-container'>
          <div className='action-container'>
            <h1>Want to hear a funny Joke?</h1>
            <div className='button-container-joke'>
            <button class="pushable" onClick={this.getJoke}>
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front">
                Generate
              </span>
            </button>
            </div>
            <div class="slideContainer">
              <div class="bubble"></div>
              <div class="slider">
                  <div class="slide"><p className='joke-text'>{this.state.joke}</p></div>
              </div>
            </div>
            {/* <p className='joke-text'>{this.state.joke}</p> */}
          </div>

          <div className='results-container'>

            <div className='goodresults-container'>
              <div className='button-container'>
              {/* <button onClick={this.prettyFunny}> Hilarious! </button> */}
              <button class="pushable" onClick={this.prettyFunny}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front">
                  Hilarious!
                </span>
              </button>
              </div>
                {goodJokesList}
            </div>

            <div className='badresults-container'>
              <div className='button-container'>
              {/* <button onClick={this.notFunny}> Not funny bro </button> */}
              <button class="pushable" onClick={this.notFunny}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front">
                  Not funny
                </span>
              </button>
              </div>
                {badJokesList}
            </div>
          </div>

        </div>
      );
    }
}

export default App

