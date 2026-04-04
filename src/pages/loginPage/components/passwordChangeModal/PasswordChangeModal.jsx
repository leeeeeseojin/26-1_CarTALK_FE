import InputField from '../../../../components/inputField/InputField'
import Button from '../../../../components/button/Button'
import StepIndicator from '../stepIndicator/StepIndicator'
import './PasswordChangeModal.css'

export default function PasswordChangeModal() {
  return (
    <div className='pwd-modal__overlay'>
      <div className='pwd-modal'>
        {/* 헤더 */}
        <div className='pwd-modal__header'>
          <h2 className='pwd-modal__title'>비밀번호 변경</h2>
          <button className='pwd-modal__close' type='button'>
            ✕
          </button>
        </div>

        {/* 스텝 인디케이터 */}
        {/* [JS] done 스텝에서는 렌더링하지 않아야 함 */}
        {/* =>  step !== 'done' && <StepIndicator total={3} current={step} /> */}
        <StepIndicator total={3} current={3} />

        {/* 바디 — step 1
        <div className='pwd-modal__body'>
          <div className='pwd-modal__step-body'>
            <p className='pwd-modal__desc'>가입 시 사용한 이메일을 입력해주세요</p>
            <div className='pwd-modal__row'>
              <InputField
                id='pwd-email'
                type='email'
                name='email'
                placeholder='이메일을 입력하세요'
                autoComplete='email'
              />
              <Button variant='primary' size='sm' width='86px'>
                이메일 인증
              </Button>
            </div>
          </div>
        </div> */}

        {/* 바디 — step 2
        <div className='pwd-modal__body'>
          <div className='pwd-modal__step-body'>
            <div className='pwd-modal__field'>
              <p className='pwd-modal__desc'>이메일로 발송된 인증코드를 입력해주세요</p>
              <div className='pwd-modal__row'>
                <InputField id='pwd-code' type='text' name='code' placeholder='인증코드 6자리' />
                <Button variant='primary' size='sm' width='86px'>
                  재발송
                </Button>
              </div>
            </div>
            <p className='pwd-modal__error'>인증코드가 일치하지 않습니다</p>
          </div>
        </div> */}

        {/* 바디 — step 3
        <div className='pwd-modal__body'>
          <div className='pwd-modal__step-body'>
            <div className='pwd-modal__field'>
              <p className='pwd-modal__desc'>새로 사용할 비밀번호를 입력해주세요</p>
              <div className='pwd-modal__inputs'>
                <InputField
                  id='pwd-new'
                  type='password'
                  name='newPassword'
                  placeholder='새 비밀번호'
                  autoComplete='new-password'
                />
                <InputField
                  id='pwd-confirm'
                  type='password'
                  name='confirmPassword'
                  placeholder='비밀번호 재입력'
                  autoComplete='new-password'
                />
              </div>
              <p className='pwd-modal__error'>비밀번호가 일치하지 않습니다</p>
            </div>
            <div className='pwd-modal__footer'>
              <Button variant='primary' size='sm' width='120px'>
                변경 완료
              </Button>
            </div>
          </div>
        </div> */}

        {/* 바디 — done */}
        <div className='pwd-modal__body'>
          <div className='pwd-modal__done'>
            <div className='pwd-modal__done-content'>
              <div className='pwd-modal__done-icon'>
                <img src='/src/assets/step/step-check-icon.svg' alt='완료' />
              </div>
              <p className='pwd-modal__done-title'>비밀번호가 변경됐어요</p>
              <p className='pwd-modal__done-desc'>새 비밀번호로 로그인해 주세요</p>
            </div>
            <Button variant='primary' size='sm' width='320px'>
              로그인 화면으로
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
