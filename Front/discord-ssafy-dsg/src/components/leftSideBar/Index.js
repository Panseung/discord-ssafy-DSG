import style from './leftSideBar.module.scss'
import GroupServerButton from '../groupServerButton/Index'
import testImg from '../../public/topLeftImg.png'
import _ from 'lodash'

function LeftSideBar() {
  const dummyDatas = [
    { id: 1, src: testImg }, 
    { id: 2 }, 
    { id: 3 }, 
    { id: 4 }, 
    { id: 5 }, 
    { id: 6 }, 
    { id: 7 }, 
    { id: 8 }
  ]

  return (
    <div className={ `${style['left-side-bar']}` }>
      <div className={ `${style['first-area']}` }>
        <GroupServerButton></GroupServerButton>
        <div className={ `${style['under-line']}` }></div>
      </div>
      <div className={ `${style['group-area']}` }>
          { _.map( dummyDatas, data => {
            return <GroupServerButton imgSrc={ data.src } key={ data.id } ></GroupServerButton>
          } ) }
      </div>
    </div> 
  )
}

export default LeftSideBar