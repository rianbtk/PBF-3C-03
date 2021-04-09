import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import store, { history } from './store';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // import './index.css';
// import Apps from './pages/App';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   // document.getElementById('root'),

// // ReactDOM.render(
// 	<Provider store={store}>
//     <ConnectedRouter history={history}>
//     <div>
//         <App />
//       </div>
//       <div>
//         <Apps />
//       </div>
//     </ConnectedRouter>
//   </Provider>,
// 	document.getElementById('root'));
// registerServiceWorker();
