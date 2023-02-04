import style from "./home.module.scss"


function Home() {
  return (
    <div className={ `${ style['home'] }` }>
      <div className={ `${ style['left-header'] }` }></div>
      <div className={ `${ style['main-header'] }` }></div>
      <div className={ `${ style['left-area'] }` }></div>
      <div className={ `${ style['main-area'] }` }></div>
      <div className={ `${ style['right-area'] }` }></div>
    </div>
  );
}

export default Home;