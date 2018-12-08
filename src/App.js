import React, { Component } from 'react';
import QuoteContent from './components/QuoteContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colours: [
        "rgb(255, 195, 18)",
        "rgb(196, 229, 56)",
        "rgb(18, 203, 196)",
        "rgb(253, 167, 223)",
        "rgb(237, 76, 103)",
        "rgb(247, 159, 31)",
        "rgb(163, 203, 56)",
        "rgb(18, 137, 167)",
        "rgb(217, 128, 250)",
        "rgb(181, 52, 113)",
        "rgb(238, 90, 36)",
        "rgb(0, 148, 50)",
        "rgb(6, 82, 221)",
        "rgb(153, 128, 250)",
        "rgb(131, 52, 113)",
        "rgb(234, 32, 39)",
        "rgb(0, 98, 102)",
        "rgb(27, 20, 100)",
        "rgb(87, 88, 187)",
        "rgb(111, 30, 81)"
      ],
      quotes: null,
      quoteToDisplay: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        quotes: data.quotes,
        quoteToDisplay: data.quotes[Math.floor(Math.random() * data.quotes.length)]
      })
    })
  }

  handleClick() {
    const quotes = this.state.quotes;
    const _random = Math.floor(Math.random() * quotes.length);
    
    this.setState({
      quoteToDisplay: quotes[_random]
    })
  }

  colourGenerator() {
    const {colours, quoteToDisplay} = this.state

    if(!quoteToDisplay) {
      return '#FFF'
    }

    return colours[Math.floor(Math.random() * colours.length)]
  }

  render() {
    const {quotes, quoteToDisplay, colours} = this.state;
    return (
      <div className='App' style={{backgroundColor: this.colourGenerator()}}>
        <div id='quote-box'>
          {
            quoteToDisplay ? <QuoteContent onClick={this.handleClick} displayQuote={quoteToDisplay} /> : undefined
          }
        </div>
      </div>
    );
  }
}



export default App;
