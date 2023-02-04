import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <div>하위</div> } />
      </Routes>

    </div>
  );
}

export default App;
