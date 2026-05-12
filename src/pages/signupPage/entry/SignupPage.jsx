import './SignupPage.css'
import Button from '../../../components/button/Button'

export default function SignupPage() {
  return (
    <main className='signup'>
      <div className='signup__wrap'>
        {/* 회원가입 카드 */}
        <section className='signup__card' aria-label='회원가입'>
          <h2 className='signup__title'>이메일로 가입하기</h2>
          <p className='signup__subtitle'>이메일을 인증하고 비밀번호를 설정해 주세요</p>

          {/* 인풋 묶음 */}
          <div className='signup__inputs'>
            {/* 이메일 — 인풋 + 인증 전송 링크 */}
            <div className='signup__field'>
              <input
                className='signup__input'
                type='email'
                placeholder='email@example.com'
                autoComplete='email'
                required
              />
              <span className='signup__action'>인증 전송 →</span>
            </div>

            {/* 인증코드 — 인풋 + 확인 링크 */}
            <div className='signup__field'>
              <input
                className='signup__input'
                type='text'
                placeholder='이메일로 발송된 인증코드 6자리'
                required
              />
              <span className='signup__action'>확인 →</span>
            </div>

            {/* 비밀번호 */}
            <input
              className='signup__input'
              type='password'
              placeholder='영문, 숫자 포함 8자 이상 비밀번호'
              autoComplete='new-password'
              required
            />

            {/* 비밀번호 재입력 */}
            <input
              className='signup__input'
              type='password'
              placeholder='비밀번호 재입력'
              autoComplete='new-password'
              required
            />
          </div>

          {/* 가입 완료 버튼 */}
          <Button variant='primary' type='submit'>
            가입 완료
          </Button>
        </section>
      </div>
    </main>
  )
}
