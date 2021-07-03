import logo from './logo.svg';
import './App.css';
import './assets/css/dist/tailwind.css'

function App() {
  return (
    <div className="App">
      <button className="btn hover:bg-blue-500">tourist project</button>
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
