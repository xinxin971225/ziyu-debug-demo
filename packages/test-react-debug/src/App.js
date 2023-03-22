import logo from "./logo.svg";
import "./App.css";
// import { Component } from "react";
import { Button } from "antd/dist/antd";
import "antd/dist/reset.css";

// class App extends Component {
//   render() {
//     return (
//       <div
//         className="App"
//         onClick={(e) => {
//           console.log(e);
//         }}
//       >
//         <Button type="primary">ziyu ziyu ziyu</Button>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <Button type="primary">ziyu ziyu ziyu</Button>
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

export default App;
