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
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    try {
      const response = await axios.post('/api/user/login', {
        email: email,
        password: password
      });
      
      // 로그인 성공 (명세서의 return 값 띄우기)
      console.log('백엔드 응답:', response.data);
      alert(response.data.return) // "로그인 성공" 알림창
      navigate('/'); // 메인 페이지로 이동

    } catch (error) {
      //실패 시 상태 코드(Status)별 에러 처리
      if (error.response) {
        const status = error.response.status;
        const errorMessage = error.response.data.message;

        if (status === 404) {
          // 상태 404: 가입되지 않은 이메일
          alert(errorMessage); // "존재하지 않는 회원입니다."
        } else if (status === 401) {
          // 상태 401: 비밀번호 틀림
          alert(errorMessage); // "이메일 또는 비밀번호가 올바르지 않습니다."
        } else {
          // 기타 서버 에러 (500 등)
          alert('로그인 처리 중 문제가 발생했습니다.')
        }
      } else {
        // 백엔드 서버가 아예 꺼져있거나 인터넷 연결이 안 될 때
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
                value={email} // [JS] 상태 연결
                onChange={(e) => setEmail(e.target.value)} // [JS] 입력값 업데이트
              />

              {/* 비밀번호 입력 */}
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

              {/* 로그인 버튼 */}
              {/* [JS] onClick에 handleLogin 함수 연결 */}
              <Button variant='primary' size='md' type='submit' onClick={handleLogin}>
                로그인
              </Button>

              {/* 회원가입 버튼 */}
              {/* [JS] onClick으로 회원가입 페이지 이동 연결 */}
              <Button variant='ghost' size='md' onClick={() => navigate('/signup')}>
                회원가입
              </Button>
            </div>

            {/* 비밀번호 찾기 링크 */}
            {/* [JS] onClick으로 모달 열기 연결 (클릭할 수 있게 cursor 스타일 추가) */}
            <a 
              className='login__forgot' 
              onClick={() => setIsModalOpen(true)} 
              style={{ cursor: 'pointer' }}
            >
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