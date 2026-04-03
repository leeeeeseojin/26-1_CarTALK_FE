import InputField from '../../../components/inputField/InputField'
import './SignupPage.css'

export default function SignupPage() {
  return (
    <main className='signup'>
      <div className='signup__wrap'>
        {/* 로고 */}
        <h1 className='signup__brand'>CarTALK</h1>

        {/* 회원가입 카드 */}
        <section className='signup__card' aria-label='회원가입'>
          <h2 className='signup__title'>이메일로 가입하기</h2>
          <p className='signup__subtitle'>이메일을 인증하고 비밀번호를 설정해 주세요</p>

          {/* 이메일 인증 */}
          <div className='signup__row'>
            <InputField
              id='email'
              type='email'
              name='email'
              placeholder='email@example.com'
              autoComplete='email'
              required
            />
            <button className='signup__btn--ghost' type='button'>
              이메일 인증
            </button>
          </div>

          {/* 인증코드 */}
          <div className='signup__field'>
            <div className='signup__row'>
              <InputField
                id='verifyCode'
                type='text'
                name='verifyCode'
                placeholder='인증코드 6자리'
                required
              />
              <button className='signup__btn--ghost' type='button'>
                확인
              </button>
            </div>
            <p className='signup__hint'> 이메일로 발송된 6자리 인증코드를 입력해 주세요</p>
          </div>

          {/* 비밀번호 */}
          <div className='signup__field'>
            <InputField
              id='password'
              type='password'
              name='password'
              placeholder='8자 이상 입력'
              autoComplete='new-password'
              required
            />
            <p className='signup__hint'> 영문, 숫자 포함 8자 이상</p>
          </div>

          {/* 비밀번호 재입력 */}
          <InputField
            id='passwordConfirm'
            type='password'
            name='passwordConfirm'
            placeholder='비밀번호 재입력'
            autoComplete='new-password'
            required
          />

          {/* 가입 완료 버튼 */}
          <button className='signup__btn--primary' type='submit'>
            가입 완료
          </button>
        </section>
      </div>
    </main>
  )
}
