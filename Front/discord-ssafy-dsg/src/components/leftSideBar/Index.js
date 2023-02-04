import style from './leftSideBar.module.scss'
import discordImg from '../../public/discord.png'

function LeftSideBar() {
  return (
   <div className={ `${style['left-side-bar']}` }>
    <div className={ `${style['first-area']}` }>
      <div className={ `${style['img-area']}` }>
        <img className={ `${style['img']}` } src={ discordImg } alt='discord-img'/>
      </div>
      <div className={ `${style['under-line']}` }></div>
    </div>
   </div> 
  )
}

export default LeftSideBar