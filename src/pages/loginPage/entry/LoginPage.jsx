import { useState } from 'react'
import InputField from '../../../components/inputField/InputField'
import Button from '../../../components/button/Button'
import PasswordChangeModal from '../components/passwordChangeModal/PasswordChangeModal'
import './LoginPage.css'

export default function LoginPage() {
  // [JS] 모달 열기/닫기 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className='login'>
      <div className='login__wrap'>
        {/* 로고 */}
        <h1 className='login__brand'>CarTALK</h1>

        {/* 로그인 카드 */}
        <section className='login__card' aria-label='로그인'>
          <div className='login__fields'>
            <div className='login__inputs'>
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
              {/* [JS 담당] type="submit" → form onSubmit 연결 필요 */}
              <Button variant='primary' size='md' type='submit'>
                로그인
              </Button>

              {/* 회원가입 버튼 */}
              {/* [JS] onClick={() => navigate('/signup')} 추가 필요 */}
              <Button variant='ghost' size='md'>
                회원가입
              </Button>
            </div>

            {/* 비밀번호 찾기 링크 */}
            {/* [JS] onClick={() => setIsModalOpen(true)} 으로 수정 필요 */}
            <a className='login__forgot' onClick={() => setIsModalOpen(true)}>
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </section>
      </div>

      {/* 비밀번호 변경 모달 */}
      {/* [JS] onClose={() => setIsModalOpen(false)} prop 연결 필요 */}
      {isModalOpen && <PasswordChangeModal />}
    </main>
  )
}
