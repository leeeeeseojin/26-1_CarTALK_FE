import { useState } from 'react' // [JS] 상태 관리를 위해 추가
import InputField from '../../../../components/inputField/InputField'
import Button from '../../../../components/button/Button'
import StepIndicator from '../stepIndicator/StepIndicator'
import './PasswordChangeModal.css'

export default function PasswordChangeModal({ onClose }) {
  // [JS] 현재 진행 단계를 기억하는 상태 (1, 2, 3, 'done')
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSendEmail = () => setStep(2)
  const handleVerifyCode = () => setStep(3)
  const handleChangePassword = () => setStep('done')

  return (
    <div className='pwd-modal__overlay'>
      <div className='pwd-modal'>
        {/* 헤더 */}
        <div className='pwd-modal__header'>
          <h2 className='pwd-modal__title'>비밀번호 변경</h2>
          <button className='pwd-modal__close' type='button' onClick={onClose}>
            ✕
          </button>
        </div>

        {/* 스텝 인디케이터 */}
        {/* [JS] done 스텝에서는 렌더링하지 않아야 함 */}
        {step !== 'done' && <StepIndicator total={3} current={step} />}

        {/* 바디 — step 1 */}
        {step === 1 && (
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
                  value={email} // [JS] 입력값 연결
                  onChange={(e) => setEmail(e.target.value)} // [JS] 입력값 업데이트
                />
                {/* [JS] 클릭 시 2단계로 이동 */}
                <Button variant='primary' size='sm' width='86px' onClick={handleSendEmail}>
                  이메일 인증
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* 바디 — step 2 */}
        {step === 2 && (
          <div className='pwd-modal__body'>
            <div className='pwd-modal__step-body'>
              <div className='pwd-modal__field'>
                <p className='pwd-modal__desc'>이메일로 발송된 인증코드를 입력해주세요</p>
                <div className='pwd-modal__row'>
                  <InputField 
                    id='pwd-code' 
                    type='text' 
                    name='code' 
                    placeholder='인증코드 6자리' 
                    value={code} // [JS] 입력값 연결
                    onChange={(e) => setCode(e.target.value)} // [JS] 입력값 업데이트
                    // [JS] 현재 디자인에 '확인' 버튼이 따로 없으므로, 인증코드 칸에서 엔터(Enter)키를 치면 3단계로 넘어가게 임시 조치했습니다.
                    onKeyDown={(e) => e.key === 'Enter' && handleVerifyCode()}
                  />
                  <Button variant='primary' size='sm' width='86px'>
                    재발송
                  </Button>
                </div>
              </div>
              {/* [JS] 나중에 에러 로직 짤 때 조건부로 띄우기 위해 일단 숨겨둠 */}
              {/* <p className='pwd-modal__error'>인증코드가 일치하지 않습니다</p> */}
            </div>
          </div>
        )}

        {/* 바디 — step 3 */}
        {step === 3 && (
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
                    value={newPassword} // [JS] 입력값 연결
                    onChange={(e) => setNewPassword(e.target.value)} // [JS] 입력값 업데이트
                  />
                  <InputField
                    id='pwd-confirm'
                    type='password'
                    name='confirmPassword'
                    placeholder='비밀번호 재입력'
                    autoComplete='new-password'
                    value={confirmPassword} // [JS] 입력값 연결
                    onChange={(e) => setConfirmPassword(e.target.value)} // [JS] 입력값 업데이트
                  />
                </div>
                {/* [JS] 나중에 비밀번호 불일치 에러 짤 때 조건부로 띄우기 위해 숨겨둠 */}
                {/* <p className='pwd-modal__error'>비밀번호가 일치하지 않습니다</p> */}
              </div>
              <div className='pwd-modal__footer'>
                {/* [JS] 클릭 시 완료(done) 화면으로 이동 */}
                <Button variant='primary' size='sm' width='120px' onClick={handleChangePassword}>
                  변경 완료
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* 바디 — done */}
        {step === 'done' && (
          <div className='pwd-modal__body'>
            <div className='pwd-modal__done'>
              <div className='pwd-modal__done-content'>
                <div className='pwd-modal__done-icon'>
                  <img src='/src/assets/step/step-check-icon.svg' alt='완료' />
                </div>
                <p className='pwd-modal__done-title'>비밀번호가 변경됐어요</p>
                <p className='pwd-modal__done-desc'>새 비밀번호로 로그인해 주세요</p>
              </div>
              <Button variant='primary' size='sm' width='320px' onClick={onClose}>
                로그인 화면으로
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}