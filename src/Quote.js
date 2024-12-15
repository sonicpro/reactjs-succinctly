import { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className='quote-container'>
        <div className='quote-body'>{this.props.body}</div>
        <div className='quote-author-name'>{this.props.authorName}</div>
      </div>
    );
  }

  // No invoked since ver 17 in strict mode.
  UNSAFE_componentWillMount() {
    console.log('componentWillMount...');
    debugger;
  }

  componentDidMount() {
    console.log('componentDidMount...');
    debugger;
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps...');
    debugger;
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate...');
    debugger;
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate...');
    debugger;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...');
    debugger;
  }

  // This does not hit when I call root.unmount() in index.js.
  componentWillUnmount() {
    console.log('componentWillUnmount...')
  }
}

export default Quote;
