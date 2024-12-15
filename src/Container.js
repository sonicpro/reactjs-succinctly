import { Component } from "react";
import Quote from './Quote';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQuoteIdx: 0 };
  }

  changeQuote(direction) {
    let newQuoteIdx = this.state.currentQuoteIdx;
    newQuoteIdx = newQuoteIdx + direction;
    if (!this.props.quoteData[newQuoteIdx]) {
      return;
    }

    this.setState({ currentQuoteIdx: newQuoteIdx });
  }

  render() {
    const currentQuote = this.props.quoteData[this.state.currentQuoteIdx];

    return (
      <div className='container'>
        <Quote {...currentQuote} />
        <hr />
        <div className="control-buttons">
            <button onClick={this.changeQuote.bind(this, -1)}>Previous Quote</button>
            <button onClick={this.changeQuote.bind(this, 1)}>Next Quote</button>
        </div>
      </div>
    );
  }
}

export default Container;