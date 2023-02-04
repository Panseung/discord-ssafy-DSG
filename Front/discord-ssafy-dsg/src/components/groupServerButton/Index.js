import style from './groupServerButton.module.scss'
import discordImg from '../../public/discord.png'

function GroupServerButton( props ) {
  return (
    <div className={ `${style['group-server-button']}` }>
      <div className={ `${style['left-selected-wrapper']}` }>
        <div className={ `${style['left-selected']}` }></div>
      </div>
      <div className={ `${style['img-area']}` }>
        <div className={ `${style['img-wrapper']}` }>
          <img className={ `${style['img']}` } src={ props.imgSrc || discordImg } alt='discord-img'/>
        </div>
      </div>
    </div>
   )
}

export default GroupServerButton