import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Praktikum 1 //

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const nimNama = '1941723007-Agus Salim H';
// const element = <h1>Hello, {nimNama}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//Praktikum 2//

// function formatNama (user) {
//   return user.nim + ' - ' + user.nama;
// }

// const user = {
//   nim: '1941723007',
//   nama: 'Agus SaliM H'
// };

// const element = <h1>Hello, world</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
/* <div id="root"></div>
const element = <h1>"Hello, world"</h1>;
ReactDOM.render(element, document.getElementById('root')); */

//Praktikum 3//

// function jam() {
//   const element = (
//     <div>
//       <h1>Sekarang Jam:</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(jam, 1000);

// function Kartu(props) {
//   return <h1>Halo, {props.nim} - {props.nama}</h1>;
// }

// const element = <Kartu nama="Agus Salim H" nim="1941723007" />;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//5//
// function Jam(props) {
//   return (
//     <div>
//       <h2>Sekarang jam: {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Jam date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

//Praktikum 6//

// class Jam extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Halo, 1941723007 - Agus Salim H</h1>
//         <h2>Sekarang jam: {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Jam />,
//   document.getElementById('root')
// );

// Menambahkan method lifecycle ke class //

// class Jam extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Halo, 1941723007 - Agus Salim H</h1>
//         <h2>Sekarang jam: {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Jam />,
//   document.getElementById('root')
// );


//State update secara asynchronous//

// // Salah
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });

// Benar
// this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }));

// Benar
// this.setState(function(state, props) {
//   return {
//     counter: state.counter + props.increment
//   };
// });


//independen//
// componentDidMount() {
//   fetchPosts().then(response => {
//     this.setState({
//       posts: response.posts
//     });
//   });

//   fetchComments().then(response => {
//     this.setState({
//       comments: response.comments
//     });
//   });
// }

// // update //
// class Jam extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
// this.setState(function(state, props) {
//   return {
//     counter: state.counter + props.increment
//   };
// });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Halo, 1941723007 - Agus Salim H</h1>
//         <h2>Sekarang jam: {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Jam />,
//   document.getElementById('root')
// );