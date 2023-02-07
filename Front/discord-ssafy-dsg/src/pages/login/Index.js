import style from './login.module.scss'
function Login() {
  return (
    <div className={ `${ style['login-wrapper'] }` }>
      <div className={ `${ style['login-area'] }` }>
        <div className={ `${ style['left-area'] }` }>
          <div className={ `${ style['left-header'] }` }>
            <div className={ `${ style['main-title'] }` }>
              돌아오신 것을 환영해요!
            </div>
            <div className={ `${ style['sub-title'] }` }>
              다시 만나다니 너무 반가워요!
            </div>
          </div>
          <div className={ `${ style['left-body'] }` }>
            <div className={ `${ style['section'] }` }>
              <div className={ `${ style['text-area'] }` }>
                이메일 또는 전화번호 <span>*</span>
              </div>
              <div className={ `${ style['input-area'] }` }></div>
            </div>
            <div className={ `${ style['section'] }` }>
              <div className={ `${ style['text-area'] }` }>
                비밀번호 <span>*</span>
              </div>
              <div className={ `${ style['input-area'] }` }></div>
              <div className={ `${ style['find-password-area'] }` }>
                비밀번호를 잊으셨나요?
              </div>
            </div>
          </div>
          <div className={ `${ style['left-footer'] }` }>
            <div className={ `${ style['button-area'] }` }>
              로그인
            </div>
            <div className={ `${ style['text-area'] }` }>
              계정이 필요한가요? <span>가입하기</span>
            </div>
          </div>
        </div>
        <div className={ `${ style['right-area'] }` }>
          <div className={ `${ style['qr-area'] }` }>
            <div className={ `${ style['qr'] }` }></div>
          </div>
          <div className={ `${ style['main-text'] }` }>
            QR 코드로 로그인
          </div>
          <div className={ `${ style['sub-text'] }` }>
            Discord 모바일 앱으로 스캔해 바로 로그인 하세요.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login