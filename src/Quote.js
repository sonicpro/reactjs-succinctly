import { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div className="quote-container">
                <div className="quote-body">
                    {this.props.body}
                </div>
                <div className="quote-author-name">
                    {this.props.authorName}
                </div>
            </div>
        )
    }
}

export default Quote;