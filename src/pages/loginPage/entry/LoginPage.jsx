import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import InputField from '../../../components/inputField/InputField'
import Button from '../../../components/button/Button'
import PasswordChangeModal from '../components/passwordChangeModal/PasswordChangeModal'
import './LoginPage.css'

export default function LoginPage() {
  // [JS] 모달 열기/닫기 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  // [JS] 로그인 API 연동 로직
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/user/login', {
        email: email,
        password: password,
      })

      console.log('백엔드 응답:', response.data)
      alert(response.data.return)
      navigate('/')
    } catch (error) {
      if (error.response) {
        const status = error.response.status
        const errorMessage = error.response.data.message

        if (status === 404) {
          alert(errorMessage)
        } else if (status === 401) {
          alert(errorMessage)
        } else {
          alert('로그인 처리 중 문제가 발생했습니다.')
        }
      } else {
        alert('서버와 연결할 수 없습니다.')
      }

      console.error('로그인 에러:', error)
    }
  }

  return (
    <main className='login'>
      <div className='login__wrap'>
        {/* 로고 */}
        <h1 className='login__brand'>CarTALK</h1>

        {/* 로그인 카드 */}
        <section className='login__card' aria-label='로그인'>
          {/* content — body + divider + 비밀번호 찾기 */}
          <div className='login__content'>
            {/* body — 인풋 + 버튼들 */}
            <div className='login__body'>
              <InputField
                id='email'
                type='email'
                name='email'
                placeholder='이메일을 입력하세요'
                autoComplete='email'
                required
                value={email} // [JS] 상태 연결
                onChange={(e) => setEmail(e.target.value)} // [JS] 입력값 업데이트
              />
              <InputField
                id='password'
                type='password'
                name='password'
                placeholder='비밀번호를 입력하세요'
                autoComplete='current-password'
                required
                value={password} // [JS] 상태 연결
                onChange={(e) => setPassword(e.target.value)} // [JS] 입력값 업데이트
              />
              {/* [JS] onClick에 handleLogin 함수 연결 */}
              <Button variant='primary' type='submit' onClick={handleLogin}>
                로그인
              </Button>
              {/* [JS] onClick으로 회원가입 페이지 이동 연결 */}
              <Button variant='ghost' onClick={() => navigate('/signup')}>
                회원가입
              </Button>
            </div>

            {/* 구분선 */}
            <div className='login__divider' />

            {/* 비밀번호 찾기 */}
            {/* [JS] onClick으로 모달 열기 연결 */}
            <a className='login__forgot' onClick={() => setIsModalOpen(true)}>
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </section>
      </div>

      {/* 비밀번호 변경 모달 */}
      {/* [JS] onClose prop으로 모달 닫기 연결 */}
      {isModalOpen && <PasswordChangeModal onClose={() => setIsModalOpen(false)} />}
    </main>
  )
}
