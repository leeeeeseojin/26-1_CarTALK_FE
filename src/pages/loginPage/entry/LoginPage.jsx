import InputField from '../../../components/inputField/InputField'
import './LoginPage.css'

export default function LoginPage() {
  return (
    <main className='login'>
      <div className='login__wrap'>
        {/* 로고 */}
        <h1 className='login__brand'>CarTALK</h1>

        {/* 로그인 카드 */}
        <section className='login__card' aria-label='로그인'>
          <div className='login__fields'>
            {/* 이메일 입력 */}
            <InputField
              id='email'
              type='email'
              name='email'
              placeholder='이메일을 입력하세요'
              autoComplete='email'
              required
            />

            {/* 비밀번호 입력 */}
            <InputField
              id='password'
              type='password'
              name='password'
              placeholder='비밀번호를 입력하세요'
              autoComplete='current-password'
              required
            />

            {/* 로그인 버튼 */}
            <button className='login__btn--primary' type='submit'>
              로그인
            </button>

            {/* 회원가입 버튼 */}
            <button className='login__btn--ghost' type='button'>
              회원가입
            </button>
          </div>

          {/* 비밀번호 찾기 링크 */}
          <a className='login__forgot' href='#'>
            비밀번호를 잊으셨나요?
          </a>
        </section>
      </div>
    </main>
  )
}
