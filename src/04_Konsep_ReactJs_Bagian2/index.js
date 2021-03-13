import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cara 1: membuat toggle button
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

    // binding ini dibutuhkan agar dapat bekerja ketika pemanggilan
    // this.handleClick = this.handleClick.bind(this);
    
  // }

  // handleClick () {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }
  // handleClick = () => {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  // render () {
  //   return (
  //     <button onClick={this.handleClick}>
  //       {this.state.isToggleOn ? 'ON - 1941723007' : 'OFF - Agus Salim H'}
  //     </button>
  //   );
  // }
//   handleClick () {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render () {
//     return (
//       <button onClick={() => this.handleClick()}>
//         {this.state.isToggleOn ? 'ON - 1941723007' : 'OFF - Agus Salim H'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// 2
// function SambutanUser (props) {
//   return <h1>Selamat Datang 1941723007 - Agus Salim H!</h1>;
// }

// function SambutanTamu (props) {
//   return <h1>Mohon melakukan sign up terlebih dahulu.</h1>;
// }
// function Sambutan (props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <SambutanUser />;
//   }
//   return <SambutanTamu />;
// }
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// 3
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick = () => {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick = () => {
//     this.setState({ isLoggedIn: false });
//   }

//   render () {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Sambutan isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// 4

// function NumberList(props) {
//   const nim = props.nim;
  // const listItems = nim.map((number) =>
  //   <li>{number}</li>
  // );
//   const listItems = nim.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const nim = [1, 2, 3, 4, 5, 6]; // <-- Ubah sesuai NIM Anda
// ReactDOM.render(
//   <NumberList nim={nim} />,
//   document.getElementById('root')
// );

// 5
// function Blog (props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   { id: 1, title: 'Biodata Saya', content: 'NIM: 1941723007 - Nama: Agus Salim H' },
//   { id: 2, title: 'Alamat Rumah', content: 'Alamat rumah saya di Jl Setyabudi Kota Bojonegoro' }
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );


// 6

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { value: '' };
    // ubah render
    // this.state = { value: 'Tulis biodata lengkap Anda di sini' };
    // select form
    // this.state = { value: 'semangka' };
    // multiple
    this.state = { value: ['semangka', 'mangga'] };
  }

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value });
  // }

  handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ value: value });
  }

  handleSubmit = (event) => {
    alert('Halo, ' + this.state.value + ' !');
    event.preventDefault();
  }

  // render () {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Nama:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
  // }
  // render () {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Biodata:
  //         <textarea value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
  // }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pilih buah favorit Anda:
          {/* <select value={this.state.value} onChange={this.handleChange}> */}
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="anggur">Anggur</option>
            <option value="jeruk">Jeruk</option>
            <option value="semangka">Semangka</option>
            <option value="mangga">Mangga</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
