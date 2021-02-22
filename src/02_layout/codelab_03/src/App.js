import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//Praktikum 4 //

// function Kartu (props) {
//   return <h1>Halo, {props.nim} - {props.nama}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Kartu nim="1941723007" nama="Agus" />
//       <Kartu nim="1941723008" nama="Fery" />
//       <Kartu nim="1941723009" nama="Anggit" />
//     </div>
//   );
// }

// export default App;

//Praktikum 5//
// function Komentar(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {props.date}
//       </div>
//     </div>
//   );
// }
// function App() {

//   let me = {name:"Agus Salim Hadjrianto", avatarUrl:logo}
//   return (
//     <div>
//       <Komentar text="1941723007" date="20 Februari 2021" author={me} />
//     </div>
//   );
// }
// export default App;