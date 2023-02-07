import style from './App.module.scss';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Index'
import LeftSideBar from './components/leftSideBar/Index';
import Home from './pages/home/Index'
import Login from './pages/login/Index'
function App() {
  const login = false
  if( login ) {
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
    )
  } else {
    return (
      <Login></Login>
    )
  }
}

export default App;
