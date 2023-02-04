import style from './leftSideBar.module.scss'
import GroupServerButton from '../groupServerButton/Index'

function LeftSideBar() {
  return (
   <div className={ `${style['left-side-bar']}` }>
    <div className={ `${style['first-area']}` }>
      <GroupServerButton first={ true }></GroupServerButton>
    </div>
   </div> 
  )
}

export default LeftSideBar