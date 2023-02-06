import style from "./home.module.scss"
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import SettingsIcon from '@mui/icons-material/Settings';
import profileImgSrc from '../../public/profileImg.png'
import { useEffect, useState } from "react";

function Home() {
  const [micState, setMicState] = useState(true)
  const [headsetState, setHeadsetState] = useState(true)

  return (
    <div className={ `${ style['home'] }` }>
      <div className={ `${ style['left-header'] }` }></div>
      <div className={ `${ style['main-header'] }` }></div>
      <div className={ `${ style['left-area'] }` }>
        <div></div>
        <div className={ `${ style['left-footer'] }` }>
          <div className={ `${ style['user-info-area'] }` }>
            <img className={ `${ style['img-area'] }` } src={profileImgSrc} alt='profileImg'></img>
            <div className={ `${ style['text-area'] }` }>
              <div className={ `${ style['name-area'] }` }>김동일</div>
              <div className={ `${ style['number-area'] }` }>#1234</div>
            </div>
          </div>
          <div className={ `${ style['button-area'] }` }>
            <div className={ `${ style['button'] }` }  onClick={ () => { setMicState( !micState ) } }>
              { micState ? 
                <MicIcon className={ `${ style['icon'] }` }></MicIcon> 
                : 
                <MicOffIcon className={ `${ style['icon'] }` }></MicOffIcon>
              }
            </div>
            <div className={ `${ style['button'] }` } onClick={ () => { setHeadsetState( !headsetState ) } }>
              { headsetState ? 
                <HeadphonesIcon className={ `${ style['icon'] }` }></HeadphonesIcon>
                :
                <HeadsetOffIcon className={ `${ style['icon'] }` }></HeadsetOffIcon>
              }
            </div>
            <div className={ `${ style['button'] }` }>
              <SettingsIcon className={ `${ style['icon'] }` }></SettingsIcon>
            </div>
          </div>
        </div>
      </div>
      <div className={ `${ style['main-area'] }` }></div>
      <div className={ `${ style['right-area'] }` }></div>
    </div>
  );
}

export default Home;