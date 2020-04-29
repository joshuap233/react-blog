import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));

// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }

ReactDOM.createRoot(
  document.getElementById('root')
).render(<App/>);

