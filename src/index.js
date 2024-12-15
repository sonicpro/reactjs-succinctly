import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './Container';
import reportWebVitals from './reportWebVitals';

const quoteData = [
  {
    body: "Ate lion if you are hungry.",
    authorName: "Sam Livingston"
  },
  {
    body: 'Be yourself; everyone else is already taken',
    authorName: 'Oscar Wilde'
  },
  {
    body: "Underpromise and underdeliver",
    authorName: "Unknown"
  },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <Container quoteData={quoteData}/>
  {/* </React.StrictMode> */}
  </>
);
// This for componentWillUnmount demonstration but that does not hit anyway.
// root.unmount();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
