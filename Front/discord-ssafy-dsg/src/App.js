import style from './App.module.scss';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Index'
import Header from './components/header/Index'
import LeftSideBar from './components/leftSideBar/Index';
function App() {
  return (
    <div className={ `${ style['App'] }` }>
      <div className={ `${ style['header'] }` }>
        <Header></Header>
      </div>
      <div className={ `${ style['left-side-bar'] }` }>
        <LeftSideBar></LeftSideBar>
      </div>
      <Routes className={ `${ style['router-area'] }` }>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
