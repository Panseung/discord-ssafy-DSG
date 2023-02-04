import style from './header.module.scss'
import topLeftImg from '../../public/topLeftImg.png'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  return (
    <div className={ `${ style['header'] }` }>
      <img className={ `${ style['header-left'] }` } src={ topLeftImg } alt='logo' />
      <div className={ `${ style['header-right'] }` }>
        <div className={ `${ style['icon-box'] }` }>
          <HorizontalRuleIcon className={ `${ style['icon'] }` }></HorizontalRuleIcon>
        </div>
        <div className={ `${ style['icon-box'] }` }>
          <CheckBoxOutlineBlankIcon className={ `${ style['icon'] }` }></CheckBoxOutlineBlankIcon>
        </div>
        <div className={ `${ style['icon-box'] } ${ style['close'] }` }>
          <CloseIcon className={ `${ style['icon'] }` }></CloseIcon>
        </div>
      </div>
    </div>
  )
}

export default Header