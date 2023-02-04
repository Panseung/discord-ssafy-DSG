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
        <HorizontalRuleIcon className={ `${ style['icon'] }` }></HorizontalRuleIcon>
        <CheckBoxOutlineBlankIcon className={ `${ style['icon'] }` }></CheckBoxOutlineBlankIcon>
        <CloseIcon className={ `${ style['icon'] }` }></CloseIcon>
      </div>
    </div>
  )
}

export default Header